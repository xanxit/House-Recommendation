import React,{useState} from "react";
import Modal from "./Modal"
// import House from "../../public/house.png"
const Box = (props) => {
    const [showModal, setShowModal] =useState(false);
    const [disable,setDisable] = useState(false);
    const [buildingID,setBuildingID] = useState(0);
    const [houseNo,setHouseNo] = useState(0);
    const [name,setName]=useState("");
    // useEffect(()=>{
    //     console.log(buildingID);
    // },[buildingID,setBuildingID])
  return (
      <div>
           {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} totalX={props.totalX} totalY={props.totalY} buildingID={buildingID} setBuildingID={setBuildingID} houseNo={houseNo} setHouseNo={setHouseNo} xIndex={props.row} yIndex={props.col} name={name} setName={setName} choices={props.choice}/>
        ):
        null}
    <button className="my-2 bg-gray-800 rounded-md lg:w-32 lg:h-24 text-white" type="button"
        onClick={() =>{
             setShowModal(true)
             setDisable(true)
        }}
        disabled={disable}
        >
            {/* {props.row===props.choice.xIndex && props.col===props.choice.yIndex ? props.row+" "+props.col+" "+props.choice.buildingID:props.row+" "+props.col  } */}
            {disable?(buildingID===1)?
            (<div><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-house-construction-and-tools-kiranshastry-gradient-kiranshastry.png" className="text-center mx-auto flex justify-center"/> No.{houseNo}</div>)
            :(<div><img src="https://img.icons8.com/external-gradients-pause-08/64/000000/external-buildings-real-estate-gradients-pause-08-3.png"  className="text-center mx-auto flex justify-center"/> {name}</div>)
            :props.row+" "+props.col}
    </button>
   
</div>
  );
};

export default Box;