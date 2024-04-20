import { fetchApi } from "../../apis/api";
// https://capital-api-uat.client-resource.marvyco.com/api/upload
export const serviceUploadImage = async ({ file }: { file: any }) => {
  let url = `${import.meta.env.VITE_APP_BASE_API}/upload`;
  let formData = new FormData();
  formData.append("file", file);
  const response = await fetchApi(url, "POST", formData, null);
  return response;
};
