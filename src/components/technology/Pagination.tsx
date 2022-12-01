type PaginationProps = {
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PaginationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const numbers = [1, 2, 3];
  return (
    <ul className="flex gap-4 mt-[34px] xl:m-0 tb:mt-[56px] mb-[26px] tb:mb-[44px] xl:flex-col xl:gap-8">
      {numbers.map((number) => (
        <li
          onClick={() => setActiveSection(number - 1)}
          key={number}
          className={`w-10 h-10 leading-[18.34px] tb:w-[60px] tb:h-[60px] tb:text-2xl tb:leading-[27.5px] xl:w-20 xl:h-20 xl:text-[32px] xl:leading-[36.67px] flex justify-center items-center border-white border rounded-full border-opacity-25 cursor-pointer duration-300 ${
            activeSection === number - 1
              ? "bg-white bg-opacity-100 text-black"
              : ""
          }`}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
