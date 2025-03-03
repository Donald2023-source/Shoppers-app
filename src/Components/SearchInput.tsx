"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full hidden md:inline-flex relative flex-1 h-12">
      <CiSearch className="absolute left-2.5 top-3 w-6 h-6 text-gray-400" />
      <input
        className="flex-1 h-full border-[1px] border-black/10 pl-8 pr-28 rounded-lg outline-none bg-transparent placeholder-gray-400 focus:shadow-lg focus:border-none"
        type="text"
        placeholder="Search Products..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

    {search && 
        <IoMdClose 
            onClick={() => setSearch("")} 
            className="text-gray-600 hoverEffect cursor-pointer absolute right-20 top-4"
        />
    }
      <button className="absolute bg-orange-400 mr-1.5 right-0 px-3.5 py-1.5 text-sm top-2 text-white hover:bg-orange-600 cursor-pointer rounded hoverEffect font-medium">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
