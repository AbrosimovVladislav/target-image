import {GenerationRequestData} from "@/constants/interface";

export const generateImages = (requestData: GenerationRequestData): string => {
  console.log(requestData)
  return requestData.toString();
}