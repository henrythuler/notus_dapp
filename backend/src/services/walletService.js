import { notusClient } from "./notusClient.js";

export const walletService = {
  async registerSmartWallet({
    externallyOwnedAccount,
    factory,
    salt,
    eip7702 = false,
    metadata = {},
  }) {
    try {
      const body = {
        externallyOwnedAccount,
        factory,
        salt,
        eip7702,
        metadata,
      };

      const data = await notusClient.post("/wallets/register", body);

      return {
        wallet: data.wallet,
      };
    } catch (error) {
      console.error("Error registering smart wallet:", error);
      
      if (error.details?.id === "WALLET_ALREADY_REGISTERED") {
        throw new Error(
          error.details.message || "This wallet is already registered with this project"
        );
      }
      
      throw new Error(
        error.message || "Failed to register smart wallet"
      );
    }
  },

  async getSmartWallet({
    externallyOwnedAccount,
    factory,
    salt,
    eip7702 = false,
  }) {
    try {
      const params = {
        externallyOwnedAccount,
        factory,
        salt,
      };

      const data = await notusClient.get("/wallets/address", params);

      return {
        wallet: data.wallet,
      };
    } catch (error) {
      console.error("Error fetching smart wallet:", error);
      throw new Error(
        error.message || "Failed to fetch smart wallet details"
      );
    }
  },

  async getSmartWalletsByProject() {
    try {
      const data = await notusClient.get("/wallets");

      return {
        wallets: data.wallets || [],
      };
    } catch (error) {
      console.error("Error fetching project wallets:", error);
      throw new Error(
        error.message || "Failed to fetch project wallets"
      );
    }
  },
};