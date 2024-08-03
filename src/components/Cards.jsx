import React, { useState } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  const collectionItems = [
    {
      title: "CyberPunk",
      image: "/assets/images/monkey_gard.png",
      category: "gaming",
    },
    {
      title: "DuroLost Boll-Upper",
      image: "/assets/images/astronot_2.png",
      category: "sport",
    },
    {
      title: "Space X Wiper",
      image: "/assets/images/astronot_profil.png",
      category: "art",
    },
    {
      title: "Snopp Dogg",
      image: "/assets/images/snopp-dog.png",
      category: "celebritie",
    },
  ];

  const servicesItems = [
    {
      title: "Set up your wallet",
      image: "/assets/images/wallet-02.png",
    },
    {
      title: "Add your NFT's",
      image: "/assets/images/cloud-download.png",
    },
    {
      title: "Promote your NTF's",
      image: "/assets/images/sale-tag-02.png",
    },
    {
      title: "Sell your NTF's",
      image: "/assets/images/bitcoin-ellipse.png",
    },
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredItems = collectionItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="p-4 w-full flex flex-col items-start justify-between gap-16">
      <div className="w-full flex flex-col items-start justify-between gap-6">
        <h2 className="text-xl xl:text-3xl text-custom-neutral-800 font-bold">
          Your Collections
        </h2>
        <div className="w-full flex items-start justify-between mb-6">
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-5  items-start gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`h-10 px-1 xl:p-4  flex items-center justify-center ${
                filter === "all"
                  ? "bg-black text-white"
                  : "bg-custom-neutral-50 text-black"
              } text-xs xl:text-base font-semibold rounded-lg`}
            >
              All Categories
            </button>
            <button
              onClick={() => setFilter("art")}
              className={`h-10 px-2 xl:p-4  flex items-center justify-center ${
                filter === "art"
                  ? "bg-black text-white"
                  : "bg-custom-neutral-50 text-black"
              } text-xs xl:text-base font-semibold rounded-lg`}
            >
              Art
            </button>
            <button
              onClick={() => setFilter("celebritie")}
              className={`h-10 px-2 xl:p-4  flex items-center justify-center ${
                filter === "celebritie"
                  ? "bg-black text-white"
                  : "bg-custom-neutral-50 text-black"
              } text-xs xl:text-base font-semibold rounded-lg`}
            >
              Celebrities
            </button>
            <button
              onClick={() => setFilter("gaming")}
              className={`h-10 px-2 xl:p-4  flex items-center justify-center ${
                filter === "gaming"
                  ? "bg-black text-white"
                  : "bg-custom-neutral-50 text-black"
              } text-xs xl:text-base font-semibold rounded-lg`}
            >
              Gaming
            </button>
            <button
              onClick={() => setFilter("sport")}
              className={`h-10 px-2 xl:p-4 flex items-center justify-center ${
                filter === "sport"
                  ? "bg-black text-white"
                  : "bg-custom-neutral-50 text-black"
              } text-xs xl:text-base font-semibold rounded-lg`}
            >
              Sport
            </button>
          </div>
          <a
            href="##"
            className="text-custom-neutral-600 text-sm xl:text-lg font-semibold border-b-2 border-custom-neutral-600"
          >
            View more
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCard(index)}
              className={`p-4 flex flex-col items-center justify-between gap-6 border border-custom-neutral-200 rounded-xl ${
                selectedCard === index
                  ? "shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                  : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={item.image}
                alt={item.title}
                className="w-full h-52 rounded-xl object-cover object-center cursor-pointer"
              />
              <div className="w-full flex items-center justify-between text-base md:text-lg text-custom-neutral-800 font-bold">
                {item.title}
                <img
                  src="/assets/images/ethereum-ellipse.png"
                  alt="ethereum"
                  className="w-8 h-auto "
                />
              </div>
              <button className="w-full h-10 text-custom-neutral-600 text-lg font-medium border border-custom-neutral-600 rounded-lg">
                Place a Bid
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-between gap-6">
        <h2 className="text-xl xl:text-3xl text-custom-neutral-800 font-bold">
          Create and Sell Now
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-between gap-6 cursor-pointer">
          {servicesItems.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={index}
              onClick={() => setSelectedService(index)}
              className={`p-4 w-full h-auto flex flex-col items-start justify-start gap-4 text-left  rounded-xl ${
                selectedService === index
                  ? "bg-custom-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  : "bg-custom-neutral-50"
              }`}
            >
              <img
                src={service.image}
                alt=""
                className={`w-10 h-auto flex items-start justify-start p-2 bg-custom-neutral-800 rounded-xl ${
                  selectedService === index ? "bg-custom-neutral-50 " : ""
                }`}
              />
              <p
                className={`text-lg text-custom-neutral-600 font-bold  ${
                  selectedService === index
                    ? "text-white"
                    : "text-custom-neutral-600"
                }  font-medium `}
              >
                {service.title}
              </p>
              <span
                className={`text-sm ${
                  selectedService === index
                    ? "text-white"
                    : "text-custom-neutral-600 "
                }  font-medium `}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis et inventore cum voluptatum praesentium.
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
