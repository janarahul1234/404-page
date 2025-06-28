import React from "react";
import image from "./assets/404.svg";

const App = () => {
  return (
    <main className="bg-linear-65 from-gray-50 to-gray-200 flex items-center justify-center gap-8 min-h-screen">
      <div className="-ml-8">
        <img src={image} alt="404 page" />
      </div>

      <div>
        <h1 className="text-5xl text-gray-950 mb-8">
          Oops! <br /> Page not found
        </h1>

        <p className="mb-24">
          This page is missing or you assembled <br /> the link incorrectly.
        </p>

        <p className="text-sm">ERROR_404_PAGE</p>
      </div>
    </main>
  );
};

export default App;
