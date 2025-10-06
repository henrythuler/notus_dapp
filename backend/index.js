import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import cors from "cors";
import { blockchainTypeDefs } from "./src/graphql/typeDefs/blockchain.js";
import { blockchainResolvers } from "./src/graphql/resolvers/blockchainResolver.js";
import { walletTypeDefs } from "./src/graphql/typeDefs/wallet.js";
import { walletResolvers } from "./src/graphql/resolvers/walletResolver.js";
import { config } from "./src/config/index.js";
import { portfolioTypeDefs } from "./src/graphql/typeDefs/portfolio.js";
import { portfolioResolvers } from "./src/graphql/resolvers/portfolioResolver.js";
import { transactionTypeDefs } from "./src/graphql/typeDefs/transaction.js";
import { transactionResolvers } from "./src/graphql/resolvers/transactionResolver.js";
import { kycTypeDefs } from "./src/graphql/typeDefs/kyc.js";
import { kycResolvers } from "./src/graphql/resolvers/kycResolver.js";

const typeDefs = [
  blockchainTypeDefs,
  walletTypeDefs,
  portfolioTypeDefs,
  transactionTypeDefs,
  kycTypeDefs,
];

const resolvers = {
  JSON: walletResolvers.JSON,
  Query: {
    ...blockchainResolvers.Query,
    ...walletResolvers.Query,
    ...portfolioResolvers.Query,
    ...transactionResolvers.Query,
    ...kycResolvers.Query,
  },
  Mutation: {
    ...walletResolvers.Mutation,
    ...transactionResolvers.Mutation,
    ...kycResolvers.Mutation,
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

  app.listen(config.port, () => {
    console.log(`Listening at http://localhost:${config.port}/graphql`);
  });
}

startServer();