import React from 'react'
import { MdOutlineChair, MdChair } from "react-icons/md"
const Seaticon = () => {
  return (
    <div style={{fontSize:"20px"}}>
      <h2>Key to Seat Layout:</h2>
      <p>   <MdOutlineChair
        style={{ width: "35px", marginTop: "5px", height: "30px" }}
      />Available</p>
      <p > <MdChair
        style={{ width: "35px", marginTop: "15px", height: "30px"}}
      />Unavailable</p>
      <p >    <MdOutlineChair
        style={{ width: "35px", marginTop: "15px", height: "30px" }}
        className='selectedseat'
      />Your Sealection</p>
    </div>
  )
}

export default Seaticon;