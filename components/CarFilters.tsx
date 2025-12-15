import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { car_interface, cars } from "../lib/car";

interface CarFiltersProps {
  onChangeFilters: (filters: car_interface[]) => void;
  cars: car_interface[];
}

const CarFilters = ({ onChangeFilters, cars }: CarFiltersProps) => {
  const defaultPrice = 5000;
  const [price, setPrice] = useState<number[]>([defaultPrice]);
  const [priceUsed, setPriceUsed] = useState(false);
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [doors, setDoors] = useState("");
  const [type, setType] = useState("");
  const [available, setAvailable] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  const anyFilterUsed =
    priceUsed ||
    transmission ||
    fuel ||
    doors ||
    type ||
    available ||
    unavailable;

  // Run filter on every change
  useEffect(() => {
    if (!anyFilterUsed) {
      console.log("No filter applied, returning all cars", cars);
      onChangeFilters(cars);
      return;
    }

    const filtered = cars.filter((car) => {
      if (priceUsed && car.price > price[0]) return false;
      if (transmission && car.transmission !== transmission) return false;
      if (fuel && car.fuel !== fuel) return false;
      if (doors && String(car.doors) !== doors) return false;
      if (type && car.type !== type) return false;
      if (available && !car.available) return false;
      if (unavailable && car.available) return false;
      return true;
    });

    onChangeFilters(filtered);
  }, [
    price,
    priceUsed,
    transmission,
    fuel,
    doors,
    type,
    available,
    unavailable,
    cars,
  ]);

  return (
    <div className="container mx-auto mb-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Price Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Max Price</label>

          <Slider
            value={price}
            max={5000}
            step={500}
            onValueChange={(val) => {
              setPrice(val);
              setPriceUsed(true);
            }}
          />

          <div className="flex items-center justify-between mt-2">
            <span>0</span>
            <span>{price[0]}</span>
            <span>5000</span>
          </div>
        </div>

        {/* Transmission Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Transmission</label>
          <select
            className="border p-2 rounded"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="">Select</option>
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        {/* Fuel Type Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Fuel Type</label>
          <select
            className="border p-2 rounded"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          >
            <option value="">Select</option>
            <option value="petrol">Petrol</option>
            <option value="hybrid">Hybrid</option>
            <option value="diesel">Diesel</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        {/* Doors Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Number of Doors</label>
          <select
            className="border p-2 rounded"
            value={doors}
            onChange={(e) => setDoors(e.target.value)}
          >
            <option value="">Select</option>
            <option value="4">4 Doors</option>
            <option value="6">6 Doors</option>
          </select>
        </div>

        {/* Type Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Body Type</label>
          <select
            className="border p-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="coupe">Coupe</option>
          </select>
        </div>

        {/* Availability Filter */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Availability</label>

          <div className="flex items-center space-x-4">
            {/* Available */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
              />
              <span>Available</span>
            </label>

            {/* Unavailable */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={unavailable}
                onChange={(e) => setUnavailable(e.target.checked)}
              />
              <span>Unavailable</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
