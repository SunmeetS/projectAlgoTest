import logo from './logo.svg';
import './App.css';
import { AddLeg } from './components/AddLeg';
import { LegDetails } from './components/LegDetails';
import { createContext, useContext, useRef, useState } from 'react';
import { Leg } from './components/Leg';

export const legDetailsContext = createContext()

function App() {

  let [display, setDisplay] = useState("none")
  let [information, setInformation] = useState([])
  let [legArr, setLegArr] = useState([])


  let keys = [
    "totalLot",
    "position",
    "optionTypeVal",
    "expiryVal",
    "strikeCriteriaVal",
    "lowerRangeVal",
    "upperRangeVal"]


  console.log("information: " + information)

  let legObj = {}

  for (let i = 0; i < keys.length; i++) {
    legObj[keys[i]] = information[i]
  }

  console.log("obj: ", legObj)


    console.log("legArr : ",legArr)

  return (
    <div className="App">
      <legDetailsContext.Provider value={{ display, setDisplay, information, setInformation, legObj, legArr, setLegArr }}>
        <AddLeg />
        <LegDetails />
      </legDetailsContext.Provider>
      {
        legArr.map((ele) => {
          return <div>
            {ele}
          </div>
        })
      }
    </div>
  );
}

export default App;
