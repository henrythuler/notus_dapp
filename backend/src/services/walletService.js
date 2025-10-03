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
      const data = await notusClient.post("/wallets/register", {
        externallyOwnedAccount,
        factory,
        salt,
        eip7702,
        metadata,
      });

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
};