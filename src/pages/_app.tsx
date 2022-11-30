import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/layouts/navbar";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Title from "../components/Title";
import Layout from "../components/layouts/Layout";

const pageTransationVariants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, delay: 0.2 },
  },
};

export default function App({ Component, pageProps, router }: AppProps) {
  const [isNavAnimationComplete, setIsNavAnimationComplete] = useState(false);

  return (
    <Layout
      setIsNavAnimationComplete={setIsNavAnimationComplete}
      isNavAnimationComplete={isNavAnimationComplete}
    >
      <AnimatePresence>
        <m.div
          key={router.asPath}
          variants={pageTransationVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Component
            {...pageProps}
            isNavAnimationComplete={isNavAnimationComplete}
          />
        </m.div>
      </AnimatePresence>
    </Layout>
  );
}
