import { HTTP_STATUS } from "@services/constants/common";

class Fetcher {
  #baseUrl: string;
  #config: { [keys: string]: any } = {};

  constructor(baseUrl: string = "", config: { [keys: string]: any } = {}) {
    this.#baseUrl = baseUrl;
    const { headers: passedHeaders } = config;
    const headers = { ...passedHeaders, "Content-Type": "application/json" };
    this.#config = { ...config, headers };
  }

  get = async (path: string, params?: { [keys: string]: any }): Promise<any> => {
    try {
      const queryParams = new URLSearchParams(params).toString();
      const url = params ? `${this.#baseUrl}${path}?${queryParams}` : `${this.#baseUrl}${path}`;
      const response = await fetch(url, { ...this.#config });
      if (!HTTP_STATUS.SUCCESS.includes(response.status)) {
        throw response.json();
      }
      return response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  post = async (path: string, data?: object): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      const response = await fetch(url, {
        ...this.#config,
        method: "POST",
        body: JSON.stringify(data)
      });
      if (!HTTP_STATUS.SUCCESS.includes(response.status)) {
        throw await response.json();
      }
      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  put = async (path: string, data?: object): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      const response = await fetch(url, {
        ...this.#config,
        method: "PUT",
        body: JSON.stringify(data)
      });
      if (!HTTP_STATUS.SUCCESS.includes(response.status)) {
        throw await response.json();
      }
      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  patch = async (path: string, data?: object): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      const response = await fetch(url, {
        ...this.#config,
        method: "PATCH",
        body: JSON.stringify(data)
      });
      if (!HTTP_STATUS.SUCCESS.includes(response.status)) {
        throw await response.json();
      }
      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  delete = async (path: string, data?: object): Promise<any> => {
    try {
      const url = `${this.#baseUrl}${path}`;
      return fetch(url, { ...this.#config, method: "DELETE", body: JSON.stringify(data) }).then(
        (res) => res.json()
      );
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export default Fetcher;
