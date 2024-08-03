import React from "react";
import { motion } from "framer-motion";

const Footers = () => {
  return (
    <div className="w-full flex flex-col items-start justify-between gap-16">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="bg-section w-full h-64  flex flex-col items-center justify-center gap-6 rounded-xl cursor-pointer"
      >
        <h3 className="text-2xl md:text-4xl text-white font-semibold ">
          {" "}
          Build your NFT profile
        </h3>
        <p className="text-white text-sm md:text-base font-medium">
          Join almost 10k NFT profiles on Digit !
        </p>
        <button className="p-3 text-custom-neutral-600 text-base md:text-lg font-bold bg-white rounded-full">
          Sign up now
        </button>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.8 }}
        className="w-full flex flex-col items-start justify-between gap-6"
      >
        <motion.img
          src="/assets/images/Frame@2x.png"
          alt="logo"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -25 }}
          transition={{ delay: 0.7 }}
          className="w-8 md:w-10 h-auto "
        />
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          transition={{ delay: 0.8 }}
          className="w-full py-4 flex flex-col items-start gap-2  md:flex-row md:items-center justify-between border-t border-custom-neutral-100"
        >
          <p className="text-custom-neutral-600 text-xs md:text-lg font-semibold">
            Create Explore & Collect Digital NFTs
          </p>
          <ul className="flex items-center justify-evenly gap-4 text-custom-neutral-600 text-xs md:text-lg font-medium">
            <li>Privacy</li>
            <li>Terms & Conditions </li>
            <li>About Us</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footers;
