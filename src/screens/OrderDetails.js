import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailOrder } from "../services/servicesOrders";

function OrderDetails() {
  const [state, setState] = useState({
    order: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getDetailOrder(id);
      console.log("RESPONSE:", response.data);
      setState({ ...state, order: response.data });
    }
    getResources();
  }, []);

  return <div>{state.order}</div>;
}

export default OrderDetails;
