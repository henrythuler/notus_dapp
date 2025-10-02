export const blockchainTypeDefs = `#graphql
  type Chain {
    id: Int!
    name: String!
    logo: String
  }

  type ChainsResponse {
    chains: [Chain!]!
  }

  type Query {
    listChains(page: Int, perPage: Int): ChainsResponse!
  }
`;