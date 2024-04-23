import React from "react";
import { CgMenuRight } from "react-icons/cg";

const Collections = () => {
  const images = [
    "https://hyperx.com/cdn/shop/files/Landing_Page_Top_Banner_720x1060_2_300x.jpg?v=1697041156",
    "https://m.media-amazon.com/images/M/MV5BMjZjODM2MDMtMGE2ZS00NWIyLTkzOWMtYjY0YTM3MzQ0ZjMzXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042EliteEdition_DICE_Editions_S2_1200x1600-bef1a673528b2a0f38b0c0947203e06c",
    "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
  ];

  return (
    <div>
      <div className="flex items-center justify-between mt-5">
        <p className="font-[700] text-lg">Collections</p>
        <span className="text-lg">
          <CgMenuRight />
        </span>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-2 mt-5  ">
        {images.map((photo, index) => (
          <div key={index}>
            <img
              className="rounded-xl object-cover w-full h-full"
              src={photo}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
