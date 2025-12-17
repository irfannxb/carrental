"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { cars, car_interface } from "../../lib/car";
import Car from "./ui/car";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CarFilters from "./CarFilters";
import { useEffect } from "react";

const CarListing = () => {
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
        <CarFilters cars={cars} onChangeFilters={UpdateCarListing} />
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

        <div className="row">
          {loading ? (
            allCars
              // .sort((a, b) => a.price - b.price)
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((car) => (
                <Link
                  href={`/listing/${car.id}`}
                  key={car.id}
                  className="col-md-6 col-lg-4 mb-4"
                >
                  <Car key={car.id} carobj={car} />
                </Link>
              ))
          ) : (
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
          )}

          {/* Pagination only on listing page */}
          {pathname === "/listing" && (
            <div className="col-md-12 flex justify-center mt-6 gap-4">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                Previous
              </Button>

              <span className="font-semibold">
                Page {currentPage} / {totalPages}
              </span>

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </div>
          )}

          {pathname === "/" ? (
            <div className="col-md-12 text-center">
              <Link href="/listing">
                <Button variant="outline">View All Cars</Button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarListing;
