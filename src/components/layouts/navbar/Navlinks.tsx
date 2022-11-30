import Link from "next/link";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { listContianerVariant, navlinksVariants } from "./animations";
import { links } from "./links";

const Navlinks: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className="w-full">
      <m.ul
        variants={listContianerVariant}
        initial="hidden"
        animate="visible"
        className="pt-[118px] pl-8 font-BarlowCondensed leading-[19.2px] tracking-[2.7px] flex flex-col gap-8 w-full"
      >
        {links.map((link, index) => (
          <m.li
            variants={navlinksVariants}
            key={link.name}
            className="relative"
          >
            <Link href={link.href} className="flex justify-between">
              <div className="flex gap-3 text-[14px]">
                <span className="font-bold text-[16px]">0{index}</span>
                {link.name}
              </div>
              {pathname === link.href && (
                <m.div
                  className="w-1 h-[31px] bg-white absolute -top-1 right-0"
                  layoutId="underline"
                />
              )}
            </Link>
          </m.li>
        ))}
      </m.ul>
    </nav>
  );
};
export default Navlinks;
