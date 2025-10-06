import { fiatService } from "../../services/fiatService.js";

export const fiatResolvers = {
  Mutation: {
    createFiatDepositQuote: async (_, { input }) => {
      return await fiatService.createFiatDepositQuote(input);
    },
  },
};
