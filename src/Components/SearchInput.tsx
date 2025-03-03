import React from "react";

const SearchInput = () => {
  return (
    <div className="w-full hidden md:inline-flex flex-1 h-12">
      <input
        className="flex-1 h-full border-[1px] border-black/10 pl-8 pr-28 rounded-lg outline-none bg-transparent placeholder-gray-400 focus:shadow-lg focus:border-none"
        type="text"
        placeholder="Search Products..."
      />
    </div>
  );
};

export default SearchInput;
