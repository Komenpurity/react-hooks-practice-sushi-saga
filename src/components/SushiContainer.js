import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi,addPlate}) { 

  const [sushiNumber,setSushiNumber] = useState(4) 

  const addFourSushi = () => {
    setSushiNumber(sushiNumber + 4)
  }

  return (
    <div className="belt">
      {sushi.slice(sushiNumber-4,sushiNumber).map( (item) => {
        return <Sushi addPlate={addPlate} id = {item.id} name = {item.name} url = {item.img_url} price = {item.price}/> 
      })}
      <MoreButton addFourSushi={addFourSushi}/>
    </div>
  );
}

export default SushiContainer;
