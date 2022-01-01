import React,{useEffect} from "react";
import Choices from "./Choices"
const Modal =(props)=>{
useEffect(()=>{
},[props.houseNo, props.setHouseNo])
// const push_choice=(choice)=>{
//     props.choices.push({buildingID:choice.id,xIndex:props.xIndex,yIndex:props.yIndex,houseNo:house})
// }
    return (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-Gray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Feel free to Choose!<br/>
                    <span className="text-sm">(House nos. are given randomly)</span>
                  </h3>
                </div>
                <div className="flex justify-center">
                <div className="my-4">
                {Choices.map((choice)=>(
                    <div key={choice.id} className="form-check">
                    <input className="h-4 w-4 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-7 cursor-pointer"
                        name="selector" type="radio"
                        onClick={
                            ()=>{
                                props.setBuildingID(choice.id)
                                if(choice.id===1)
                                {
                                    props.setHouseNo(Number(Math.floor(Math.random()*props.totalX*props.totalY*1000)))
                                }
                                else
                                {
                                    props.setName(choice.title)
                                }
                                // props.setHouseNo(props.houseNo+1)
                                
                            }
                        }
                        />
                    <label className="form-check-label font-semibold cursor-pointer inline-block text-gray-800">
                        {choice.title}
                    </label>
                    </div>))
                    }
                </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="bg-red-500 text-white active:bg-red-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{
                        props.setShowModal(false)
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        props.choices.push({buildingID:props.buildingID,xIndex:props.xIndex,yIndex:props.yIndex,houseNo:props.houseNo})
                        props.setShowModal(false)
                }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default Modal