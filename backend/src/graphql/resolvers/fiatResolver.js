import { fiatService } from "../../services/fiatService.js";

export const fiatResolvers = {
  Mutation: {
    createFiatDepositQuote: async (_, { input }) => {
      return await fiatService.createFiatDepositQuote(input);
    },
    createFiatDepositOrder: async (_, { input }) => {
      return await fiatService.createFiatDepositOrder(input);
    },
    createFiatWithdrawQuote: async (_, { input }) => {
      return await fiatService.createFiatWithdrawQuote(input);
    },
    createFiatWithdrawOrder: async (_, { input }) => {
      return await fiatService.createFiatWithdrawOrder(input);
    },
  },
};
