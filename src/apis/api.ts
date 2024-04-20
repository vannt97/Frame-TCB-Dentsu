import { QueryClient } from "@tanstack/react-query";
// import { getUserInfo } from "../utils/storages/index";

export const queryClient = new QueryClient();
export async function fetchApi(
  url: string,
  method: string,
  body: any,
  type: "json" | "img" | "status" | "download" | "text" | null,
  headersCustom: any = {}
) {
  let headers: any = {};
  //   if (getUserInfo()) {
  //     headers = {
  //       Authorization: "Bearer " + getUserInfo().token,
  //     };
  //   }
  if (type == "json") {
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
  }

  if (type == "download") {
    headers["Content-Type"] = "application/pdf";
  }
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: { ...headers, ...headersCustom },
  });
  if (!response.ok) {
    try {
      const data = await response.json();
      throw {
        status: response.status,
        ...data,
      };
    } catch (error: any) {
      console.log(error);
      if (error.status) {
        throw {
          ...error,
        };
      } else {
        throw {
          status: response.status,
        };
      }
    }
  } else {
    let data = null;
    if (type == "img") {
      data = await response.blob();
    } else if (type == "download") {
      data = await response;
    } else if (type == "text") {
      data = await response.text();
    } else {
      try {
        data = await response.json();
      } catch (error) {
        data = 1;
      }
    }
    return data;
  }
}
