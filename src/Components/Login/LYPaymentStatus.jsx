import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LYPaymentStatus() {
  const navigate = useNavigate();
  let jsonData;
  const agentDetails = sessionStorage.getItem("user");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  jsonData = JSON.parse(urlParams.get("data"));

  if (JSON.parse(jsonData)?.body?.resultInfo?.resultStatus == "TXN_FAILURE") {
    return alert("Payment Failed!!! Booking not done! Please try again...");
  } else if (
    JSON.parse(jsonData)?.body?.resultInfo?.resultStatus == "TXN_SUCCESS"
  ) {
    const data1 = JSON.parse(sessionStorage.getItem("demoYatraB"));
    const data2 = JSON.parse(sessionStorage.getItem("demoMailYatraB"));
    if (Object.keys(jsonData).length && data1 && data2) {
      const placeorder = async () => {
        let user = JSON.parse(agentDetails);

        sessionStorage.removeItem("demoYatraB");
        sessionStorage.removeItem("demoMailYatraB");
        data1["PayId"] = JSON.parse(jsonData)?.body?.txnId;
        // data1["customerorderdatetime"] = JSON.parse(jsonData)?.body?.txnDate;
        console.log(data1, "KKKKKKKKKKKKKKK");
        try {
          const config = {
            url: "/booking",
            method: "post",
            baseURL: "http://saisathish.info/api/Admin",
            headers: { "content-type": "application/json" },
            data: data1,
          };
          console.log("idhar chala", config);

          await axios(config)
            .then(function (res) {
              if ((res.status = 200)) {
                console.log("success");
                alert("Booking  Successfully");
                SendmailB();
                // navigate("/LoginBookedDetails");
              }
            })
            .catch((error) => {
              console.log("mai udhar chala", error);
            });
        } catch (error) {
          console.log(error);
          alert("Unable to Booking");
        }
      };
      placeorder();
      const SendmailB = async () => {
        let user = JSON.parse(agentDetails);
        try {
          const config = {
            url: "/sendMailBookedDetails",
            method: "post",
            baseURL: "http://saisathish.info/api/User",
            header: { "content-type": "application/Json" },
            data: data2,
          };
          let res = await axios(config);
          if (res.status == 200) {
            alert("Mail Sent Successfully");
          }
        } catch (error) {
          console.log(error, "error");
        }
      };
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
              <p style={{ fontSize: "18px" }}>
                Bus Tickets are booked successfully...
              </p>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <a href="/LoginBookedDetails">
                <Button>Booked Details</Button>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
