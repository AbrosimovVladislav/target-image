import {create} from "zustand";
import {DEFAULT_IMAGE, DEFAULT_PROMT} from "@/constants/default";

export interface IGeneratedImagesData {
  promt: string,
  images: string[]
}

interface IGeneratedImages {
  promt: string
  updatePromt: (newPromt: string) => void
  images: string[]
  updateImages: (newImages: string[]) => void
}

export const useGeneratedImagesStore = create<IGeneratedImages>((set) => ({
      promt: DEFAULT_PROMT,
      updatePromt: (newPromt: string) => set({promt: newPromt}),
      images: [DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE],
      updateImages: (newImages: string) => set({images: newImages})
    })
);

