import React, { useState } from "react";
import { exploreCars } from "../../services/apiServices";

const Home = () => {
  const [carsDetail, setCarsDetail] = useState([]);

  const carsChangeHandler = async (e) => {
    e.preventDefault();
    if (e.target.value) {
      let result = await exploreCars(e.target.value);
      if (result?.data?.isError === false) {
        setCarsDetail(result?.data?.data?.filteredCars);
      }
    } else {
      setCarsDetail();
    }
  };

  return (
    <>
      <div>
        <form>
          <label>
            Enters the data
            <input type="text" onChange={carsChangeHandler} />
          </label>
        </form>
      </div>
      {carsDetail?.length > 0 &&
        carsDetail?.map((cars) => (
          <div className="d-flex border ">
            {/* {cars.carName} */}
            <h5 className="text-danger">Car Name: {cars.carName} </h5>{" "}
            <h5 className="text-warning">Car Model: {cars.carModel}</h5>{" "}
            <h5 className="text-success">
              Car Manufacturer: {cars.manufacturer}
            </h5>{" "}
            <h5 className="text-primary">Car Price: {cars.priceRange}</h5>{" "}
          </div>
        ))}
    </>
  );
};

export default Home;
