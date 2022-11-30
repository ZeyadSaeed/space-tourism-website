import Navbar from "../../components/layouts/navbar";
import Title from "../Title";

const Layout: React.FC<{
  children: React.ReactNode;
  setIsNavAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
  isNavAnimationComplete: boolean;
}> = ({ children, setIsNavAnimationComplete, isNavAnimationComplete }) => {
  return (
    <>
      <Navbar setIsNavAnimationComplete={setIsNavAnimationComplete} />
      <main>{children}</main>
    </>
  );
};
export default Layout;
