import React, { useState } from "react";
import { animate, motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [toggled, setToggled] = useState(false);
  const navMotion = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: {
      x: "100vw",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div translate="no" className="w-full flex items-center justify-between">
      {/* Deskop Nav Bar*/}
      <div className="w-full h-full hidden xl:flex items-center justify-between ">
        <motion.img
          src="./assets/images/Frame@2x.png"
          alt="logo"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -25 }}
          transition={{ delay: 0.7 }}
          className="w-12 h-12"
        />

        <motion.ul
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -25 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between gap-6 font-semibold text-base"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Top sales</a>
          </li>
          <li>
            <a href="#" className="">
              Colletions
            </a>
          </li>
          <li>
            <a href="#">Our blog</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </motion.ul>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-between gap-4"
        >
          <button className="bg-white text-custom-neutral-800 text-base font-semibold">
            Sign up
          </button>
          <div className="w-0.5 h-8 bg-custom-neutral-800"></div>
          <button className="h-max w-max p-2 flex items-center justify-center bg-custom-neutral-800 text-sm text-white font-semibold rounded-full">
            Connect Wallet
          </button>
        </motion.div>
      </div>

      {/* Nav Items animating in  */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navMotion}
            translate="no"
            className="xl:hidden fixed px-10 py-40 md:px-52 md:py-60 left-0 top-0 z-40 h-screen w-full flex flex-col items-start  justify-start gap-24 bg-white overflow-auto"
          >
            <ul className="flex flex-col items-start justify-between gap-6 font-semibold text-custom-neutral-700 text-lg">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Top sales</a>
              </li>
              <li>
                <a href="#" className="">
                  Colletions
                </a>
              </li>
              <li>
                <a href="#">Our blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
            <div className="flex items-center justify-between gap-6">
              <button className="bg-white text-custom-neutral-800 text-sm md:text-xl font-semibold">
                Sign up
              </button>
              <div className="w-0.5 h-8 bg-custom-neutral-800"></div>
              <button className="h-max w-max p-3 flex items-center justify-center bg-black text-base text-white font-semibold rounded-full">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hamburger Toggle */}
      <div className="xl:hidden py-2 w-full flex items-center justify-between ">
        <motion.img
          src="/assets/images/Frame@2x.png"
          alt="logo"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -25 }}
          transition={{ delay: 0.35 }}
          className="w-10 h-10"
        />
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.35 }}
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className={`w-10 h-10 z-50 p-1 flex flex-col items-center justify-center gap-1 bg-custom-neutral-50 rounded-xl xl:hidden`}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 4 : 0 }}
            className="w-full h-1 p-0.5 border-2 border-neutral-900 bg-white rounded-lg"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
            }}
            className="w-full h-1 p-0.5 border-2 border-neutral-900 bg-white rounded-lg"
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
