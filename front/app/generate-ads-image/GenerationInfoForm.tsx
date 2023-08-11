"use client"

import LabeledInput from "@/app/generate-ads-image/LabeledInput";
import LabeledDropdown from "@/app/generate-ads-image/LabeledDropdown";
import LabeledColorPicker from "@/app/generate-ads-image/LabeledColorPicker";
import {Button} from '@mantine/core';
import {IconAt, IconMoodNeutral, IconAspectRatio} from '@tabler/icons-react';
import {useState} from "react";
import {
  DEFAULT_ASPECT_RATIO,
  DEFAULT_GENERATION_STYLE_COLOR,
  DEFAULT_MOOD
} from "@/constants/default";
import {generateImages} from "@/service/image-generation-service";

const GenerationInfoForm = () => {

  const [url, setUrl] = useState<string>("");
  const [mood, setMood] = useState<string>(DEFAULT_MOOD);
  const [aspectRatio, setAspectRatio] = useState<string>(DEFAULT_ASPECT_RATIO);
  const [firstColor, setFirstColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);
  const [secondColor, setSecondColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);
  const [thirdColor, setThirdColor] = useState<string>(DEFAULT_GENERATION_STYLE_COLOR);

  const handleSubmitGeneration = async () => {
    if (validate()) {

      const imageGenerationRequest = {
        "url": url,
        "mood": mood,
        "aspectRatio": aspectRatio,
        "colors": firstColor + "," + secondColor + "," + thirdColor
      }

      const response = await generateImages(imageGenerationRequest);
      console.log(response)
    }
  }

  const validate = ():boolean => {
    if (url == "") {
      console.error("Impossible to make request without url")
      return false;
    }
    return true;
  }

  return (
      <div className="m-4">
        <LabeledInput onChange={setUrl} value={url} label="Insert your Website"
                      placeholder="Your Website" icon={<IconAt/>}/>
        <LabeledDropdown label="Select advertisement mood"
                         value={mood}
                         onChange={setMood}
                         icon={<IconMoodNeutral/>}
                         variants={[DEFAULT_MOOD, "Professional", "Horny"]}/>
        <LabeledDropdown label="Aspect Ratio"
                         value={aspectRatio}
                         onChange={setAspectRatio}
                         icon={<IconAspectRatio/>}
                         variants={[DEFAULT_ASPECT_RATIO,"16:9", "20:5", "3:4"]}/>

        <LabeledColorPicker value={firstColor} onChange={setFirstColor}
                            label="Choose first color for Image"/>
        <LabeledColorPicker value={secondColor} onChange={setSecondColor}
                            label="Choose second color for Image"/>
        <LabeledColorPicker value={thirdColor} onChange={setThirdColor}
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

export default GenerationInfoForm;