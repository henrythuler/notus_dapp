import { notusClient } from "./notusClient.js";

export const transactionService = {
  async updateTransactionMetadata(transactionId, { metadata }) {
    try {
      const body = { metadata };

      const data = await notusClient.patch(
        `/wallets/transactions/${transactionId}/metadata`,
        body
      );

      return {
        transaction: data.transaction,
      };
    } catch (error) {
      console.error("Error updating transaction metadata:", error);
      throw new Error(
        error.message || "Failed to update transaction metadata"
      );
    }
  },
};