import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function LPaymentOrder() {
  const agentDetails = sessionStorage.getItem("user");
  let { state } = useLocation();
  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first!!!");
    } else {
      state = JSON.parse(state);
      document.getElementById("payment-id-1").appendChild(state?.form);
      state?.form.submit();
      state?.form.remove();
    }
  }, [agentDetails]);
  return (
    <div id="payment-id-1">
      <div></div>
    </div>
  );
}
