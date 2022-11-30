import { motion as m } from "framer-motion";

const Title: React.FC<{
  title: string;
  number: string;
  isNavAnimationComplete: boolean;
}> = ({ number, title, isNavAnimationComplete }) => {
  return (
    <div className="tb:self-start ">
      <h5 className="flex gap-[18px] leading-[19.2px] tracking-[2.7px] tb:text-xl tb:leading-6 tb:tracking-[3.38px] xl:text-[28px] xl:leading-[33.6px] xl:tracking-[4.72px]">
        <span className="opacity-25">{number}</span>
        {title}
      </h5>
    </div>
  );
};
export default Title;
