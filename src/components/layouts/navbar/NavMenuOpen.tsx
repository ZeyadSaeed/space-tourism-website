import { motion as m } from "framer-motion";
import { menuVariants } from "./animations";
import Navlinks from "./Navlinks";

const NavMenuOpen: React.FC = () => {
  return (
    <m.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute right-0 top-0 bottom-0 bg-navbar h-screen w-full max-w-[254px] backdrop-blur-navbar flex items-start tb:hidden"
    >
      <m.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="absolute right-[26px] top-8 cursor-pointer"
      />
      <Navlinks />
    </m.div>
  );
};
export default NavMenuOpen;
