import data from "../../assets/data.json";

const Information: React.FC<{ activeSection: number }> = ({
  activeSection,
}) => {
  const info = data.crew[activeSection];

  const bioWidth = () => {
    switch (activeSection) {
      case 0:
        return "tb:w-[458px]";
      case 1:
        return "tb:w-[520px]";
      case 2:
        return "tb:w-[592px]";
      case 3:
        return "tb:w-[536px]";
    }
  };
  return (
    <div className="text-center flex flex-col gap-4 xl:text-start xl:gap-[27px] xl:pt-[154px]">
      <div className="flex flex-col gap-2 xl:gap-[15px]">
        <h2 className="opacity-50 leading-[18.34px] tb:text-2xl tb:leading-[27.5px] xl:text-[32px] xl:leading-[36.67px]">
          {info.role.toUpperCase()}
        </h2>
        <h1 className="text-2xl leading-[27.5px] tb:text-[40px] tb:leading-[45.84px] xl:text-[56px] xl:leading-[64.2px]">
          {info.name.toUpperCase()}
        </h1>
      </div>
      <p
        className={`text-[15px] leading-[25px] tb:text-base tb:leading-7 xl:text-lg xl:leading-8 text-burgerIcon tracking-[1.4px] ${bioWidth()} xl:w-[444px]`}
      >
        {info.bio}
      </p>
    </div>
  );
};
export default Information;
