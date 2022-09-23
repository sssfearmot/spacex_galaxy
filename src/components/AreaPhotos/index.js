import React from "react";
import AreaSearch from "./AreaSearch";
import GridPhotos from "./GridPhotos";
import "./Style.css";


export default function AreaPhotos() {
  return (
    <section id="areaPhotos">
      <div id="titleAreaPhotos">
        <h1>Photos</h1>
        <p>Mars Rover Photos: Image data gathered by NASA Curiosity, Opportunity, and Spirit rovers on Mars</p>
      </div>
     <AreaSearch/>
     <GridPhotos/>
    </section>
  );
}


