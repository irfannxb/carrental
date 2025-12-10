import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Text */}
        <span className="text-gray-600 text-lg font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
