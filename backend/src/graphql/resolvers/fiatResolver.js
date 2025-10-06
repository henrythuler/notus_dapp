import { fiatService } from "../../services/fiatService.js";

export const fiatResolvers = {
  Mutation: {
    createFiatDepositQuote: async (_, { input }) => {
      return await fiatService.createFiatDepositQuote(input);
    },
    createFiatDepositOrder: async (_, { input }) => {
      return await fiatService.createFiatDepositOrder(input);
    },
  },
};
