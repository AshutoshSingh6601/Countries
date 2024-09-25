import React from "react";

import "../assets/ShimmerForCardDetail.css";

const ShimmerForCardDetail = () => {
  const arr = Array.from({ length: 8 });

  return (
    <>
      <div className="shimmerMainDetail">
        <div className="shimmerLeftDetail">
          <div className="detailImg"></div>
        </div>
        <div className="shimmerRightDetail">
          {
            arr.map((ele, i) => (<div key={i} className="shimmerRightContentDetail">
              <p></p>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShimmerForCardDetail;
