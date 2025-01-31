import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LPaymentStatus() {
  const navigate = useNavigate();
  let jsonData;
  const agentDetails = sessionStorage.getItem("user");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  jsonData = JSON.parse(urlParams.get("data"));

  if (JSON.parse(jsonData)?.body?.resultInfo?.resultStatus == "TXN_FAILURE") {
    return alert("Payment Failed!!! No Order is Placed! Please try again...");
  } else if (
    JSON.parse(jsonData)?.body?.resultInfo?.resultStatus == "TXN_SUCCESS"
  ) {
    const data1 = JSON.parse(sessionStorage.getItem("demostore"));
    if (Object.keys(jsonData).length && data1) {
      const placeorder = async () => {
        let user = JSON.parse(agentDetails);

        sessionStorage.removeItem("demostore");
        data1["PaymentId"] = JSON.parse(jsonData)?.body?.txnId;
        data1["customerorderdatetime"] = JSON.parse(jsonData)?.body?.txnDate;
        console.log(data1, "KKKKKKKKKKKKKKK");

        try {
          const config = {
            url: "/orderproduct",
            method: "post",
            baseURL: "http://saisathish.info/api/Admin",
            headers: { "content-type": "application/json" },
            data: data1,
          };
          await axios(config).then(function (res) {
            if ((res.status = 200)) {
              console.log("success");
              alert("Order Placed Successfully");
              // navigate("/LoginOrderHistroy");
            }
          });
        } catch (error) {
          console.log(error);
          alert("Unable to place Order");
        }
      };
      placeorder();
    }
  }
  return (
    <div>
      <div className="mt-4">
        <div className="d-flex justify-content-center">
          <div>
            <div className="d-flex justify-content-center">
              <img
                style={{ width: "35%" }}
                src="/img/verified.gif"
                alt="verified"
              />
            </div>
            <div className="d-flex justify-content-center">
              <b style={{ fontSize: "22px" }}>Thank You!</b>
            </div>

            <div className="d-flex justify-content-center">
              <p style={{ fontSize: "18px" }}>Your Order is Successful...</p>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <a href="/LoginOrderHistroy">
                <Button>Order History</Button>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
