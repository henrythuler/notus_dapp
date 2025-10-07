import { cryptoService } from "../../services/cryptoService.js";

export const cryptoResolvers = {
  Mutation: {
    createSwap: async (_, { input }) => {
      return await cryptoService.createSwap(input);
    },
  },
};
