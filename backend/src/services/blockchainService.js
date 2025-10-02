import { notusClient } from "./notusClient.js";

export const blockchainService = {
  async listChains(page = 1, perPage = 20) {
    try {
      const data = await notusClient.get("/crypto/chains", {
        page,
        perPage,
      });

      return {
        chains: data.chains || [],
      };
    } catch (error) {
      console.error("Error fetching chains:", error);
      throw new Error(
        error.message || "Failed to fetch blockchain chains from Notus API"
      );
    }
  },
};