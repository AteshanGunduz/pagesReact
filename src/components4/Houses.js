
const Houses = ({ filteredHouses }) => {
  return (
    filteredHouses.length === 0 ? 
    <div>
      <h4>No houses found</h4>
      <p>Availability of our houses limited to 10days</p>
      </div>
      
      : 
      filteredHouses.map((house) => (
        <div className="houseContainer" key={house.id}>
          <img src={house.img} alt={house.name} />
          <div className="houseBox">
            <h4>{house.name}</h4>
            <p>{house.price}</p>
          </div>
        </div>
      ))
  );
};

export default Houses;