export const cryptoTypeDefs = `#graphql
  type EstimatedGasFees {
    payGasFeeToken: String
    maxGasFeeToken: String
    gasFeeTokenAmount: String
    gasFeeTokenAmountUSD: String
    maxGasFeeNative: String
  }

  type EstimatedCollectedFee {
    collectedFeeToken: String
    collectedFee: String
    collectedFeePercent: String
    notusCollectedFee: String
    notusCollectedFeePercent: String
  }

  type Authorization {
    chainId: Int
    address: String
    nonce: Int
    hash: String
  }

  type RevertReason {
    decoded: String
    raw: String
    utf8: String
  }

  type SwapQuote {
    metadata: JSON
    userOperationHash: String
    quoteId: String
    revertReason: RevertReason
    authorization: Authorization
    walletAddress: String
    tokenIn: String
    amountIn: String
    tokenOut: String
    chainIn: Int
    chainOut: Int
    minAmountOut: String
    estimatedExecutionTime: String
    estimatedGasFees: EstimatedGasFees
    estimatedCollectedFee: EstimatedCollectedFee
    amountInUSD: String
    amountOutUSD: String
    tokenInPrice: String
    swapProvider: String
    expiresAt: String
  }

  type SwapQuotesResponse {
    quotes: [SwapQuote!]!
  }

  input SwapInput {
    amountIn: String!
    chainIdIn: Int!
    chainIdOut: Int!
    gasFeePaymentMethod: String!
    payGasFeeToken: String!
    tokenIn: String!
    tokenOut: String!
    walletAddress: String!
    toAddress: String!
    routeProfile: String
    transactionFeePercent: Float
    slippage: Float
    metadata: JSON
  }

  type Transfer {
    metadata: JSON
    userOperationHash: String
    quoteId: String
    revertReason: RevertReason
    authorization: Authorization
    walletAddress: String
    token: String
    amountToSend: String
    amountToSendUSD: String
    amountToBeReceived: String
    amountToBeReceivedUSD: String
    chain: Int
    estimatedExecutionTime: String
    estimatedGasFees: EstimatedGasFees
    estimatedCollectedFee: EstimatedCollectedFee
    toAddress: String
    expiresAt: String
  }

  type TransferResponse {
    transfer: Transfer!
  }

  input TransferInput {
    amount: String!
    chainId: Int!
    gasFeePaymentMethod: String!
    payGasFeeToken: String!
    token: String!
    walletAddress: String!
    toAddress: String!
    transactionFeePercent: Float
    metadata: JSON
  }

  type Mutation {
    createSwap(input: SwapInput!): SwapQuotesResponse!
    createTransfer(input: TransferInput!): TransferResponse!
  }
`;