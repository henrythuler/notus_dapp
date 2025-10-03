export const walletTypeDefs = `#graphql
  scalar JSON

  type DeploymentStatus {
    chain: Chain!
    deployed: Boolean!
  }

  type Wallet {
    metadata: JSON
    walletAddress: String!
    accountAbstraction: String!
    externallyOwnedAccount: String!
    factory: String!
    implementation: String!
    eip7702: Boolean!
    deployed: [DeploymentStatus!]!
    salt: Int!
    registeredAt: String
  }

  type WalletResponse {
    wallet: Wallet!
  }

  input RegisterWalletInput {
    externallyOwnedAccount: String!
    factory: String!
    salt: String!
    eip7702: Boolean
    metadata: JSON
  }

  type Mutation {
    registerSmartWallet(input: RegisterWalletInput!): WalletResponse!
  }
`;