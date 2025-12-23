"use client";
import { getSession } from "next-auth/react";
import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    type: "",
    doors: "",
    passengers: "",
    transmission: "",
    fuel: "",
    year: "",
    image: null,
  });
  const [image, setImage] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log("IMAGE FILE:", e.target.files[0]);
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const user = await getSession();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("type", formData.type);
    data.append("transmission", formData.transmission);
    data.append("fuel", formData.fuel);
    data.append("year", formData.year);
    data.append("doors", formData.doors.toString());
    data.append("passengers", formData.passengers.toString());

    if (!user) {
      toast.error("You must be logged in to add a vehicle");
      setLoading(false);
      return;
    }
    data.append("user", String(user.user_id || 2));
    if (image) {
      data.append("image", image);
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/cars/`,
        {
          method: "POST",
          body: data,
        }
      );

      const responseText = await res.text();
      console.log("STATUS:", res.status);
      console.log("RESPONSE:", responseText);

      if (!res.ok) {
        throw new Error("Failed to create car");
      }
      toast.success("Car created successfully!", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error creating car", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add Vehicle
        </h2>

        {/* Form */}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* Vehicle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Name
            </label>
            <input
              type="text"
              placeholder="Toyota Corolla"
              value={formData.name}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="name"
              required
            />
          </div>

          {/* { vehicle Price } */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vehicle Price
            </label>
            <input
              type="number"
              placeholder="10000"
              value={formData.price}
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="price"
              required
            />
          </div>

          {/* Vehicle Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Body Type
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="type"
              value={formData.type}
              required
            >
              <option>Select body type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="coupe">Coupe</option>
            </select>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Doors
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="doors"
              value={formData.doors}
              required
            >
              <option>Select number of doors</option>
              <option value="4">4 Doors</option>
              <option value="6">6 Doors</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Passengers
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="passengers"
              value={formData.passengers}
              required
            >
              <option>Select number of passengers</option>
              <option value="2">2 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="6">6 Passengers</option>
              <option value="8">8 Passengers</option>
            </select>
          </div>

          {/* Registration Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transmission
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="transmission"
              value={formData.transmission}
              required
            >
              <option>Select transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
              <option value="semi-automatic">Semi-Automatic</option>
            </select>
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fuel Type
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="fuel"
              value={formData.fuel}
              required
            >
              <option value="">Select fuel type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Notes */}
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year
            </label>
            <select
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              onChange={handleChange}
              name="year"
              value={formData.year}
              required
            >
              <option value="">Select year</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>

          {/* Custom File Upload Button */}
          <div className="flex items-center space-x-4">
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              {fileName || "Choose an image"}
            </label>

            {/* Hidden file input */}
            <input
              type="file"
              id="image-upload"
              name="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              required
            />
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Add Vehicle"}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddVehicle;
