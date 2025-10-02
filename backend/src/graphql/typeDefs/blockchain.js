export const blockchainTypeDefs = `#graphql
  type Chain {
    id: Int!
    name: String!
    logo: String
  }

  type Token {
    id: String!
    address: String!
    name: String!
    symbol: String!
    decimals: Int!
    logo: String
    marketCap: Float
    chain: Chain!
    isWhitelistedInProject: Boolean
  }

  type ChainsResponse {
    chains: [Chain!]!
  }
  
  type TokensResponse {
    tokens: [Token!]!
    page: Int!
    totalPerPage: Int!
    total: Int!
  }

  type Query {
    listChains(page: Int, perPage: Int): ChainsResponse!
    listTokens(
      orderBy: String
      orderDir: String
      search: String
      filterByChainId: Int
      filterWhitelist: Boolean
      page: Int
      perPage: Int
      projectId: String
    ): TokensResponse!
  }
`;