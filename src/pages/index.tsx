import Link from "next/link";
import Meta from "../components/Meta";
import { motion as m } from "framer-motion";
import { NextPage } from "next";
import { useMediaQuery } from "react-responsive";

const Home: NextPage<{ isNavAnimationComplete: boolean }> = ({
  isNavAnimationComplete,
}) => {
  const isTablet = useMediaQuery({ query: `(max-width: 768px)` });

  const textContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const textChildrenVariants = {
    hidden: {
      opacity: 0,
      x: isTablet ? 0 : -100,
      y: isTablet ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        duration: 0.6,
      },
    },
  };

  const exploreVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: [0, 1.2, 1],

      transition: {
        delay: 1.4,
        duration: 0.8,
      },
    },
  };

  return (
    <main className="scrollbar-hide overflow-y-scroll w-screen fixed inset-0 h-screen bg-no-repeat bg-home-mobile sm:bg-home-tablet md:bg-home-desktop bg-cover pt-[112px] tb:pt-[202px]">
      <Meta title="Home" />

      <div className="max-w-[1110px] m-auto text-white px-6 flex flex-col justify-between h-full xl:flex-row xl:px-0">
        <m.div
          variants={textContainerVariants}
          initial="hidden"
          animate={isNavAnimationComplete ? "visible" : "hidden"}
          className="flex flex-col items-center text-center gap-4 tb:gap-6 tb:max-w-[450px] tb:mx-auto xl:m-auto xl:text-start xl:items-start xl:mx-0"
        >
          <m.h5
            variants={textChildrenVariants}
            className="text-base leading-[19.2px] tracking-[2.7px] xl:text-[28px] xl:leading-[33.6px] xl:tracking-[4.72px]"
          >
            SO, YOU WANT TO TRAVEL TO
          </m.h5>
          <m.h1
            variants={textChildrenVariants}
            className="text-[80px] tb:text-[150px] tb:leading-[150px] xl:leading-[172px] leading-[100px]"
          >
            SPACE
          </m.h1>
          <m.p
            variants={textChildrenVariants}
            className="text-[15px] tb:text-base xl:text-lg xl:leading-8 leading-[25px]"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </m.p>
        </m.div>

        <m.div
          variants={exploreVariants}
          initial="hidden"
          animate={isNavAnimationComplete ? "visible" : "hidden"}
          className="m-auto xl:mx-0 pt-[95px] pb-6 xl:pb-0"
        >
          <div className="w-[150px] tb:w-[242px] xl:w-[274px] h-[150px] tb:h-[242px] xl:h-[274px] bg-white flex justify-center items-center rounded-full xl:hover:shadow-exploreButton duration-300">
            <Link
              className="w-full h-full text-xl leading-[22.92px] tracking-[1.25] tb:text-[32px] tb:leading-[36.67px] tb:tracking-[2px] text-[#0B0D17] flex items-center justify-center font-Bellefair"
              href="/destination"
            >
              EXPLORE
            </Link>
          </div>
        </m.div>
      </div>
    </main>
  );
};

export default Home;
