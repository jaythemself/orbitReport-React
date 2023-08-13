import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react";
import satData from "./components/satData";


function App() {
  //useState is passed satData, sat compares changes in state and setSat updates the state
  const [sat, setSat] = useState(satData);
  //uses Set method to create new array. used to create buttons, so pull out orbitType values
  //Set prevents duplicate elements. If used map without set it would create 10 buttons instead of 3
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    //update displaySats variable using filter method
    //filter similar to map (iterate through collection until finds element)
    //requires callback, newSatDisplay
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
   });
   setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
