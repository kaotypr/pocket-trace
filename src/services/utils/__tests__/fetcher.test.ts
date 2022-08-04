import { act } from "react-test-renderer";

import Fetcher from "../fetcher";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 200 })
  })
) as jest.Mock;

describe("services/utils/fetcher", () => {
  it("fetcher instance", async () => {
    expect.assertions(10);
    const baseURL = "https://localhost:3000";
    const path = "/test";
    const fetcher = new Fetcher(baseURL);

    await act(async () => {
      const getRes = await fetcher.get(path);
      expect(getRes).toEqual({ status: 200 });
      expect(fetch).toBeCalledWith(baseURL + path, {
        headers: { "Content-Type": "application/json" }
      });
    });

    await act(async () => {
      const postRes = await fetcher.post(path);
      expect(postRes).toEqual({ status: 200 });
      expect(fetch).toBeCalledWith(baseURL + path, {
        headers: { "Content-Type": "application/json" }
      });
    });

    await act(async () => {
      const patchRes = await fetcher.patch(path);
      expect(patchRes).toEqual({ status: 200 });
      expect(fetch).toBeCalledWith(baseURL + path, {
        headers: { "Content-Type": "application/json" }
      });
    });

    await act(async () => {
      const putRes = await fetcher.put(path);
      expect(putRes).toEqual({ status: 200 });
      expect(fetch).toBeCalledWith(baseURL + path, {
        headers: { "Content-Type": "application/json" }
      });
    });

    await act(async () => {
      const deleteRes = await fetcher.delete(path);
      expect(deleteRes).toEqual({ status: 200 });
      expect(fetch).toBeCalledWith(baseURL + path, {
        headers: { "Content-Type": "application/json" }
      });
    });
  });
});
