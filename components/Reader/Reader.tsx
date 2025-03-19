"use client";
import React, { useState } from "react";
import { ReactReader } from "react-reader";

function Reader() {
  const [location, setLocation] = useState<string | number>(0);
  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        url="/ebooks/ebooks5.epub"
        location={location}
        locationChanged={(epubcfi: string) => setLocation(epubcfi)}
      />
    </div>
  );
}

export default Reader;
