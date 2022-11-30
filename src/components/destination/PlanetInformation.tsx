import SubInformation from "./SubInformation";
import data from "../../assets/data.json";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { PlanetInformationType } from "../../types";

const variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.4,
    },
  },
};

const PlanetInformation: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  const [information, setInformation] = useState<PlanetInformationType>();

  useEffect(() => {
    const info = data.destinations.find(
      (d) => d.name.toLowerCase() === activeSection.toLowerCase()
    );

    setInformation(info);
  }, [activeSection]);

  return (
    <div>
      <div key={information?.name}>
        <AnimatePresence>
          <m.div
            key={activeSection}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-[1px] tb:gap-2 xl:gap-[14px] xl:text-start"
          >
            <h1 className="text-[56px] leading-[64.18px] tb:text-[80px] tb:leading-[91.68px] xl:text-[100px] xl:leading-[114.6px]">
              {information?.name.toUpperCase()}
            </h1>
            <p className="text-[15px] leading-[25px] text-burgerIcon tracking-[1.4px] max-w-[573px] tb:text-base tb:leading-7 xl:max-w-[444px] xl:text-lg xl:leading-8">
              {information?.description}
            </p>
          </m.div>
        </AnimatePresence>

        <div className="w-full h-[1px] my-8 bg-[#383B4B] xl:mt-[54px] xl:mb-[28px]" />
        <div className="flex flex-col gap-8 mb-[32px] tb:flex-row tb:justify-center tb:gap-[100px] xl:justify-start xl:text-start">
          <SubInformation
            title="AVG. DISTANCE"
            body={information?.distance.toUpperCase()}
          />
          <SubInformation
            title="Est. travel time"
            body={information?.travel.toUpperCase()}
          />
        </div>
      </div>
    </div>
  );
};
export default PlanetInformation;
