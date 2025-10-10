export const transactionTypeDefs = `#graphql
  type TransactionHash {
    hash: String!
    explorerURL: String!
    explorer: String!
  }

  type CryptoCurrency {
    name: String!
    symbol: String!
    decimals: Int!
    address: String!
    logoURL: String
  }

  type AmountInCurrencies {
    btc: String
    eth: String
    usd: String
    brl: String
    eur: String
    gbp: String
    jpy: String
    cad: String
    aud: String
    chf: String
    cny: String
    inr: String
    krw: String
    mxn: String
    rub: String
  }

  type ReceivedAmount {
    token: CryptoCurrency
    cryptoCurrency: CryptoCurrency
    amount: String!
    amountIn: AmountInCurrencies
  }

  type Transaction {
    id: ID!
    metadata: JSON
    createdAt: String!
    updatedAt: String!
    executedAt: String
    status: String!
    transactionHash: TransactionHash
    chain: Chain!
    type: String!
    userOperationHash: String
    receivedBy: String
    receivedFromAddress: String
    receivedCryptoCurrency: CryptoCurrency
    receivedAmount: ReceivedAmount
  }

  type TransactionHistoryResponse {
    nextLastId: String
    transactions: [Transaction!]!
  }

  type TransactionResponse {
    transaction: Transaction!
  }

  input UpdateTransactionMetadataInput {
    metadata: JSON!
  }

  extend type Query {
    getWalletHistory(
      walletAddress: String!
      take: Int
      lastId: String
      type: [String!]
      status: [String!]
      userOperationHash: String
      transactionHash: String
      chains: [Int!]
      createdAtLatest: String
      createdAtOldest: String
      metadataKey: String
      metadataValue: String
    ): TransactionHistoryResponse!
  }

  extend type Mutation {
    updateTransactionMetadata(
      transactionId: String!
      input: UpdateTransactionMetadataInput!
    ): TransactionResponse!
  }
`;