import { motion as m } from "framer-motion";
import {
  bottomLineVariants,
  middleLineVariants,
  topLineVariants,
} from "./animations";
import { useMediaQuery } from "react-responsive";

const BurgerIcon: React.FC<{
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMenuOpen, setIsMenuOpen, setIsAnimationComplete }) => {
  const isTablet = useMediaQuery({ query: `(max-width: 768px)` });
  const animate = isMenuOpen ? "hidden" : "visible";

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      onAnimationComplete={() => isTablet && setIsAnimationComplete(true)}
      className={`flex flex-col ${
        isMenuOpen ? "gap-[3px]" : "gap-[6px]"
      } z-50 cursor-pointer tb:hidden`}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <m.div
        variants={topLineVariants}
        initial="visible"
        animate={animate}
        className="w-6 h-[3px] bg-burgerIcon"
      />
      <m.div
        variants={middleLineVariants}
        initial="visible"
        animate={animate}
        className="bg-burgerIcon w-6 h-[3px]"
      />
      <m.div
        variants={bottomLineVariants}
        initial="visible"
        animate={animate}
        className="bg-burgerIcon w-6 h-[3px]"
      />
    </m.div>
  );
};

export default BurgerIcon;
