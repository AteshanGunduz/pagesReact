import Houses from "./Houses"
import Calender from "./Calender"
import { data } from ".//Data"
import { useState, useEffect } from "react"



const App = () => {
  const[date, setDate] = useState(["",""])
  const[houses, setHouses]= useState(data)
  const [house, setHouse] = useState([])
  const [randomDates, setRandomDates] = useState([]);


  const randomDate = () => {
    const currentDate = new Date();
    const maxDays = 10;
  
    const randomStartDays = Math.floor(Math.random() * maxDays);
    const randomEndDays = Math.floor(Math.random() * maxDays);
  
    const startDate = new Date(currentDate.getTime() + randomStartDays * 24 * 60 * 60 * 1000);
    const endDate = new Date(startDate.getTime() + (randomEndDays + 1) * 24 * 60 * 60 * 1000); 
  
    const avaliability =  endDate -  startDate
    return avaliability
  };

  useEffect(() => {
    const dates = Array.from({ length: 10 }, () => randomDate());
  
    setHouses((prevHouses) => {
      const updatedHouses = prevHouses.map((house, index) => {
        const newHouse = { ...house };
        newHouse.availability = dates[index];
        return newHouse;
      });
      console.log(updatedHouses)
      return updatedHouses;
    });
  
    setRandomDates(dates);
  }, []);

  console.log(houses);


  const filteredHouses = () => {
    const startDate = new Date(date[0]);
    const endDate = new Date(date[1]);
    console.log(startDate);
  
    const filtered = houses.filter((house) => {
      return endDate.getTime() - startDate.getTime() <= house.availability;
    });
    return filtered; 
  };

  const handleDate = (checkIn, checkOut)=>{
    setDate([checkIn, checkOut]);
    setHouse(filteredHouses())
  }
 

  console.log(date);
  console.log(house);
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
