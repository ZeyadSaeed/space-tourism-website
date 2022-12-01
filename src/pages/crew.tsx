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
    <div className="w-screen h-screen bg-no-repeat bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop bg-cover fixed inset-0 p-6 tb:p-[38.5px] tb:pb-0 text-white pt-[88px] tb:pt-[136px] xl:pt-[212px] overflow-y-scroll scrollbar-hide">
      <Meta title="Crew" />
      <header className="flex justify-center mb-8 tb:mb-[60px] xl:mb-0 tb:justify-start max-w-[1110px] m-auto">
        <Title
          title="MEET YOUR CREW"
          number="02"
          isNavAnimationComplete={isNavAnimationComplete}
        />
      </header>
      <main className="flex flex-col justify-center items-center gap-8 tb:gap-10 tb:flex-col-reverse tb:justify-between xl:flex-row-reverse xl:items-start max-w-[1110px] m-auto h-full">
        <div
          className={`w-full border-b-[1px] border-lightGray tb:border-none flex justify-center xl:justify-end xl:self-end`}
        >
          <Image
            src={info.images.webp}
            alt={info.name}
            className="h-[223px] tb:h-[532px] xl:h-[568px] w-auto"
            width={590.12}
            height={568}
          />
        </div>
        <div className="w-full flex flex-col items-center tb:flex-col-reverse xl:items-start xl:gap-[120px] xl:mt-[154px]">
          <Pagination
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Information activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
};
export default Crew;
