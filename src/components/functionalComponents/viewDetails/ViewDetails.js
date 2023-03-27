import React from "react";
import "./viewDetails.css";

function ViewDetails(props) {
  //   function mapDetails(details) {
  //     return details.map((detail, index) => {
  //       return (
  //         <div key={index}>
  //           <h2>{detail.title}</h2>
  //           <p>{detail.description}</p>
  //         </div>
  //       );
  //     });
  //   }

  const arr = props.details;
  const str = Object.entries(arr).map(([key, value]) => {
    return (
      <div className="viewDetails" key={key}>
        <p>
          <span className="key-text">{key}:</span>{" "}
          <span className="value-text">{value}</span>
        </p>
        <br />
      </div>
    );
  });
  return <div className="viewDetailsWrap">{str}</div>;
}
export default ViewDetails;
