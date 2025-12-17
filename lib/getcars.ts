    
"use client";

import { useAppSelector } from "./hooks";

// General helper hook to read cars from the Redux store
// Can be used in any client component: const { cars, loading, error } = useCars();
export const useCars = () => {
  const { cars, loading, error } = useAppSelector((state) => state.cars);
  return { cars, loading, error };
}; 