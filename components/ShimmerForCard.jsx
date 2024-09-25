import React from "react";

import "../assets/ShimmerForCard.css";

const ShimmerForCard = () => {
  // --> fill(value, start 0 , end)
  // --> It will gives us one array in that there is 10 indexes and the value is 1 in all
  // const arr = new Array(10).fill(1,0,10)
  const arr = Array.from({ length: 10 });
  // console.log(arr)

  return (
    <div>
      <div className="mainCard">
        {arr.map((ele,i)=>(
          <div key={i} className="shimmerCard">
            <div className="cardImg"></div>
            <div className="cardContent">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default ShimmerForCard;
