"use client"

import SInput from "@/components/common/SInput";
import SDropdown from "@/components/common/SDropdown";
import SColorPicker from "@/components/common/SColorPicker";
import {Button} from '@mantine/core';
import {IconAt, IconMoodNeutral, IconAspectRatio} from '@tabler/icons-react';
import {useState} from "react";
import {
  DEFAULT_ASPECT_RATIO,
  DEFAULT_GENERATION_STYLE_COLOR,
  DEFAULT_MOOD
} from "@/constants/default";
import {generateImages} from "@/service/image-generation-service";
import {IGeneratedImagesData, useGeneratedImagesStore} from "@/storage/generated-images-store";

const GenerationRequestForm = () => {

  const [url, setUrl] = useState<string>("");
  const [mood, setMood] = useState<string>(DEFAULT_MOOD);
  const [aspectRatio, setAspectRatio] = useState<string>(DEFAULT_ASPECT_RATIO);
  const [firstColor, setFirstColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);
  const [secondColor, setSecondColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);
  const [thirdColor, setThirdColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);

  const updatePromt = useGeneratedImagesStore(state => state.updatePromt)
  const updateImages = useGeneratedImagesStore(state => state.updateImages)

  const handleSubmitGeneration = async () => {
    if (validate()) {

      const imageGenerationRequest = {
        "url": url,
        "mood": mood,
        "aspectRatio": aspectRatio,
        "colors": firstColor + "," + secondColor + "," + thirdColor
      }

      const response: IGeneratedImagesData = await generateImages(imageGenerationRequest);
      updatePromt(response.promt)
      updateImages(response.images)
    }
  }

  const validate = (): boolean => {
    if (url == "") {
      console.error("Impossible to make request without url")
      return false;
    }
    return true;
  }

  return (
      <div className="m-4">
        <SInput onChange={setUrl} value={url} label="Insert your Website"
                placeholder="Your Website" icon={<IconAt/>}/>
        <SDropdown label="Select advertisement mood"
                   value={mood}
                   onChange={setMood}
                   icon={<IconMoodNeutral/>}
                   variants={[DEFAULT_MOOD, "Professional", "Horny"]}/>
        <SDropdown label="Aspect Ratio"
                   value={aspectRatio}
                   onChange={setAspectRatio}
                   icon={<IconAspectRatio/>}
                   variants={[DEFAULT_ASPECT_RATIO, "16:9", "20:5", "3:4"]}/>

        <SColorPicker value={firstColor} onChange={setFirstColor}
                      label="Choose first color for Image"/>
        <SColorPicker value={secondColor} onChange={setSecondColor}
                      label="Choose second color for Image"/>
        <SColorPicker value={thirdColor} onChange={setThirdColor}
                      label="Choose third color for Image"/>


        <div className="flex justify-center items-center">
          <Button
              onClick={() => handleSubmitGeneration()}
              className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500">
            Generate</Button>
        </div>

      </div>
  )
}

export default GenerationRequestForm;