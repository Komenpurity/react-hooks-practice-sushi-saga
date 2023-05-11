import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushi,setSushi] = useState([]) 

  useEffect(
      () => {
        fetch("http://localhost:3000/sushis")
        .then(response => response.json())
        .then (data => setSushi(data)) 
      },[] 
  )

  return (
    <div className="app">
      <SushiContainer sushi = {sushi}/> 
      <Table />
    </div>
  );
}

export default App;
