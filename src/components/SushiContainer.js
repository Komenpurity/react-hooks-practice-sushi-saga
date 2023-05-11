import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi}) { 
  return (
    <div className="belt">
      {sushi.map( (item) => {
        return <Sushi id = {item.id} name = {item.name} url = {item.img_url} price = {item.price}/> 
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
