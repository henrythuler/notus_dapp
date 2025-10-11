# Queries and Mutations Examples for Notus dApp

## Smart Wallets

### 1. Register Wallet

```graphql
mutation RegisterSmartWallet{
  registerSmartWallet(
    input: {
      externallyOwnedAccount: "0x133700000000000000000000000000000000c0de"
      factory: "0x0000000000400cdfef5e2714e63d8040b700bc24"
      salt: "12345"
      eip7702: false
      metadata: { name: "My Test Wallet" }
    }
  ) {
    wallet {
      walletAddress
      accountAbstraction
      registeredAt
    }
  }
}
```

### 2. Get Smart Wallet

```graphql
query GetSmartWallet{
  getSmartWallet(
    externallyOwnedAccount: "0x133700000000000000000000000000000000c0de"
    factory: "0x0000000000400cdfef5e2714e63d8040b700bc24"
    salt: "12345"
  ) {
    wallet {
      walletAddress
      deployed {
        chain {
          id
          name
        }
        deployed
      }
    }
  }
}
```

### 3. Get Smart Wallets By Project

```graphql
query GetSmartWalletsByProject{
  getSmartWalletsByProject {
    wallets {
      walletAddress
      registeredAt
      metadata
    }
  }
}
```

### 4. Create Deposit Transaction

```graphql
mutation CreateDepositTransaction{
  createDepositTransaction(
    walletAddress: "registered_smart_wallet_address",
    input: {
      amount: "100.00"
      chainId: 137
      token: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174"
      fromAddress: "another_smart_wallet_address"
    }
  ) {
    transfer {
      from
      to
      value
      estimateGasCost
    }
  }
}
```

### 5. Update Wallet Metadata

```graphql
mutation UpdateWalletMetadata{
  updateWalletMetadata(
    walletAddress: "0xe0367a359528b149620421e2ac1d83a55d4fe26c"
    input: {
      metadata: { name: "My Updated Wallet", category: "main" }
    }
  ) {
    wallet {
      walletAddress
      metadata
    }
  }
}
```

### 6. Update Transaction Metadata

```graphql
mutation UpdateTransactionMetadata{
  updateTransactionMetadata(
    transactionId: "your_transaction_id"
    input: {
      metadata: {
        category: "payment"
        note: "Test transaction"
      }
    }
  ) {
    transaction {
      id
      metadata
      status
    }
  }
}
```

## KYC (Know Your Customer)

### 1. Create/Process KYC Session

```graphql
mutation CreateKycSession {
  createKycSession(
    input: {
      firstName: "your name",
      lastName: "your last name",
      birthDate: "dd/mm/aaaa",
      documentCountry: "BRAZIL",
      livenessRequired: false,
      documentId: "cpf number",
      documentCategory: "DRIVERS_LICENSE",
      email: "your email",
      address: "your address",
      city: "your city",
      state: "your state",
      postalCode: "your postal code",
      frontFilePath: "/Users/henrythuler/Pictures/doc_front.jpeg" (document front photo path),
      backFilePath: "/Users/henrythuler/Pictures/doc_back.jpeg" (document back photo path)
    }
  ) {
    session {
      id
      status
      firstName
      lastName
      birthDate
      document {
        id
        type
        category
      }
    },
  }
}
```

### 2. Process KYC Session

```graphql
mutation ProcessKycSession {
  processKycSession(sessionId: "your_session_id")
}
```

### 3. Get KYC Session

```graphql
query GetKycSession {
  getKycSession(sessionId: "your_session_id") {
    session {
      id
      individualId
      status
      createdAt
      updatedAt
      document {
        id
        category
      }
    }
  }
}
```

## Fiat Operations

### 1. Create Fiat Deposit Quote

```graphql
mutation CreateFiatDepositQuote {
  createFiatDepositQuote(
    input: {
      paymentMethodToSend: "PIX"
      receiveCryptoCurrency: "USDC"
      amountToSendInFiatCurrency: "100"
      individualId: "your_individual_id"
      walletAddress: "your_wallet_address"
      chainId: 137
    }
  ) {
    depositQuote {
      quoteId
      amountToSendInFiatCurrency
      amountToReceiveInCryptoCurrency
      expiresAt
    }
  }
}
```

### 2. Create Fiat Deposit Order

```graphql
mutation CreateFiatDepositOrder {
  createFiatDepositOrder(input: { quoteId: "your_quote_id" }) {
    depositOrder {
      expiresAt
      orderId
      paymentMethodToSendDetails {
        type
        pixKey
        base64QrCode
      }
    }
  }
}
```

