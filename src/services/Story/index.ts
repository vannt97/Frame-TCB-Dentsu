import { fetchApi } from "../../apis/api";

export const serviceGetStories = async (language_code: string) => {
  let url = `${import.meta.env.VITE_APP_BASE_API}/stories`;
  const response = await fetchApi(url, "GET", null, "json", {
    "language-code": language_code,
    content: language_code,
  });
  return response;
};

export const serviceGetStory = async ({ language_code, slug }: any) => {
  let url = `${import.meta.env.VITE_APP_BASE_API}/stories/${slug}`;
  const response = await fetchApi(url, "GET", null, "json", {
    "language-code": language_code,
    content: language_code,
  });
  return response;
};
