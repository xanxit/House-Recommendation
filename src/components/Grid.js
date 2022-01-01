import React, { useState,useEffect } from "react";
import BestHouse from "./BestHouseDisplay";
import Box from "./Box";
import Input from "./Input";

const Grid = () => {
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);
  const [makeMatrix, setMakeMatrix] = useState(false);
  const [showInput,setShowInput] = useState(false);
  const [choice,setChoice] = useState([{
      buildingID:0,
      xIndex:-1,
      yIndex:-1,
      houseNo:-1 
  }])
  const [clicked,setClicked] = useState(false);
    const [result, setResult] = useState([]);
    const[bestHouseDisplay, setBestHouseDisplay] = useState(false);
  const [houseCoordinates,setHouseCoordinates] = useState([{ xIndex: -1, yIndex: -1,houseNo:-1 }]);
  useEffect(()=>{
    setShowInput(true);
  },[])
  const handleMakeMatrix = (e) => {
    e.preventDefault();
    setShowInput(true);
    setMakeMatrix(!makeMatrix);
    setRow(2);
    setCol(2);
    setClicked(false);
  };
    const matrix = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        matrix.push(<Box choice={choice} row={i} col={j} totalX={row} totalY={col}/>);
    }
}
// console.log(choice)
const handleSubmit = () => {
    setClicked(true);
for(let i=1;i<choice.length;i++) {
    console.log(choice[i].buildingID+" "+choice[i].xIndex+" "+choice[i].yIndex);
    if(choice[i].buildingID === 1)
    {
        houseCoordinates.push({xIndex:choice[i].xIndex,yIndex:choice[i].yIndex,houseNo:choice[i].houseNo});
    }
}
console.log(houseCoordinates);
setBestHouseDisplay(true);
}
  return (
    <div className="mx-2">
      {showInput?<Input row={row} col={col} setCol={setCol} setRow={setRow} showInput={showInput} setShowInput={setShowInput} setMakeMatrix={setMakeMatrix} />:null}
      <div className="flex flex-row justify-center">
        <div className="">
        <button
        type="submit"
          onClick={handleMakeMatrix}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-opacity-80 mx-8 my-5"
        >
          Reset Matrix
        </button>
      </div>
      <div className="">
      <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-500 
      rounded-md hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-opacity-80 my-5" onClick={handleSubmit} disabled={clicked?true:false}>
         {clicked?"Reset the Matrix to continue": "Calculate Best House"}</button>
      </div>
      </div>
      {makeMatrix === true ? (
        <div className="flex flex-col items-center justify-center">
        <div
          className={`grid gap-8`}
          style={{
            gridTemplateRows: `repeat(${row}, 115px)`,
            gridTemplateColumns: `repeat(${col}, 115px)`,
          }}
        >
          {matrix.map((item, idx) => {
            return <div key={idx}>{item}</div>;
          })}
        </div>
      </div>
      ) : null}
            <hr/>
      
        {bestHouseDisplay?<BestHouse houseCoordinates={houseCoordinates} setHouseCoordinates={setHouseCoordinates} choice={choice} setChoice={setChoice} result={result} setResult={setResult} bestHouseDisplay={bestHouseDisplay} setBestHouseDisplay={setBestHouseDisplay}/>:null}
        
      {/* <button className="w-12 h-8 text-black" onClick={final_result}>{result.length!==0?result[0]+" "+result[1]:"Recommended House!"}</button> */}
    </div>
  );
};

export default Grid;