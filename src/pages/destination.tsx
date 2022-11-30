import { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/destination/Navbar";
import PlanetInformation from "../components/destination/PlanetInformation";
import Meta from "../components/Meta";
import Title from "../components/Title";

const Destination: NextPage<{ isNavAnimationComplete: boolean }> = ({
  isNavAnimationComplete,
}) => {
  const [activeSection, setActiveSection] = useState("moon");
  return (
    <div className="w-screen fixed inset-0 h-screen bg-no-repeat bg-destination-mobile sm:bg-destination-tablet md:bg-destination-desktop bg-cover p-6 tb:p-[38.5px] text-white overflow-y-scroll scrollbar-hide">
      <Meta title="Destination" />

      <main className="max-w-[1110px] xl:m-auto flex flex-col gap-[6px] tb:gap-[53px] xl:flex-row w-full">
        <div className="flex flex-col items-center gap-8 tb:gap-[60px] xl:gap-[97px] xl:basis-1/2 ">
          <Title
            number="01"
            title="PICK YOUR DESTINATION"
            isNavAnimationComplete={isNavAnimationComplete}
          />
          <div className="w-[170px] h-[170px] tb:w-[300px] tb:h-[300px] xl:w-[445px] xl:h-[445px] bg-moon bg-cover xl:self-end" />
        </div>
        <div className="flex flex-col items-center justify-center xl:items-end xl:justify-start xl:mt-10 text-center gap-5 tb:gap-8 xl:basis-1/2">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <PlanetInformation activeSection={activeSection} />
        </div>
      </main>
    </div>
  );
};
export default Destination;