import { fetchApi } from "../../apis/api";
// https://capital-api-uat.client-resource.marvyco.com/api/remove-bg
export const serviceRemoveBg = async ({ File }: { File: any }) => {
  let url = `${import.meta.env.VITE_APP_BASE_API}/remove-bg`;
  let formData = new FormData();
  formData.append("file", File);
  let body = formData;
  const response = await fetchApi(url, "POST", body, null);
  return response;
};
