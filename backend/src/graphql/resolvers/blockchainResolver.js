import { blockchainService } from "../../services/blockchainService.js";

export const blockchainResolvers = {
  Query: {
    listChains: async (_, { page = 1, perPage = 20 }) => {
      return await blockchainService.listChains(page, perPage);
    },

    listTokens: async (_, args) => {
      return await blockchainService.listTokens(args);
    },
  },
};