"use client";
import Banner from "../../components/Banner";
import CarListingComponent from "../../components/ui/carlisting";

import { useEffect, useState } from "react";
import { fetchCars } from "@/lib/features/Cars/CarSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useCars } from "@/lib/getcars";
import CarFilters from "@/app/components/CarFilters";
import { car_interface } from "@/lib/car";

const ListingPage = () => {
  const [filteredCars, setFilteredCars] = useState<car_interface[]>([]);
  const filtercards = (cars: car_interface[]) => {
    setFilteredCars(cars);
    console.log("filtered cards", cars);
  };
  const dispatch = useAppDispatch();
  const { cars, loading } = useCars();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <Banner />
      <CarFilters cars={cars} onChangeFilters={filtercards} />
      <CarListingComponent limit={-1} cars={filteredCars} loading={loading} />
    </>
  );
};

export default ListingPage;
