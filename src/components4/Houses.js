

const Houses = ({filteredHouses}) => {
   
  return (
    filteredHouses.map((house) => (
      <div className="houseContainer" key={house.id}>
        <img src={house.img} alt={house.name} />
        <div className="houseBox">
          <h4>{house.name}</h4>
          <p>{house.price}</p>
        </div>
      </div>
    ))
  )
}
export default Houses