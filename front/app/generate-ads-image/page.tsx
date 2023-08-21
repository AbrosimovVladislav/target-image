"use client"


import GeneratedInfoCard from "@/app/generate-ads-image/GeneratedInfoCard";
import GenerationRequestForm from "@/app/generate-ads-image/GenerationRequestForm";

const GenerateAdsImage = () => {
  return (
      <div className="p-2 m-1 flex flex-row">

        <GenerationRequestForm/>

        <div className="m-4">
          <GeneratedInfoCard website="cleanhunter-sochi.ru"/>
        </div>

      </div>
  )
}

export default GenerateAdsImage;