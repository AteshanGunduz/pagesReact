import Houses from "./Houses"
import Calender from "./Calender"
import { data } from ".//Data"
import { useState } from "react"



const App = () => {
  const[date, setDate] = useState(["",""])
  const[houses, setHouses]= useState(data)
  const [house, setHouse] = useState([])

  const filteredHouses = () => {
    const filtered = houses.filter((house) => {
      return date[1].slice(8) - date[0].slice(8) <= house.avaliability
    });
  
    return filtered; 
  };

  const handleDate = (checkIn, checkOut)=>{
    setDate([checkIn, checkOut]);
    setHouse(filteredHouses())
  }

  console.log(date);
  console.log(houses);
  console.log(date[1].slice(8) - date[0].slice(8));
  


  return (
    <div>
    <div className="container2">
        <div className="houses">
        <Houses filteredHouses={house}/>
        </div>
        <Calender handleDate={handleDate}/>
    </div>
    </div>

  )
}
export default App