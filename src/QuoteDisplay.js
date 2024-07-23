import React from "react";

const QuoteDisplay = ({ quote, handleClick }) => {
  return (
    <div className="h-56 w-2/4 p-8 bg-white border border-black grid place-items-center text-center rounded-2xl grid-rows-3 gap-8 shadow-[0_0_34px_10px_inset_rgba(0,0,0,0.3)] ">
      <button
        onClick={handleClick}
        className="rounded-full  py-1 px-2 text-cyan-100  border-teal-500 border-2 delay-10 transition-all bg-gradient-to-t from-indigo-500 to-teal-500 font-bold active:scale-y-90 active:scale-x-110"
      >
        <p className="drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0)]">New Quote</p>
      </button>
      <q className="font-extrabold text-2xl drop-shadow-[1px_1px_3px_rgba(0,255,255,0.4)]">
        {quote?.text}
      </q>
      <cite className="italic">- {quote?.author.split(",")[0]}</cite>
    </div>
  );
};

export default QuoteDisplay;
