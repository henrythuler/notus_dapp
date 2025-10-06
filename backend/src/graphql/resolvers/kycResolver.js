import { kycService } from "../../services/kycService.js";

export const kycResolvers = {
  Mutation: {
    createKycSession: async (_, { input }) => {
      return await kycService.createKycSession(input);
    },
  },
};