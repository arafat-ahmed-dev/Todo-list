import React from "react";
import NewTodo from "./Components/NewTodo";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl w-full min-h-screen bg-stone-600 text-white top-1/2 px-2">
      <h2 className="text-white mb-3 font-semibold ">Todo List</h2>
      <div className="min-w-min w-full max-w-lg flex items-center justify-center h-[60px]">
        <input type="text" placeholder="Write todos" className="focus:outline-none text-xl text-black px-2 py-4 rounded-s w-full sm:w-[90%]"/>
        <button type="submit" className="bg-orange-900 px-2 sm:py-[14px] rounded-e sm:text-2xl texi-xl h-full">Add</button>
      </div>
      <div className="border-black min-w-min w-full max-w-lg">
      <NewTodo />
      <NewTodo />
      <NewTodo />
      </div>
    </div>
  );
};

export default App;
