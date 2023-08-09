import React, { useState, useEffect, useLayoutEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// function Arrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'black' }}
//       onClick={onClick}
//     />
//   );
// }

function Description() {
  const [cards, setCards] = useState([
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((response) => response.json())
      .then((data) => {
        // console.log("cards data",data)
        setCards(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <AwesomeSlider className="h-[50vh] mt-90px">
      {
        cards.map((value) => {
          return (
            <div key={value.id} className="flex-1 " >

              <div className="w-full  cursor-pointer" >
                <img
                  src={value.cover}
                  className="w-100 h-200em"
                  style={{ position: "absolute", zIndex: "0"}}
                />
              </div>
                
              <div className="block"  >
                  <h3
                    className=" text-[80px] text-left "   
                    style={{ position: "relative", zIndex: "1" , color:"#ffff"}}                 
                  >
                    {value.title}
                  </h3>
              </div>

            </div>
          
          );
        })}
    </AwesomeSlider>
  );
}

export default Description;
