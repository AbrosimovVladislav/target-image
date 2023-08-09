"use client"


import {IconAt, IconMoodNeutral, IconAspectRatio} from '@tabler/icons-react';
import LabeledInput from "@/app/generate-ads-image/LabeledInput";
import LabeledDropdown from "@/app/generate-ads-image/LabeledDropdown";
import LabeledColorPicker from "./LabeledColorPicker";
import {Text, Button} from '@mantine/core';
import Generated from "@/app/generate-ads-image/Generated";

const GenerateAdsImage = () => {
  return (
      <div className="p-2 m-1 flex flex-row">

        <div className="m-4">
          <LabeledInput label="Insert your Website" placeholder="Your Website" icon={<IconAt/>}/>
          <LabeledDropdown label="Select advertisement mood"
                           icon={<IconMoodNeutral/>}
                           variants={["Professional", "Casual", "Horny"]}/>
          <LabeledDropdown label="Aspect Ratio"
                           icon={<IconAspectRatio/>}
                           variants={["16:9", "20:5", "3:4"]}/>

          <LabeledColorPicker label="Choose 3 colors for Image"/>


          <div className="flex justify-center items-center">
            <Button
                className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500">
              Generate</Button>
          </div>

        </div>

        <div className="m-4">
          <Generated website="cleanhunter-sochi.ru"/>
        </div>


      </div>
  )
}

export default GenerateAdsImage;