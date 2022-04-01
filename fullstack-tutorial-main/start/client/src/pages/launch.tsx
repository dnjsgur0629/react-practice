import React, {Fragment} from 'react';
import { RouteComponentProps } from '@reach/router';
import {gql, useQuery} from '@apollo/client';
import { LAUNCH_TILE_DATA } from './launches';
import { Loading, Header, LaunchDetail } from '../components';
import { ActionButton } from '../containers';
import * as LaunchDetailsTypes from './__generated__/LaunchDetails';

//id로 세부내용을 가져오는 query문 정의
export const GET_LAUNCH_DETAILS = gql`
    query LaunchDetails($launchId: ID!) {
        launch(id: $launchId) {
            site
            rocket {
                type
            }
            ...LaunchTile
        }
    }
    ${LAUNCH_TILE_DATA}
`;

interface LaunchProps extends RouteComponentProps {
    launchId?: any;
}

const Launch: React.FC<LaunchProps> = ({ launchId }) => {
    const {
        data,
        loading,
        error,
    } = useQuery<
        LaunchDetailsTypes.LaunchDetails,
        LaunchDetailsTypes.LaunchDetailsVariables
        >(GET_LAUNCH_DETAILS,
        { variables: { launchId } } // useQuery에서 variables로 id 전달
    );

    if (loading) return <Loading />;
    if (error) return <p>ERROR: {error.message}</p>;
    if (!data) return <p>Not found</p>;

    return (
        <Fragment>
            <Header image={data.launch && data.launch.mission && data.launch.mission.missionPatch}>
                {data && data.launch && data.launch.mission && data.launch.mission.name}
            </Header>
            <LaunchDetail {...data.launch} />
            <ActionButton {...data.launch} />
        </Fragment>
    );
}

export default Launch;
