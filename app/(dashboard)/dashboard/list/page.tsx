import React from "react";
import { car_interface } from "@/lib/car";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
// import { Session } from "next-auth";
const CarListDashboard = async ({}) => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `http://127.0.0.1:8000/api/cars/by-user/${session?.user_id}/`
  );
  const data = await res.json();
  console.log(data);
  return (
    <>
      <section className="bg-white p-6 rounded shadow">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data as car_interface[]} />
        </div>
      </section>
    </>
  );
};

export default CarListDashboard;
