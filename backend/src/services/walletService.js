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
      throw new Error(
        error.message || "Failed to fetch project wallets"
      );
    }
  },

  async getWalletPortfolio(walletAddress) {
    try {
      const data = await notusClient.get(`/wallets/${walletAddress}/portfolio`);

      return {
        tokens: data.tokens || [],
        nfts: data.nfts || [],
        portfolio: data.portfolio || [],
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to fetch wallet portfolio"
      );
    }
  },

  async getWalletHistory(walletAddress, filters = {}) {
    try {
      const params = {};

      if (filters.take) params.take = filters.take;
      if (filters.lastId) params.lastId = filters.lastId;
      if (filters.type) params.type = filters.type;
      if (filters.status) params.status = filters.status;
      if (filters.userOperationHash) params.userOperationHash = filters.userOperationHash;
      if (filters.transactionHash) params.transactionHash = filters.transactionHash;
      if (filters.chains) params.chains = filters.chains;
      if (filters.createdAtLatest) params.createdAtLatest = filters.createdAtLatest;
      if (filters.createdAtOldest) params.createdAtOldest = filters.createdAtOldest;
      if (filters.metadataKey) params.metadataKey = filters.metadataKey;
      if (filters.metadataValue) params.metadataValue = filters.metadataValue;

      const data = await notusClient.get(`/wallets/${walletAddress}/history`, params);

      return {
        nextLastId: data.nextLastId || null,
        transactions: data.transactions || [],
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to fetch wallet history"
      );
    }
  },

  async createDepositTransaction(walletAddress, { amount, chainId, token, fromAddress }) {
    try {
      const body = {
        amount,
        chainId,
        token,
        fromAddress,
      };

      const data = await notusClient.post(`/wallets/${walletAddress}/deposit`, body);

      return {
        transfer: data.transfer,
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to create deposit transaction"
      );
    }
  },

  async updateWalletMetadata(walletAddress, { metadata }) {
    try {
      const body = { metadata };

      const data = await notusClient.patch(`/wallets/${walletAddress}/metadata`, body);

      return {
        wallet: data.wallet,
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to update wallet metadata"
      );
    }
  },
};