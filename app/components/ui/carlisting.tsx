import CarLayout from "./car";
import Link from "next/link";
import { car_interface } from "@/lib/car";
import { useState } from "react";

const CarListingComponent = ({
  cars,
  loading,
  limit,
}: {
  cars: car_interface[];
  loading: boolean;
  limit: number;
}) => {
  const sortedCars =
    limit === -1
      ? [...cars]
      : [...cars].sort((a, b) => a.price - b.price).slice(0, limit);

  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="section-heading">
              <strong>Car Listings</strong>
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="row">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

                {/* Text */}
                <span className="text-gray-600 text-lg font-medium">
                  Loading...
                </span>
              </div>
            </div>
          ) : (
            sortedCars.map((car) => (
              <Link
                href={`/listing/${car.id}`}
                key={car.id}
                className="col-md-6 col-lg-4 mb-4"
              >
                <CarLayout key={car.id} carobj={car} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CarListingComponent;
