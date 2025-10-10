import { notusClient } from "./notusClient.js";

export const cryptoService = {
  async createSwap(input) {
    try {
      const data = await notusClient.post("/crypto/swap", input);
      return { quotes: data.quotes || [] };
    } catch (error) {
      throw new Error(error.message || "Failed to create crypto swap");
    }
  },

  async createTransfer(input) {
    try {
      const data = await notusClient.post("/crypto/transfer", input);
      return { transfer: data.transfer };
    } catch (error) {
      throw new Error(error.message || "Failed to create crypto transfer");
    }
  },
};