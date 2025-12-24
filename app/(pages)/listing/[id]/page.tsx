"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { car_interface } from "@/lib/car";

const SingleCar = () => {
  const params = useParams();
  const id = params.id as string;
  const [carData, setListing] = useState<car_interface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCar = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/cars/${id}/`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch car");
        }

        const carData = await res.json();
        console.log("Car data received:", carData);
        console.log("Image URL:", carData.image);
        setListing(carData);
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <div className="site-section bg-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="flex justify-center items-center h-screen">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  <span className="text-gray-600 text-lg font-medium">
                    Loading...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return carData ? (
    <div className="site-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2">
            {carData?.image && (
              <Image
                src={carData.image}
                alt={carData.name}
                width={500}
                height={500}
                unoptimized
                className="img-fluid"
              />
            )}
          </div>
          <div className="col-lg-4 mr-auto">
            <h2>{carData.name}</h2>

            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Status of the car: </span>
                <span
                  className={`${
                    carData.available
                      ? "text-white bg-green-500 px-3 py-1 rounded-md"
                      : "text-white bg-red-500 p-2 rounded-md"
                  }`}
                >
                  {carData.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Door:</span>
                <span className="number">{carData.doors}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Price:</span>
                <span className="number">${carData.price}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Type:</span>
                <span className="number">{carData.type}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Transmission:</span>
                <span className="number">{carData.transmission}</span>
              </div>
            </div>
            <div className="d-block d-md-flex mb-3 border-bottom pb-3">
              <div className="listing-feature pr-4">
                <span className="caption">Fuel:</span>
                <span className="number">{carData.fuel}</span>
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
