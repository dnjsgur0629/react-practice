const {RESTDataSource} = require("apollo-datasource-rest"); // REST API에서 데이터 가져오기를 처리

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v2/";  //Space-X API의 기본 URL
  }

  async getAllLaunches() {
    const response = await this.get('launches');
    return Array.isArray(response)
        ? response.map(launch => this.launchReducer(launch))    //reducer로 데이터를 원하는 형식으로 가공합니다.
        : [];
  }

  launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  async getLaunchById({launchId}) {
    const response = await this.get('launches', {flight_number: launchId}); //launch 하나
    return this.launchReducer(response[0]);
  }

  getLaunchesByIds({launchIds}) {
    return Promise.all(
        launchIds.map(launchId => this.getLaunchById({launchId})),  //launch 여러개를 promise로 반환
    );
  }
}

module.exports = LaunchAPI;