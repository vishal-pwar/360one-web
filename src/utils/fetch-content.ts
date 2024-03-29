import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export type FetchResponse<T, A> = {
  data?: A extends true
    ? [
        {
          id: number;
          attributes: {
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            [key: string]: any;
          } & T;
        },
      ]
    : {
        id: number;
        attributes: {
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          [key: string]: any;
        } & T;
      };
  meta: {};
};

export async function fetchContent<T = unknown, A = false>(
  path: string,
  urlParamsObject = {},
  options: RequestInit = {}
): Promise<FetchResponse<T, A>> {
  try {
    // Merge default and user options
    const mergedOptions: RequestInit = {
      next: { revalidate: 1 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;
    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.resolve({
      meta: {},
    });
    // throw new Error(
    //   `Please check if your server is running and you set all the required tokens.`
    // );
  }
}
