import { car_interface } from "@/lib/car";
import React from "react";

const CarLayout = ({ carobj }: { carobj: car_interface }) => {
  return (
    <div className="listing d-block  align-items-stretch" key={carobj.id}>
      <div className="listing-img h-100 mr-4">
        <img src={carobj.image} alt={carobj.name} className="img-fluid" />
      </div>
      <div className="listing-contents h-100">
        <h3>{carobj.name}</h3>
        <div className="d-block d-md-flex mb-3 border-bottom pb-3">
          <div className="listing-feature pr-4">
            <span className="caption">Available:</span>
            <span
              className={`${
                carobj.available
                  ? "text-white bg-green-500 px-3 py-1 rounded-md"
                  : "text-white bg-red-500 p-2 rounded-md"
              }`}
            >
              {carobj.available ? "Available" : "Unavailable"}
            </span>
          </div>
          <div className="listing-feature pr-4 w-100 text-right">
            <span className="number text-secondary font-bold text-2xl">
              ${carobj.price}
            </span>
          </div>
        </div>
        <div className="d-block d-md-flex mb-3 border-bottom pb-3">
          <div className="listing-feature pr-4">
            <span className="caption">Type:</span>
            <span className="number">{carobj.type}</span>
          </div>
          <div className="listing-feature pr-4">
            <span className="caption">Transmission:</span>
            <span className="number">{carobj.transmission}</span>
          </div>
          <div className="listing-feature pr-4">
            <span className="caption">Fuel:</span>
            <span className="number">{carobj.fuel}</span>
          </div>
        </div>
        <div className="d-block d-md-flex mb-3 border-bottom pb-3">
          <div className="listing-feature pr-4">
            <span className="caption">Doors:</span>
            <span className="number">{carobj.doors}</span>
          </div>
          <div className="listing-feature pr-4">
            <span className="caption">Passengers:</span>
            <span className="number">{carobj.passengers}</span>
          </div>
          <div className="listing-feature pr-4">
            <span className="caption">Year:</span>
            <span className="number">{carobj.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLayout;
