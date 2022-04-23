import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [array, setArray] = useState([]);

  return (
    <>
    
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setArray={setArray} array={array} />

      <ol>
        {
        array.map(category => (
          <GifGrid 
          key={category} 
          category={category} 
          />
        ))
        }
      </ol>
      
    </>
  );
};

export default GifExpertApp;
