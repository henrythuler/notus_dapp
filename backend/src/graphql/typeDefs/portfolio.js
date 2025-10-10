export const portfolioTypeDefs = `#graphql
  type PortfolioToken {
    address: String!
    name: String!
    symbol: String!
    decimals: Int!
    logo: String
    chain: Chain!
    balance: String!
    balanceFormatted: String!
    balanceUsd: String!
    priceUsd: String!
  }

  type NFTCollection {
    name: String!
    symbol: String!
    logo: String
  }

  type NFT {
    address: String!
    collection: NFTCollection!
    tokenId: String!
    name: String!
    description: String
    image: String
    amount: String!
    chain: Chain!
  }

  type Portfolio {
    tokens: [PortfolioToken!]!
    nfts: [NFT!]!
    portfolio: [PortfolioToken!]!
  }

  extend type Query {
    getWalletPortfolio(walletAddress: String!): Portfolio!
  }
`;