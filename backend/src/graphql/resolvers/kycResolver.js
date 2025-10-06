import { kycService } from "../../services/kycService.js";

export const kycResolvers = {
  Mutation: {
    createKycSession: async (_, { input }) => {
      return await kycService.createKycSession(input);
    },
    processKycSession: async (_, { sessionId }) => {
      return await kycService.processKycSession(sessionId);
    },
  },
};