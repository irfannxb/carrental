"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { car_interface } from "../../lib/car";
import CarLayout from "./ui/car";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CarFilters from "./CarFilters";
import { useEffect } from "react";

const CarListing = ({ cars }: { cars: car_interface[] }) => {
  const pathname = usePathname();
  const [allCars, setAllCars] = useState<car_interface[]>(cars);
  const [loading, setLoading] = useState(false);

  // Pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const UpdateCarListing = (filters: car_interface[]) => {
    setLoading(false);
    const timer = setTimeout(() => {
      setAllCars(filters);
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    setTimeout(() => {
      const filteredCars = allCars;
      setAllCars(filteredCars);
      setLoading(true);
      console.log(cars);
    }, 1000);
  }, []);

  // Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = allCars.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allCars.length / itemsPerPage);

  return (
    <div className="site-section bg-light">
      {pathname === "/" ? (
        <></>
      ) : (
        <CarFilters cars={allCars} onChangeFilters={UpdateCarListing} />
      )}

      <div className="container">
        {pathname === "/" ? (
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CarListing;
