import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {

  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {

        setColorList(res.data)
        
      })
      .catch(err => console.log(err.response))

  }, [])

  return (
    <>
    {console.log('colorList from bubblepage', colorList)}
      {/* <button onClick={() => localStorage.clear()}>Sign Out</button> */}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      
    </>
  );
};

export default BubblePage;
