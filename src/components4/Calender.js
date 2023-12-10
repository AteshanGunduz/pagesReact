import { useState, useEffect } from "react"



const Calender = ({handleDate}) => {
  const[checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("");

  const handleDates = ()=>{
    handleDate(checkIn, checkOut)
   }
   

  return (
    <div className="calenderBox">
        <div>
            <h3>Check In</h3>
            <div className="inputs">
              <input type="date" value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}/>
            </div>
        </div>
        <div>
            <h3>Check Out</h3>
            <div className="inputs">
              <input type="date" value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)} />
            </div>
        </div>
        <button onClick={handleDates} className="search">Search</button>
    </div>
  )
}
export default Calender