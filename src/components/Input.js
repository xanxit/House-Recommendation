import React from "react";

const Input = (props) => {
  return (
    // <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:py-8 py-4">
    //   <div>
    //     <label className="text-gray-700" for="username">
    //       Enter Rows :
    //     </label>
    //     <input
    //       id="rows"
    //       name="rows"
    //       type="number"
    //       value={props.row}
    //       onChange={(e) => props.setRow(e.target.value)}
    //       className="block w-full px-4 py-2 mt-2 border-black text-gray-700 bg-white border-2 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
    //     />
    //   </div>

    //   <div>
    //     <label className="text-gray-700" for="column">
    //       Enter Column :
    //     </label>
    //     <input
    //       id="column"
    //       name="column"
    //       type="number"
    //       value={props.col}
    //       onChange={(e) => props.setCol(e.target.value)}
    //       className="block w-full px-4 py-2 mt-2 border-black border-2 text-gray-700 bg-white rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
    //     />
    //   </div>
    //   <button
    //                 className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                 type="button"
    //                 onClick={() => {
    //                     props.setMakeMatrix(true);
    //                     props.setShowInput(false)
    //                 }}
    //               >
    //                 Make Matrix
    //               </button>
    // </div>
    <>
    <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-Gray-200 rounded-t">
              <h3 className="text-lg font-semibold">
                Enter the Dimensions for the matrix
              </h3>
            </div>
            <div className="flex justify-center">
            <div className="my-4 flex flex-col justify-center cursor-pointer">
            <div className="relative inline-flex flex-row justify-around align-center my-4">
    <div className="text-xl flex justify-start font-semibold mr-12">Enter Row</div>
  <select className="border cursor-pointer border-gray-800 rounded-full text-gray-600 h-8 pl-3 pr-7 bg-white hover:border-gray-800 align-baseline" onChange={(e)=>{props.setRow(e.target.value)}}>
  {[...Array(9)].map((e,i)=>{
        return <option key={i} value={i+1}>{i+1}</option>
    })}
  </select>
</div>
<div className="relative inline-flex flex-row justify-around align-center">
    <div className="text-xl flex justify-start font-semibold mr-5">Enter Column</div>
  <select className="border border-gray-800 cursor-pointer rounded-full text-gray-600 h-8 pl-3 pr-7 bg-white hover:border-gray-800 align-baseline" onChange={(e)=>{props.setCol(e.target.value)}}>
  {[...Array(9)].map((e,i)=>{
        return <option key={i} value={i+1}>{i+1}</option>
    })}
  </select>
</div>
            </div>
            </div>
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                    console.log(props.row,props.col)
                    props.setMakeMatrix(true);
                    props.setShowInput(false)
                }}
                >
                Make Matrix
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Input;