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
    salt: String!
    registeredAt: String
  }

  type Transfer {
    from: String!,
    to: String!,
    value: String!,
    data: String!,
    estimateGasCost: String!,
  }

  type WalletResponse {
    wallet: Wallet!
  }

  type WalletsResponse {
    wallets: [Wallet!]!
  }

  type DepositTransactionResponse {
    transfer: Transfer!
  }

  input RegisterWalletInput {
    externallyOwnedAccount: String!
    factory: String!
    salt: String!
    eip7702: Boolean
    metadata: JSON
  }

  input DepositTransactionInput {
    amount: String!
    chainId: Int!
    token: String!
    fromAddress: String!
  }

  type Mutation {
    registerSmartWallet(input: RegisterWalletInput!): WalletResponse!
    createDepositTransaction(walletAddress: String!, input: DepositTransactionInput!): DepositTransactionResponse!
  }

  type Query {
    getSmartWallet(
      externallyOwnedAccount: String!
      factory: String!
      salt: String
      eip7702: Boolean
    ): WalletResponse!
    getSmartWalletsByProject: WalletsResponse!
  }
`;