import React from "react";
import NavBar from "../components/NavBar";
import HeroBloc from "../components/HeroBloc";
import Cards from "../components/Cards";
import Footers from "../components/Footers";

const Main = () => {
  return (
    <div className="w-full h-screen p-6 md:p-8 lg:px-16 lg:py-8 flex flex-col items-center justify-between gap-20 bg-white overflow-x-hidden">
      <NavBar />
      <HeroBloc />
      <Cards />
      <Footers />
    </div>
  );
};

export default Main;
