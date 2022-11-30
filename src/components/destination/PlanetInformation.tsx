import SubInformation from "./SubInformation";
import data from "../../assets/data.json";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: {
      duration: 0.5,
    },
  },
};

const PlanetInformation: React.FC<{ activeSection: string }> = ({
  activeSection,
}) => {
  return (
    <div>
      {data.destinations.map((planet) => (
        <div key={planet.name}>
          {planet.name.toLowerCase() === activeSection.toLowerCase() && (
            <>
              <div className="flex flex-col gap-[1px] tb:gap-2 xl:text-start">
                <h1 className="text-[56px] leading-[64.18px] tb:text-[80px] tb:leading-[91.68px] xl:text-[100px] xl:leading-[114.6px]">
                  {planet.name.toUpperCase()}
                </h1>
                <p className="text-[15px] leading-[25px] text-burgerIcon tracking-[1.4px] max-w-[573px] tb:text-base tb:leading-7 xl:max-w-[444px] xl:text-lg xl:leading-8">
                  {planet.description}
                </p>
              </div>
              <div className="w-full h-[1px] my-8 bg-[#383B4B]" />
              <div className="flex flex-col gap-8 mb-[32px] tb:flex-row tb:justify-center tb:gap-[100px] xl:justify-start xl:text-start">
                <SubInformation title="AVG. DISTANCE" body={planet.distance} />
                <SubInformation title="Est. travel time" body={planet.travel} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export default PlanetInformation;
