import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-[100px] bg-black text-white items-center">
      <div className="mx-8 my-2 text-2xl uppercase font-bold">Felojef</div>
      <div className="mx-8 my-2 text-2xl uppercase bg-white text-black px-6 py-2 font-bold cursor-pointer border border-black hover:border hover:border-white rounded-lg">
        Blog
      </div>
    </div>
  );
};

export default Header;
