import Link from "next/link";
import { useRouter } from "next/router";
import { links } from "./links";
import { motion as m } from "framer-motion";
import {
  contianerVariant,
  linksContainerVariant,
  linkVariant,
} from "./animations";

const BigScreenNav: React.FC<{
  setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsAnimationComplete }) => {
  const { pathname } = useRouter();

  return (
    <m.div
      variants={contianerVariant}
      initial="hidden"
      animate="visible"
      className="hidden tb:block bg-navbar backdrop-blur-navbar absolute top-0 right-0 xl:mt-10"
    >
      <m.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.5, duration: 0.4 }}
        className="hidden xl:block absolute -left-[clamp(153px,25vw,443px)] bg-white opacity-25 w-[clamp(273px,30vw,473px)] h-[1px] top-2/4 -translate-y-2/4"
      />
      <m.ul
        variants={linksContainerVariant}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => setIsAnimationComplete(true)}
        className="flex justify-around items-center h-[96px] font-BarlowCondensed px-12 gap-[42px] xl:pr-[165px] xl:pl-[123px]"
      >
        {links.map((link, index) => (
          <m.li
            variants={linkVariant}
            key={link.name}
            className="h-full flex items-center relative"
          >
            <Link
              href={link.href}
              className="h-full relative flex items-center xl:hover:after:absolute xl:hover:after:w-full xl:hover:after:bg-white xl:hover:after:h-[3px] xl:hover:after:bottom-0 xl:hover:after:bg-opacity-50"
            >
              <div className="flex gap-3 font-normal text-[14px] xl:text-[16px] leading-[16.8px] tracking-[2.36px]">
                <span className="font-bold sm:hidden xl:block">0{index}</span>
                {link.name}
              </div>
              {pathname === link.href && (
                <m.div
                  className="w-full h-[3px] bg-white absolute bottom-0"
                  layoutId="underline"
                />
              )}
            </Link>
          </m.li>
        ))}
      </m.ul>
    </m.div>
  );
};
export default BigScreenNav;
