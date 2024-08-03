import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroBloc = () => {
  return (
    <div className="w-full flex flex-col items-start justify-between gap-16 xl:flex-row text-left">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-start justify-start gap-3 xl:gap-4"
      >
        <h1 className="w-full text-custom-neutral-600 text-5xl  xl:text-7xl  leading-tight">
          See the NTF new world
        </h1>
        <p className="text-custom-neutral-400 text-sm md:text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio
          hic repudiandae.
        </p>
        <div className="flex items-center justify-center gap-4 text-lg text-custom-neutral-600 font-bold">
          Discover now{" "}
          <FontAwesomeIcon
            icon={faLongArrowRight}
            className="p-4 border border-custom-neutral-600 hover:bg-custom-neutral-600 hover:text-white text-custom-neutral-600 rounded-full cursor-pointer"
          />
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.8 }}
        className="relative w-full flex flex-col items-center justify-between md:flex-row md:justify-center md:gap-16 gap-6"
      >
        <img
          src="assets/images/star_frame.png"
          alt="star_frame icon"
          className="absolute top-6 md:top-0 right-8 md:right-[45%] w-36 h-auto"
        />
        <img
          src="assets/images/avatar_1.png"
          alt="avatar-1"
          className="w-48 xl:w-60 h-auto mt-36 md:mt-16"
        />
        <img
          src="assets/images/avatar_2.png"
          alt="avatar-2"
          className="w-48 xl:w-60 h-auto md:mb-36"
        />
      </motion.div>
    </div>
  );
};

export default HeroBloc;
