import Image from "next/image";
import React, { useState } from "react";
import NavMenuOpen from "./NavMenuOpen";
import { motion as m, AnimatePresence } from "framer-motion";
import BurgerIcon from "./BurgerIcon";
import Link from "next/link";
import BigScreenNav from "./BigScreenNav";

const Navbar: React.FC<{
  setIsNavAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsNavAnimationComplete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed text-white flex items-center justify-between xl:justify-start w-full p-6 xl:pl-[55px] xl:pt-[67px] sm:pl-[39px] z-50">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link href="/" className="cursor-pointer">
          <Image src="/shared/logo.svg" width={40} height={40} alt="logo" />
        </Link>
      </m.div>

      <BurgerIcon
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsAnimationComplete={setIsNavAnimationComplete}
      />
      <BigScreenNav setIsAnimationComplete={setIsNavAnimationComplete} />
      <AnimatePresence>{isMenuOpen && <NavMenuOpen />}</AnimatePresence>
    </div>
  );
};
export default Navbar;
