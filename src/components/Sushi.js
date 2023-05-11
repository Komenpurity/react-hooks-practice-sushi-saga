import React, { useState } from "react";

function Sushi({id,name,price,url,addPlate}) {

  const [eaten,setEaten] = useState(false)  

  function eat (){
    setEaten((eaten) => !eaten) 
  }

  return (
    <div className="sushi" key = {id} onClick={eat}>  
      <div className="plate" onClick={() =>  addPlate(id) }>    
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (  
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
