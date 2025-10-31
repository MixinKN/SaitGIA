import React from "react";
import { ISearchLineProps } from "@/types/search-line.interface";
import { FiSearch } from "react-icons/fi";

function SearchLine({ value, onChange, className }: ISearchLineProps) {
  return (
    <div
      className={`bg-white w-full h-[70px] px-[30px] py-[15px] rounded-[20px] flex ${className}`}
    >
      <input className="flex-1 text-black" value={value} onChange={onChange} />
      <FiSearch size={40} className="text-black duration-200" />
    </div>
  );
}

export default SearchLine;
