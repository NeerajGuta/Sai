import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

const LBookedDetails = () => {
  const agentDetails = sessionStorage.getItem("user");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10);
  const [bookings, setBooking] = useState([]);

  const [allbooked, setAllBooked] = useState([]);
  // console.log('allboked', allbooked);
  // const Allbookedseat = allbooked
  //   ?.filter(ele => ele?.Bookingdate === date1)
  //   ?.map(item => item?.SeatNo);

  const Allbooking = async (item) => {
    try {
      let res = await axios.get(
        "http://saisathish.info/api/Admin/getAllBooking/"
      );
      if (res.status === 200) {
        setAllBooked(
          res.data.success?.filter(
            (val) => val.userId?._id == JSON.parse(agentDetails)?._id
          )
        );
      }
    } catch (error) {
      setAllBooked([]);
    }
  };

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      Allbooking();
    }
  }, [agentDetails]);

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = allbooked.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container mt-3" style={{ backgroundColor: "white" }}>
        <div className="row ">
          <div className="col-md-12 text-center">
            <h3 style={{ color: "#3DD065" }}> Booked Yatra Details</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <Table responsive bordered style={{ width: "max-content" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Partner ID</th>
                  <th>Bussiness Name</th>
                  <th>Email</th>
                  <th>Contact Person</th>
                  <th>Contact Number</th>
                  <th>Package Type</th>
                  <th>Start Date</th>
                  <th>Seats allotted</th>
                  <th>Total Amount</th>
                  <th>Received Amount</th>
                  <th>Payment Id</th>
                  <th>Payment Date</th>
                  <th>Passengers Details</th>
                  {/* <th>Status</th> */}
                </tr>
              </thead>

              <tbody>
                {currentBookings?.map((item, i) => {
                  const data = `${item?.SeatNo}`;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item?.userId?.partnerId}</td>
                      <td>{item?.userId?.businessname}</td>
                      <td>{item?.email}</td>
                      <td>{item?.name}</td>
                      <td>{item?.mobile}</td>
                      <td>
                        {item?.bookedFor === "bookedforbus"
                          ? "Bus Package"
                          : "Air Package"}
                      </td>
                      <td>{item?.Bookingdate}</td>
                      <td>{data}</td>

                      <td>₹{item?.amount}</td>
                      <td>₹{item?.amount}</td>
                      <td>{item?.PayId}</td>
                      <td>{moment(item?.createdAt).format("lll")}</td>
                      <td>
                        <AiFillEye
                          style={{ fontSize: "20px", color: "blue" }}
                          onClick={() => {
                            // getUserId(item?._id);
                            handleShow(item?._id);
                            setBooking(item);
                          }}
                        />
                      </td>
                      {/* <td>Pending</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="pagination d-flex justify-content-end mt-3 mb-3">
              {[...Array(Math.ceil(allbooked.length / bookingsPerPage))].map(
                (_, index) => (
                  <Button
                    style={{ marginRight: "5px" }}
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        <h4 style={{ textAlign: "center" }}>Passenger Details</h4>
        <Modal.Body>
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>
                  <div style={{ width: "150px" }}>Contact Person</div>
                </th>
                <th>
                  <div>Customer Details</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Email Id</div>
                </th>
                <th>
                  <div>Amount</div>
                </th>
                <th>
                  <div style={{ width: "120px" }}>Status</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>{bookings?.name}</td>
                <td>
                  <div>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>BookingId</th>
                          <th style={{ width: "120px" }}>Name</th>
                          <th>
                            <div style={{ width: "120px" }}>Seat No</div>
                          </th>
                          <th>Age</th>
                          <th>Gender</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings?.customerdetails?.map((ele) => {
                          return (
                            <tr key={ele?._id}>
                              <td>{ele?._id}</td>
                              <td>{ele?.name}</td>
                              <td>{ele?.seatno}</td>
                              <td>{ele?.age}</td>
                              <td>{ele?.gender}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </td>

                <td>{bookings?.email}</td>
                <td>{bookings?.Total}</td>
                <td>{bookings?.Status}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LBookedDetails;
