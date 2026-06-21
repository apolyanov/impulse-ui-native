import type { AxiosRequestConfig } from "axios";

import type { QueryParams } from "../types";

export const ParamsSerializer: AxiosRequestConfig["paramsSerializer"] = {
  serialize: (params: QueryParams) => {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      const value = params[key];

      if (value === null || value === undefined) continue;

      if (Array.isArray(value) && value.length > 0) {
        searchParams.set(key, value.map(String).join(","));
      } else {
        searchParams.set(key, String(value));
      }
    }

    return searchParams.toString();
  },
};
