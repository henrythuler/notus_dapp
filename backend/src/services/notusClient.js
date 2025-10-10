import axios from "axios";
import { config } from "../config/index.js";

class NotusClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.notus.baseUrl,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": config.notus.apiKey,
      },
      timeout: 30000,
    });

    this.client.interceptors.request.use(
      (config) => {
        console.log(`${config.method.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error("Request error:", error.message);
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response) => {
        console.log(`${response.status} ${response.config.url}`);
        return response;
      },
      (error) => {
        if (error.response) {
          console.error(
            `${error.response.status} ${error.config.url}:`,
            error.response.data
          );
        } else if (error.request) {
          console.error("No response received:", error.message);
        } else {
          console.error("Error:", error.message);
        }
        return Promise.reject(this.formatError(error));
      }
    );
  }

  formatError(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message || "API request failed",
        details: error.response.data,
      };
    }
    return {
      status: 500,
      message: error.message || "Internal server error",
      details: null,
    };
  }

  async get(endpoint, params = {}) {
    const response = await this.client.get(endpoint, { params });
    return response.data;
  }

  async post(endpoint, data = {}) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async patch(endpoint, data = {}) {
    const response = await this.client.patch(endpoint, data);
    return response.data;
  }
}

export const notusClient = new NotusClient();