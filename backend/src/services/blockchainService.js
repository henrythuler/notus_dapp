import { notusClient } from "./notusClient.js";

export const blockchainService = {
  async listChains(page = 1, perPage = 20) {
    try {
      const data = await notusClient.get("/crypto/chains", {
        page,
        perPage,
      });

      return {
        chains: data.chains || [],
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to fetch blockchain chains from Notus API"
      );
    }
  },

  async listTokens({
    orderBy,
    orderDir,
    search,
    filterByChainId,
    filterWhitelist,
    page = 1,
    perPage = 25,
    projectId,
  } = {}) {
    try {
      const params = {};

      if (orderBy) params.orderBy = orderBy;
      if (orderDir) params.orderDir = orderDir;
      if (search) params.search = search;
      if (filterByChainId) params.filterByChainId = filterByChainId;
      if (filterWhitelist !== undefined) params.filterWhitelist = filterWhitelist;
      if (page) params.page = page;
      if (perPage) params.perPage = perPage;
      if (projectId) params.projectId = projectId;

      const data = await notusClient.get("/crypto/tokens", params);

      return {
        tokens: data.tokens || [],
        page: data.page || page,
        totalPerPage: data.totalPerPage || perPage,
        total: data.total || 0,
      };
    } catch (error) {
      throw new Error(
        error.message || "Failed to fetch tokens from Notus API"
      );
    }
  },
};