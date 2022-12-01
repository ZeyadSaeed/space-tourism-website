import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Title from "../components/Title";
import data from "../assets/data.json";
import Pagination from "../components/technology/Pagination";

const Technology: NextPage<{ isNavAnimationComplete: boolean }> = ({
  isNavAnimationComplete,
}) => {
  const [activeSection, setActiveSection] = useState(0);
  const info = data.technology[activeSection];
  return (
    <div className="w-screen h-screen text-white pt-[88px] tb:pt-[136px] xl:pt-[212px] inset-0 fixed bg-no-repeat bg-technology-mobile sm:bg-technology-tablet md:bg-technology-desktop bg-cover overflow-y-scroll scrollbar-hide">
      <Meta title="Technology" />

      <header className="xl:mx-auto max-w-[1210px] flex justify-center mb-8 tb:mb-[60px] xl:mb-[26px] tb:justify-start z-40 tb:ml-[38.5px]">
        <Title
          title="SPACE LAUNCH 101"
          number="03"
          isNavAnimationComplete={isNavAnimationComplete}
        />
      </header>
      <main className="max-w-[1210px] m-auto w-full xl:flex xl:flex-row-reverse">
        <div className="xl:hidden">
          <Image
            src={info.images.landscape}
            width={1280}
            height={410}
            alt={info.name}
          />
        </div>
        <div className="hidden xl:block basis-1/2 absolute right-0">
          <Image
            src={info.images.portrait}
            width={515}
            height={527}
            alt={info.name}
            className="w-[515px] h-[527px]"
          />
        </div>

        <div className="flex items-center flex-col xl:flex-row xl:justify-start xl:items-start xl:w-full xl:gap-20 xl:mt-[111px]">
          <Pagination
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className="flex flex-col text-center m-6 mt-0 xl:m-0 xl:text-start xl:justify-start">
            <h5 className="text-sm tracking-[2.36px] leading-[16.8px] tb:text-base tb:leading-[19.2px] text-burgerIcon">
              THE TERMINOLOGY…
            </h5>
            <h1 className="text-2xl leading-[27.5px] tb:text-[40px] tb:leading-[45.84px] xl:text-[56px] xl:leading-[64.18px] mt-[9px] tb:mt-4 mb-4 uppercase">
              {info.name}
            </h1>
            <p className="text-[15px] leading-[25px] tb:text-base tb:leading-7 xl:text-lg xl:leading-8 text-burgerIcon tracking-[0.5px] max-w-[458px]">
              {info.description}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Technology;
