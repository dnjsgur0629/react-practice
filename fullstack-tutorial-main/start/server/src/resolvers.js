const { paginateResults } = require('./utils');

module.exports = {
  Query: {
    //pageSize의 default는 20
    launches: async (_, { pageSize = 20, after }, { dataSources }) => { //(parent, args, context)
      const allLaunches = await dataSources.launchAPI.getAllLaunches(); // 모든 launch를 조회
      // 최신 순으로 보기 위해 reverse
      allLaunches.reverse();

      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches
      }); // allLaunches를 paginateResults로 만듬

      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: launches.length
            ? launches[launches.length - 1].cursor !==
            allLaunches[allLaunches.length - 1].cursor
            : false
      };
    },
    launch: (_, {id}, {dataSources}) => //args로 id도 받음 (params로 id 사용)
        dataSources.launchAPI.getLaunchById({launchId: id}),
    me: (_, __, {dataSources}) => dataSources.userAPI.findOrCreateUser()
  },

  Mission: {
    // The default size is 'LARGE' if not provided
    missionPatch: (mission, {size} = {size: 'LARGE'}) => {
      return size === 'SMALL'
          ? mission.missionPatchSmall
          : mission.missionPatchLarge;
    },
  },

  Launch: {
    isBooked: async (launch, _, {dataSources}) =>
        dataSources.userAPI.isBookedOnLaunch({launchId: launch.id}),  //parent id로 조회해서 정보가 있으면 true 없으면 false
  },

  User: {
    trips: async (_, __, {dataSources}) => {
      // get ids of launches by user
      const launchIds = await dataSources.userAPI.getLaunchIdsByUser();

      //ids 배열의 길이가 0이면 빈배열 반환
      if (!launchIds.length) return [];

      // look up those launches by their ids
      return (
          dataSources.launchAPI.getLaunchesByIds({  //ids로 launch들을 반환, launch가 없으면 빈 배열 반환
            launchIds,
          }) || []
      );
    },
  },

  Mutation: {
    login: async (_, { email }, { dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email }); //email이 db에 있으면 그 사용자를 return하고 없으면 user를 새로 만듬
      if (user) {
        user.token = Buffer.from(email).toString('base64'); //emial을 base64로 인코딩
        return user;
      }
    },
    bookTrips: async (_, { launchIds }, { dataSources }) => {
      const results = await dataSources.userAPI.bookTrips({ launchIds });
      const launches = await dataSources.launchAPI.getLaunchesByIds({
        launchIds,
      });

      return {
        success: results && results.length === launchIds.length,
        message:
            results.length === launchIds.length
                ? 'trips booked successfully'
                : `the following launches couldn't be booked: ${launchIds.filter(
                    id => !results.includes(id),
                )}`,
        launches,
      };
    },
    cancelTrip: async (_, { launchId }, { dataSources }) => {
      const result = await dataSources.userAPI.cancelTrip({ launchId });

      if (!result)
        return {
          success: false,
          message: 'failed to cancel trip',
        };

      const launch = await dataSources.launchAPI.getLaunchById({ launchId });
      return {
        success: true,
        message: 'trip cancelled',
        launches: [launch],
      };
    },
  },
};