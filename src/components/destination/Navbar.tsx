import data from "../../assets/data.json";
import { motion as m } from "framer-motion";

const Navbar: React.FC<{
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="my-5 xl:self-start xl:ml-[88px]">
      <ul className="flex gap-[26px] xl:justify-start">
        {data.destinations.map((destination) => (
          <li key={destination.name} className="relative">
            <button
              onClick={() => setActiveSection(destination.name)}
              className="text-sm leading-[16.8px] tracking-[2.36px] tb:text-base tb:leading-[19.2px] tb:tracking-[2.7px]"
            >
              {destination.name.toUpperCase()}
            </button>
            {activeSection.toLowerCase() === destination.name.toLowerCase() && (
              <m.div
                className="w-full h-[3px] absolute -bottom-2 bg-white"
                layoutId="underline2"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
