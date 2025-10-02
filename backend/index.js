import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";
import { blockchainTypeDefs } from "./src/graphql/typeDefs/blockchain.js";
import { blockchainResolvers } from "./src/graphql/resolvers/blockchainResolver.js";

const typeDefs = blockchainTypeDefs

const resolvers = {
  Query: {
    ...blockchainResolvers.Query,
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
      console.error("GraphQL Error:", error);
      return {
        message: error.message,
        code: error.extensions?.code || "INTERNAL_SERVER_ERROR",
        ...(config.nodeEnv === "development" && {
          details: error.extensions,
        }),
      };
    }
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(4000, () => {
    console.log("Listening at http://localhost:4000/graphql");
  });
}

startServer();