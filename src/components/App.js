import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushi,setSushi] = useState([]) 
  const [plates,setPlates] = useState([]) 
  const [price,setPrice] = useState(100) 

  useEffect(
      () => {
        fetch("http://localhost:3000/sushis")
        .then(response => response.json())
        .then (data => setSushi(data)) 
      },[] ) 

  function addPlate(id){
    fetch(`http://localhost:3000/sushis/${id}`)   
    .then(response => response.json())
    .then (data => newItem(data))  
     
  }

  function newItem(data){
    setPlates([...plates,data])  
    setPrice(price - data.price) 
  }

  return (
    <div className="app">
      <SushiContainer sushi = {sushi} addPlate={addPlate}/> 
      <Table price={price} plates = {plates}/>
    </div>
  );
}

export default App;
