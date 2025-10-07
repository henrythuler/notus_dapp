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

  type WithdrawQuote {
    quoteId: String!
    cryptoCurrencyToSend: String!
    fiatCurrencyToReceive: String!
    amountToSendInCryptoCurrency: String!
    amountToReceiveInFiatCurrency: String!
    transactionFeeInCryptoCurrency: String!
    estimatedGasFeeInCryptoCurrency: String!
    expiresAt: String!
  }

  type WithdrawQuoteResponse {
    withdrawQuote: WithdrawQuote!
  }

  type WithdrawOrder {
    expiresAt: String!
    userOperationHash: String!
    userOpHash: String
    authorization: JSON
    orderId: String!
    amountToSendInCryptoCurrency: String!
    amountToReceiveInFiatCurrency: String!
    transactionFeeAmountInCryptoCurrency: String!
    estimatedGasFeeAmountInCryptoCurrency: String!
  }

  type WithdrawOrderResponse {
    withdrawOrder: WithdrawOrder!
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

  input PaymentMethodToReceiveDetailsInput {
    type: String!
    pixKey: String!
  }

  input CreateWithdrawQuoteInput {
    individualId: String!
    amountToSendInCryptoCurrency: Float!
    cryptoCurrencyToSend: String!
    paymentMethodToReceiveDetails: PaymentMethodToReceiveDetailsInput!
    chainId: Int!
  }

  input CreateWithdrawOrderInput {
    quoteId: String!
    walletAddress: String!
  }

  type Mutation {
    createFiatDepositQuote(input: CreateDepositQuoteInput!): DepositQuoteResponse!
    createFiatDepositOrder(input: CreateDepositOrderInput!): DepositOrderResponse!
    createFiatWithdrawQuote(input: CreateWithdrawQuoteInput!): WithdrawQuoteResponse!
    createFiatWithdrawOrder(input: CreateWithdrawOrderInput!): WithdrawOrderResponse!
  }
`;