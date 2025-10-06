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
      console.error("Error creating fiat deposit quote:", error);
      throw new Error(error.message || "Failed to create fiat deposit quote");
    }
  },

  async createFiatDepositOrder({ quoteId }) {
    try {
      const data = await notusClient.post("/fiat/deposit", { quoteId });
      return { depositOrder: data.depositOrder };
    } catch (error) {
      console.error("Error creating fiat deposit order:", error);
      throw new Error(error.message || "Failed to create fiat deposit order");
    }
  },
};
