import React from "react";

const NewTodo = () => {
  return (
    <div className="bg-slate-600 sm:px-4 sm:py-3 p-1 mt-4 flex justify-around sm:justify-between rounded-md border-white/10 border-2 gap-5 shadow-lg">
      <div className="flex items-center">
        <input type="checkbox" />
        <input
          type="text"
          className="bg-transparent border-none w-[170px] sm:min-w-min focus:outline-none text-white text-lg sm:pl-4 pl-2"
          disabled
        />
      </div>
      <div className="flex overflow-hidden">
        <img
          className="w-7 sm:w-9 mx-2 cursor-pointer border-2  p-1 my-1 sm:h-9 border-yellow-300/30 border-dotted rounded-lg"
          src="./src/assets/pen.svg"
        />
        <img
          className="w-7 sm:w-9 cursor-pointer border-2 my-1 p-1 sm:h-9 border-yellow-300/30 border-dotted rounded-lg "
          src="./src/assets/delete.svg"
        />
      </div>
    </div>
  );
};

export default NewTodo;
