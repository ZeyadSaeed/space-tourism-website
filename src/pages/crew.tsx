import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Pagination from "../components/crew/Pagination";
import Meta from "../components/Meta";
import Title from "../components/Title";
import data from "../assets/data.json";
import Information from "../components/crew/Information";

const Crew: NextPage<{ isNavAnimationComplete: boolean }> = ({
  isNavAnimationComplete,
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const info = data.crew[activeSection];

  return (
    <div className="w-screen h-screen overflow-y-scroll scrollbar-hide">
      <Meta title="Crew" />
      <div className="w-full h-full inset-0 fixed bg-no-repeat bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop bg-cover" />
      <div className="flex flex-col xl:grid xl:grid-rows-[auto,1fr] h-full z-40 text-white max-w-[1210px] xl:m-auto border-box m-8 tb:mb-0 mt-0 pt-[88px] tb:pt-[136px] xl:pt-[212px]">
        <header className="flex justify-center mb-8 tb:mb-[60px] xl:mb-0 tb:justify-start z-40">
          <Title
            title="MEET YOUR CREW"
            number="02"
            isNavAnimationComplete={isNavAnimationComplete}
          />
        </header>
        <main className="z-40 flex flex-col xl:justify-center items-center gap-8 tb:gap-10 tb:flex-col-reverse tb:justify-between xl:flex-row-reverse w-full xl:items-start xl:m-auto h-full">
          <div className="w-full border-b-[1px] border-lightGray tb:border-none flex justify-center xl:justify-end xl:self-end">
            <Image
              src={info.images.webp}
              alt={info.name}
              className="h-[223px] tb:h-[532px] xl:h-[568px] w-auto"
              width={590.12}
              height={568}
            />
          </div>
          <div className="w-full flex flex-col items-center tb:flex-col-reverse xl:items-start xl:h-full xl:justify-between xl:pb-[94px]">
            <Pagination
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <Information activeSection={activeSection} />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Crew;
