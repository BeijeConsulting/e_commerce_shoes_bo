import React from "react";
import Form from "../components/hookComponents/form/Form";

export default function AddProduct(props) {
  // chiamata get per rpendere oggetto base product

  // salvi oggetto base in const

  const objFromGet = {};

  return (
    <div>
      <h1>Add product</h1>
      <Form obj={objFromGet} />
    </div>
  );
}
