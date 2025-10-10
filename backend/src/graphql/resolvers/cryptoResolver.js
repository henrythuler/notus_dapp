import { cryptoService } from "../../services/cryptoService.js";

export const cryptoResolvers = {
  Mutation: {
    createSwap: async (_, { input }) => {
      return await cryptoService.createSwap(input);
    },
    createTransfer: async (_, { input }) => {
      return await cryptoService.createTransfer(input);
    },
  },
};
