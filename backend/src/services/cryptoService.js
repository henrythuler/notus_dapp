import { notusClient } from "./notusClient.js";

export const cryptoService = {
  async createSwap(input) {
    try {
      const data = await notusClient.post("/crypto/swap", input);
      return { quotes: data.quotes || [] };
    } catch (error) {
      console.error("Error creating crypto swap:", error);
      throw new Error(error.message || "Failed to create crypto swap");
    }
  },
};