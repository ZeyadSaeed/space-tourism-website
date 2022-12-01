import { motion as m, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Title: React.FC<{
  title: string;
  number: string;
  isNavAnimationComplete: boolean;
}> = ({ number, title, isNavAnimationComplete }) => {
  const { asPath } = useRouter();
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <m.div key={asPath} className="tb:self-start overflow-hidden">
        <m.h5
          variants={variants}
          initial="hidden"
          animate={isNavAnimationComplete && "visible"}
          exit="exit"
          className="flex gap-[18px] leading-[19.2px] tracking-[2.7px] tb:text-xl tb:leading-6 tb:tracking-[3.38px] xl:text-[28px] xl:leading-[33.6px] xl:tracking-[4.72px]"
        >
          <span className="opacity-25">{number}</span>
          {title}
        </m.h5>
      </m.div>
    </AnimatePresence>
  );
};
export default Title;
