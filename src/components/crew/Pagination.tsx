import { motion as m } from "framer-motion";

type PagninationProps = {
  activeSection: number;
  setActiveSection: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination: React.FC<PagninationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const number = [0, 1, 2, 3];

  return (
    <div className="mb-8 tb:mb-0 tb:mt-10 xl:m-0">
      <ul className="flex gap-4 xl:gap-6">
        {number.map((number) => (
          <li
            key={number}
            className={`w-[10px] xl:w-[15px] h-[10px] xl:h-[15px] bg-white rounded-full cursor-pointer duration-300 ${
              number === activeSection
                ? "opacity-100"
                : "opacity-[0.17] xl:hover:opacity-50"
            }`}
            onClick={() => setActiveSection(number)}
          />
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
