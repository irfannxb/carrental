import React from "react";
import { cars } from "@/lib/car";
import Image from "next/image";
const SingleCar = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const car = cars.find((car) => car.id === parseInt(id));

  return car ? (
    <div className="site-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            <Image src={car.image} alt={car.name} width={500} height={500} />
          </div>
          <div className="col-lg-4 mr-auto">
            <h2>{car.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              suscipit, repudiandae similique accusantium eius nulla quam
              laudantium sequi.
            </p>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Status of the car: </span>
                <span className={`${
                  car.available
                    ? "text-white bg-green-500 px-3 py-1 rounded-md"
                    : "text-white bg-red-500 p-2 rounded-md"
                }`}>
                  {car.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Door:</span>
                <span className="number">{car.doors}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Price:</span>
                <span className="number">${car.price}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Type:</span>
                <span className="number">{car.type}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Transmission:</span>
                <span className="number">{car.transmission}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Fuel:</span>
                <span className="number">{car.fuel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="site-section bg-light mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Car not found</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
