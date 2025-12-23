"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Car = {
  name: string;
  image: string;
  price: number;
  type: string;
  doors: number;
  passengers: number;
  transmission: string;
  fuel: string;
  year: number;
};

export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.original.image;
      if (!imageUrl) return <span>No Image</span>;
      return (
        <img
          src={imageUrl}
          alt={row.original.name}
          className="w-20 h-20 object-cover"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Vehicle Name",
  },
  {
    accessorKey: "transmission",
    header: "Transmission",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "doors",
    header: "Doors",
  },
  {
    accessorKey: "passengers",
    header: "Passengers",
  },
  {
    accessorKey: "fuel",
    header: "Fuel",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
];
