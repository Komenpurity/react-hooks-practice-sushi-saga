import React from "react";

function Sushi({id,name,price,url,addPlate}) {
  return (
    <div className="sushi" key = {id} > 
      <div className="plate" onClick={() => addPlate(id)}> 
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={url} 
            alt={name} 
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details" key = {id}>
        {name} - ${price} 
      </h4>
    </div>
  );
}

export default Sushi;
