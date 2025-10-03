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

      if (eip7702 === true) {
        params.eip7702 = true;
      }

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
};