import { notusClient } from "./notusClient.js";

export const fiatService = {
  async createFiatDepositQuote({
    paymentMethodToSend,
    receiveCryptoCurrency,
    amountToSendInFiatCurrency,
    individualId,
    walletAddress,
    chainId,
  }) {
    try {
      const body = {
        paymentMethodToSend,
        receiveCryptoCurrency,
        amountToSendInFiatCurrency,
        individualId,
        walletAddress,
        chainId,
      };

      const data = await notusClient.post("/fiat/deposit/quote", body);
      return { depositQuote: data.depositQuote };
    } catch (error) {
      throw new Error(error.message || "Failed to create fiat deposit quote");
    }
  },

  async createFiatDepositOrder({ quoteId }) {
    try {
      const data = await notusClient.post("/fiat/deposit", { quoteId });
      return { depositOrder: data.depositOrder };
    } catch (error) {
      throw new Error(error.message || "Failed to create fiat deposit order");
    }
  },

  async createFiatWithdrawQuote({
    individualId,
    amountToSendInCryptoCurrency,
    cryptoCurrencyToSend,
    paymentMethodToReceiveDetails,
    chainId,
  }) {
    try {
      const body = {
        individualId,
        amountToSendInCryptoCurrency,
        cryptoCurrencyToSend,
        paymentMethodToReceiveDetails,
        chainId,
      };

      const data = await notusClient.post("/fiat/withdraw/quote", body);
      return { withdrawQuote: data.withdrawQuote };
    } catch (error) {
      throw new Error(error.message || "Failed to create fiat withdraw quote");
    }
  },
  
  async createFiatWithdrawOrder({ quoteId, walletAddress }) {
    try {
      const body = { quoteId, walletAddress };
      const data = await notusClient.post("/fiat/withdraw", body);

      return { withdrawOrder: data.withdrawOrder };
    } catch (error) {
      throw new Error(error.message || "Failed to create fiat withdraw order");
    }
  },
};
