export const fiatTypeDefs = `#graphql
  type DepositQuote {
    quoteId: String!
    amountToSendInFiatCurrency: String!
    amountToReceiveInCryptoCurrency: String!
    expiresAt: String!
  }

  type DepositQuoteResponse {
    depositQuote: DepositQuote!
  }

  input CreateDepositQuoteInput {
    paymentMethodToSend: String!
    receiveCryptoCurrency: String!
    amountToSendInFiatCurrency: Float!
    individualId: String!
    walletAddress: String!
    chainId: Int!
  }

  type Mutation {
    createFiatDepositQuote(input: CreateDepositQuoteInput!): DepositQuoteResponse!
  }
`;