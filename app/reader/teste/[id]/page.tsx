"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";

const App = () => {
  const [location, setLocation] = useState<string | number>(0); // Estado para rastrear a localização do eBook

  const epubUrl = "https://react-reader.metabits.no/files/alice.epub";
  return (
    <div className="h-screen mt-[8vh]">
      <ReactReader
        url={epubUrl}
        epubInitOptions={{
          openAs: "epub",
        }}
        location={location} // Define a localização inicial do eBook
        locationChanged={(loc) => setLocation(loc)} // Atualiza a localização quando o usuário navega
      />
    </div>
  );
};

export default App;
