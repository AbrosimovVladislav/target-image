import {GenerationRequestData} from "@/constants/interface";
import {post} from "@/service/rest-client";
import {IGeneratedImagesData} from "@/storage/generated-images-store";

export async function generateImages(requestData: GenerationRequestData): Promise<IGeneratedImagesData> {
  const url = "http://localhost:8085/api/v1/image-by-url/";
  const response = await post(url, requestData);
  return response;
}