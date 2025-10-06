import { notusClient } from "./notusClient.js";

export const kycService = {
  async createKycSession({ firstName, lastName, birthDate, documentId, documentCategory, documentCountry, livenessRequired, email, address, city, state, postalCode, nationality }) {
    try {
      const body = {
        firstName,
        lastName,
        birthDate,
        documentCountry,
        documentCategory,
        documentId,
        email,
        address,
        city,
        state,
        postalCode,
        livenessRequired,
        nationality
      };

      const data = await notusClient.post("/kyc/individual-verification-sessions/standard", body);

      return {
        session: data.session,
        backDocumentUpload: {
          url: data.backDocumentUpload.url,
          fields: {
            X_Amz_Algorithm: data.backDocumentUpload.fields["X-Amz-Algorithm"],
            X_Amz_Credential: data.backDocumentUpload.fields["X-Amz-Credential"],
            X_Amz_Date: data.backDocumentUpload.fields["X-Amz-Date"],
            Policy: data.backDocumentUpload.fields["Policy"],
            X_Amz_Signature: data.backDocumentUpload.fields["X-Amz-Signature"],
            bucket: data.backDocumentUpload.fields["bucket"],
            key: data.backDocumentUpload.fields["key"],
          }
        },
        frontDocumentUpload: {
          url: data.frontDocumentUpload.url,
          fields: {
            X_Amz_Algorithm: data.frontDocumentUpload.fields["X-Amz-Algorithm"],
            X_Amz_Credential: data.frontDocumentUpload.fields["X-Amz-Credential"],
            X_Amz_Date: data.frontDocumentUpload.fields["X-Amz-Date"],
            Policy: data.frontDocumentUpload.fields["Policy"],
            X_Amz_Signature: data.frontDocumentUpload.fields["X-Amz-Signature"],
            bucket: data.frontDocumentUpload.fields["bucket"],
            key: data.frontDocumentUpload.fields["key"],
          }
        },
      };
    } catch (error) {
      console.error("Error creating KYC session:", error);
      throw new Error(error.message || "Failed to create KYC session");
    }
  },

  async processKycSession(sessionId) {
    try {
      await notusClient.post(`/kyc/individual-verification-sessions/standard/${sessionId}/process`);
      return true;
    } catch (error) {
      console.error("Error processing KYC session:", error);
      throw new Error(error.message || "Failed to process KYC session");
    }
  },

  async getKycSession(sessionId) {
    try {
      const data = await notusClient.get(`/kyc/individual-verification-sessions/standard/${sessionId}`);
      return data;
    } catch (error) {
      console.error("Error fetching KYC session:", error);
      throw new Error(error.message || "Failed to fetch KYC session");
    }
  },
};
