import {GenerationRequestData} from "@/constants/interface";
import {post} from "@/service/rest-client";

export async function generateImages (requestData: GenerationRequestData): Promise<string> {
  const url = "http://localhost:8085/api/v1/image-by-url/";
  const response = await post(url, requestData);
  return response;
}