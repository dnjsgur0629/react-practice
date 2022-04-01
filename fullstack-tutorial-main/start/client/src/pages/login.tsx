import React from 'react';
import {gql, useMutation} from '@apollo/client';

import {LoginForm, Loading} from '../components';
import * as LoginTypes from './__generated__/Login';
import {isLoggedInVar} from "../cache";

//email로 로그인하는 mutation
export const LOGIN_USER = gql`
    mutation Login($email: String!) {
        login(email: $email) {
            id
            token
        }
    }
`;

export default function Login() {
  //useQuery와 비슷하게 mutation을 사용하게 해주는 useMutation hook
  const [login, {loading, error}] = useMutation<
      LoginTypes.Login,
      LoginTypes.LoginVariables
      >(LOGIN_USER, {
    onCompleted({login}) {  //mutation이 성공하면
      if (login) {
        localStorage.setItem('token', login.token as string); //localstorage에 token과 userId를 저장해서 로그인이 유지되도록 함
        localStorage.setItem('userId', login.id as string);
        isLoggedInVar(true);
      }
    }
  });

  if (loading) return <Loading/>;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login}/>;
}