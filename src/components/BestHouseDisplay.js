const BestHouse=(props)=>{
    var min=Number.MAX_VALUE;
    console.log(props.result)
    const final_result=()=>{
        // console.log("I am here")
        console.log(props.choice);
        for (let j=1;j<props.houseCoordinates.length;j++){
           console.log(props.houseCoordinates[j].xIndex+" "+props.houseCoordinates[j].yIndex)
            var distance=0;
            for(let i=1;i<props.choice.length;i++)
            {
                if(props.choice[i].buildingID!==1)
                {
                    distance=distance+Math.sqrt((props.choice[i].xIndex-props.houseCoordinates[j].xIndex)*(props.choice[i].xIndex-props.houseCoordinates[j].xIndex)+(props.choice[i].yIndex-props.houseCoordinates[j].yIndex)*(props.choice[i].yIndex-props.houseCoordinates[j].yIndex));
                }
            }
            if(distance<min)
            {
                min=distance;
                props.setResult([props.houseCoordinates[j].xIndex, props.houseCoordinates[j].yIndex,props.houseCoordinates[j].houseNo]);
            }
            
        }
    }
    return(
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-Gray-200 rounded-t">
                  {props.result.length===0?"Which is the best house?":(<div><img src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-red-ribbon-gold-medal-png-transparent-bottom-image_2284002.jpg" className="text-center mx-auto h-13 w-13 flex justify-center"/></div>)}
                </div>
                <div className="flex flex-col items-center justify-center px-6 pt-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 p-8 h-20 w-auto text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={final_result}
                    disabled={props.result.length===0?false:true}
                    >
                    {props.result.length>0?"House No. "+props.result[2]+" present at index ("+props.result[0]+", "+props.result[1]+")":"Click here to know?"}
                  </button>
                  <button
                    className="bg-red-500 w-auto text-white active:bg-red-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>{props.setBestHouseDisplay(false)}}
                    >
                    Go Back
                  </button>
                </div>
                 {/* <div className="text-center  my-3">Click to know</div> */}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
export default BestHouse