### 3. Create Fiat Withdraw Quote

```graphql
mutation CreateFiatWithdrawQuote {
  createFiatWithdrawQuote(
    input: {
      individualId: "your_individual_id"
      amountToSendInCryptoCurrency: "100"
      cryptoCurrencyToSend: "USDC"
      paymentMethodToReceiveDetails: {
        type: "PIX"
        pixKey: "fulano@email.com"
      }
      chainId: 137
    }
  ) {
    withdrawQuote {
      quoteId
      cryptoCurrencyToSend
      fiatCurrencyToReceive
      amountToSendInCryptoCurrency
      amountToReceiveInFiatCurrency
      transactionFeeInCryptoCurrency
      estimatedGasFeeInCryptoCurrency
      expiresAt
    }
  }
}
```

### 4. Create Fiat Withdraw Order

```graphql
mutation CreateFiatWithdrawOrder {
  createFiatWithdrawOrder(
    input: {
      quoteId: "your_quote_id"
      walletAddress: "your_wallet_address"
    }
  ) {
    withdrawOrder {
      userOperationHash
      userOpHash
      orderId
      amountToSendInCryptoCurrency
      amountToReceiveInFiatCurrency
      transactionFeeAmountInCryptoCurrency
      estimatedGasFeeAmountInCryptoCurrency
      expiresAt
    }
  }
}
```

## Crypto Operations

### 1. Create Swap

```graphql
mutation CreateSwap {
  createSwap(
    input: {
      amountIn: "1.5"
      chainIdIn: 10
      chainIdOut: 10
      gasFeePaymentMethod: "ADD_TO_AMOUNT"
      payGasFeeToken: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      tokenIn: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      tokenOut: "0x0b2c639c533813f4aa9d7837caf62653d097ff85"
      walletAddress: "your_wallet_address"
      toAddress: "another_wallet_address"
      routeProfile: "QUICKEST_QUOTE"
      transactionFeePercent: 0
      slippage: 0.5
      metadata: { test: "swap-test" }
    }
  ) {
    quotes {
      quoteId
      userOperationHash
      swapProvider
      amountIn
      amountOutUSD
      estimatedExecutionTime
    }
  }
}
```

### 2. Create Transfer

```graphql
mutation CreateTransfer {
  createTransfer(
    input: {
      amount: "1.25"
      chainId: 10
      gasFeePaymentMethod: "ADD_TO_AMOUNT"
      payGasFeeToken: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      walletAddress: "your_wallet_address"
      toAddress: "another_wallet_address"
      transactionFeePercent: 0
      metadata: { purpose: "transfer-test" }
    }
  ) {
    transfer {
      quoteId
      userOperationHash
      walletAddress
      toAddress
      token
      amountToSend
      amountToBeReceived
      estimatedExecutionTime
    }
  }
}
```

## Portfolio

### 1. Get Wallet Portfolio

```graphql
query GetWalletPortfolio {
  getWalletPortfolio(walletAddress: "your_wallet_address") {
    tokens {
      address
      name
      symbol
      decimals
      logo
      chain {
        id
        name
        logo
      }
      balance
      balanceFormatted
      balanceUsd
      priceUsd
    }
    nfts {
      address
      collection {
        name
        symbol
        logo
      }
      tokenId
      name
      description
      image
      amount
      chain {
        id
        name
        logo
      }
    }
    portfolio {
      address
      name
      symbol
      decimals
      logo
      chain {
        id
        name
        logo
      }
      balance
      balanceFormatted
      balanceUsd
      priceUsd
    }
  }
}
```

## History

### 1. Get Wallet History

```graphql
query GetWalletHistory {
  getWalletHistory(walletAddress: "your_wallet_address") {
    nextLastId
    transactions {
      id
      metadata
      createdAt
      updatedAt
      executedAt
      status
      transactionHash {
        hash
        explorerURL
        explorer
      }
      chain {
        id
        name
        logo
      }
      type
      userOperationHash
      receivedBy
      receivedFromAddress
      receivedCryptoCurrency {
        name
        symbol
        decimals
        address
        logoURL
      }
      receivedAmount {
        token {
          name
          symbol
          decimals
          address
          logoURL
        }
        cryptoCurrency {
          name
          symbol
          decimals
          address
          logoURL
        }
        amount
        amountIn {
          btc
          eth
          usd
          brl
          eur
          gbp
          jpy
          cad
          aud
          chf
          cny
          inr
          krw
          mxn
          rub
        }
      }
    }
  }
}
```
