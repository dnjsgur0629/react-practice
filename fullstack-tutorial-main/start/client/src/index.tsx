import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider, gql, useQuery
} from '@apollo/client';
import {cache} from './cache';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import injectStyles from './styles';
import Login from "./pages/login";

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        cartItems: [ID!]!
    }
`;

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

function IsLoggedIn() {
  const {data} = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages/> : <Login/>; //로그인이 되어있다면 Page를 그렇지 않으면 Login component를 반환
}

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token') || ''
  },
  typeDefs,
});

injectStyles();

// ApolloProvider로 client를 주입해주면 하위 컴포넌트에서 gql을 날릴 수 있는 client에 접근할 수 있게 된다.
ReactDOM.render(
    <ApolloProvider client={client}>
      <IsLoggedIn/>
    </ApolloProvider>,
    document.getElementById('root')
);