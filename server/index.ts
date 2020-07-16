import express from 'express';
import next from 'next';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../src/lib/graphql/schema';
import resolvers from '../src/lib/graphql/resolvers';
import StoreApi from '../src/lib/graphql/datasources/Store';

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express();


  const graphql = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      storeApi: new StoreApi()
    })
  }) as any;

  graphql.applyMiddleware({ app: server, path: '/api/graphql' });


  server.get('/a', (req, res) => {
    return app.render(req, res, '/a')
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b')
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
