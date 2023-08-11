"use client"


import Generated from "@/app/generate-ads-image/Generated";
import GenerationInfoForm from "@/app/generate-ads-image/GenerationInfoForm";

const GenerateAdsImage = () => {
  return (
      <div className="p-2 m-1 flex flex-row">

        <GenerationInfoForm/>

        <div className="m-4">
          <Generated website="cleanhunter-sochi.ru"/>
        </div>

      </div>
  )
}

export default GenerateAdsImage;