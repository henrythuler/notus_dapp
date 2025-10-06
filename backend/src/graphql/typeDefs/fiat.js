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

  type PaymentMethodToSendDetails {
    type: String!
    pixKey: String
    base64QrCode: String
  }

  type DepositOrder {
    expiresAt: String!
    orderId: String!
    paymentMethodToSendDetails: PaymentMethodToSendDetails!
  }

  type DepositOrderResponse {
    depositOrder: DepositOrder!
  }

  input CreateDepositQuoteInput {
    paymentMethodToSend: String!
    receiveCryptoCurrency: String!
    amountToSendInFiatCurrency: Float!
    individualId: String!
    walletAddress: String!
    chainId: Int!
  }

  input CreateDepositOrderInput {
    quoteId: String!
  }

  type Mutation {
    createFiatDepositQuote(input: CreateDepositQuoteInput!): DepositQuoteResponse!
    createFiatDepositOrder(input: CreateDepositOrderInput!): DepositOrderResponse!
  }
`;