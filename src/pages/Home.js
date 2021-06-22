import React from "react";
import SideBar from "../components/SideBarAtomicDesign";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-darkGray flex items-center justify-center">
      <div className=" w-full h-full md:w-10/12 md:h-5/6 md:border-cream md:border-2 md:rounded-lg flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 overflow-hidden">
        <div className="col-span-3 row-span-6 md:border-cream md:border-r-2 ">
          <SideBar />
        </div>

        <div className="flex-1 px-5 pt-5 pb-20 md:p-0 md:col-span-9 md:row-span-6">
          {/* <ChatBox /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
