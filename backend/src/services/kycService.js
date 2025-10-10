import { notusClient } from "./notusClient.js";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const kycService = {
  async createKycSession({ firstName, lastName, birthDate, documentId, documentCategory, documentCountry, livenessRequired, email, address, city, state, postalCode, nationality, backFilePath, frontFilePath }) {
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

      await this.uploadDocumentToS3(data.frontDocumentUpload, frontFilePath);
      if (backFilePath) {
        await this.uploadDocumentToS3(data.backDocumentUpload, backFilePath);
      }

      await this.processKycSession(data.session.id);

      return {
        session: data.session,
      };
    } catch (error) {
      throw new Error(error.message || "Failed to create KYC session");
    }
  },

  async processKycSession(sessionId) {
    try {
      await notusClient.post(`/kyc/individual-verification-sessions/standard/${sessionId}/process`);
      return true;
    } catch (error) {
      throw new Error(error.message || "Failed to process KYC session");
    }
  },

  async getKycSession(sessionId) {
    try {
      const data = await notusClient.get(`/kyc/individual-verification-sessions/standard/${sessionId}`);
      return data;
    } catch (error) {
      throw new Error(error.message || "Failed to fetch KYC session");
    }
  },

  /**
   * @param {Object} uploadData - Object containing url and S3 fields
   * @param {string} filePath - File to be sent path (ex: "./docs/front.jpg")
  */
  async uploadDocumentToS3(uploadData, filePath) {
    const { url, fields } = uploadData;

    const formData = new FormData();

    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("file", fs.createReadStream(filePath));

    try {
      const response = await axios.post(url, formData, {
        headers: formData.getHeaders(),
      });

      console.log(`Document ${filePath} successfully uploaded!`);

      return response.status;
    } catch (error) {
      throw error;
    }
  }
};
