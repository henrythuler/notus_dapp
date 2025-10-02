import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  notus: {
    apiKey: process.env.NOTUS_API_KEY,
    baseUrl: process.env.NOTUS_BASE_URL || "https://api.notus.team/api/v1",
  },
};

if (!config.notus.apiKey) {
  console.warn(
    "NOTUS_API_KEY not set."
  );
}