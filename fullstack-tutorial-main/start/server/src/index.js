const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers'); // export된 resolver를 가져와서

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');
const isEmail = require('isemail');

const store = createStore();

const server = new ApolloServer({
  context: async ({ req }) => {
    // simple auth check on every request
    const auth = req.headers && req.headers.authorization || '';  //req.header에 auth가 있으면 그것을 auth로 하고
    const email = Buffer.from(auth, 'base64').toString('ascii');  //email을 가져와서

    if (!isEmail.validate(email)) return { user: null };

    // find a user by their email
    const users = await store.users.findOrCreate({ where: { email } }); //email을 가지고 fineOrCreate
    const user = users && users[0] || null; //user가 있다면

    return { user: { ...user.dataValues } };  //user를 context에 담아서 return (Apollo Server에서 사용하는 resolver들이 이 user를 알 수 있게 됨)
  },
  typeDefs,
  resolvers, // ApolloServer의 2번째 인자로 넘겨줌
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});