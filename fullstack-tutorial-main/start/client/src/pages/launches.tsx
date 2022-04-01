import React, {Fragment, useState} from 'react';
import {RouteComponentProps} from '@reach/router';
import {gql, useQuery} from '@apollo/client';
import {LaunchTile, Header, Button, Loading} from '../components';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';

export const LAUNCH_TILE_DATA = gql`
    fragment LaunchTile on Launch {
        __typename
        id
        isBooked
        rocket {
            id
            name
        }
        mission {
            name
            missionPatch
        }
    }
`;

export const GET_LAUNCHES = gql`
    query GetLaunchList($after: String) {
        launches(after: $after) {
            cursor
            hasMore
            launches {
                ...LaunchTile      #위의 fragment 사용
            }
        }
    }
    ${LAUNCH_TILE_DATA}     # 선언한 fragment를 사용하려면 query밑에서 일단 가져오고 사용한다.
`;

interface LaunchesProps extends RouteComponentProps {
}

const Launches: React.FC<LaunchesProps> = () => {
  const { //쿼리를 날리고 data와 loading, error의 상태값을 받는다.
    data,
    loading,
    error,
    fetchMore
  } = useQuery<GetLaunchListTypes.GetLaunchList,
      GetLaunchListTypes.GetLaunchListVariables>(GET_LAUNCHES);  //위에 만들었던 쿼리
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading) return <Loading/>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  //data가 정상적으로 도달하면 key값을 주면서 그려준다.
  return (
      <Fragment>
        <Header/> {/*머리에 강아지 그려줌*/}
        {data.launches &&
            data.launches.launches &&
            data.launches.launches.map((launch: any) => (
                <LaunchTile key={launch.id} launch={launch}/>  /*LaunchTile에서 스타일을 먹여서 그려줌*/
            ))}
        {data.launches && data.launches.hasMore && (
            isLoadingMore
                ? <Loading/>   /*더보기 로딩중이면 Loading component 보여줌*/
                : <Button   /*Load More 버튼*/
                    onClick={async () => {
                      setIsLoadingMore(true);
                      await fetchMore({   //버튼을 누르면 setIsLoadingMore(true)하고 fetch more 동작을 함
                        variables: {
                          after: data.launches.cursor,
                        },
                      });
                      setIsLoadingMore(false);  //fetch more 끝나면 setIsLoadingMore(false)
                    }}
                >
                  Load More
                </Button>
        )}
      </Fragment>
  );
}

export default Launches;
