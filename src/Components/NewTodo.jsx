import React from "react";

const NewTodo = () => {
  return (
    <div className="bg-slate-600 px-4 py-3 mt-4 flex justify-between items-center rounded-md border-white/10 border-2 gap-5 shadow-lg">
      <div className="flex justify-center items-center">
        <input type="checkbox" />
        <input
          type="text"
          className="bg-transparent border-none min-w-min focus:outline-none text-white text-lg pl-4"
          disabled
        />
      </div>
      <div>
        <img
          className="w-9 inline-block mx-2 cursor-pointer border-2 my-1 p-1 h-9 border-yellow-300/30 border-dotted rounded-lg"
          src="./src/assets/pen.svg"
        />
        <img
          className="w-9 inline-block cursor-pointer border-2 my-1 p-1 h-9 border-yellow-300/30 border-dotted rounded-lg "
          src="./src/assets/delete.svg"
        />
      </div>
    </div>
  );
};

export default NewTodo;
