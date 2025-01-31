import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";
import { useLocation, useParams } from "react-router-dom";

const PassangerDetails = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const { id } = useParams();
  // console.log(id);
  const [bookings, setBooking] = useState({});

  useEffect(() => {
    const getUserId = async () => {
      try {
        await axios
          .get("http://saisathish.info/api/Admin/getBookingBy/" + id)
          .then((res) => {
            if ((res.status = 200)) {
              setBooking(res.data.success);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    getUserId();
  }, []);
  // useEffect(() => {
  //   const getBooking = async () => {
  //     try {
  //       await axios
  //         .get("http://saisathish.info/api/Admin/getBookingBy/" + id)
  //         .then((res) => {
  //           if (res.status == 200) {
  //             setBooking(res.data.success);
  //             console.log(res.data.success);
  //           }
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBooking();
  // }, []);

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">{bookings?.name}</h2>
          <div
            className="input-group col-lg-2"
            style={{ width: "auto", height: "35px", marginTop: "20px" }}
          >
            <Button variant="danger">Export Excel</Button>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>
                  <div style={{ width: "150px" }}>Conatct Person</div>
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
        </div>

        {/* Add Package modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">Add Pick Up List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Package Type</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                >
                  <option value="">Select Package Type</option>
                  <option value="Bus Package">Bus Package</option>
                  <option value="Air Package">Air Package</option>
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Package Name</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                >
                  <option value="">Select Package Name</option>
                  <option value="Bus Package">Bus Package</option>
                  <option value="Air Package">Air Package</option>
                </Form.Select>
              </div>
            </div>

            <div className="do-sear mt-2">
              <label>Pick Up Location</label>
              <input
                type="text"
                placeholder="Enter Passenger Pick Up Location"
                className="vi_0"
              />
            </div>

            <Button
              className="mb-2 mt-3"
              variant="primary"
              style={{ float: "right" }}
            >
              Add
            </Button>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Start Date</th>
                    <th>Return Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div>
                        <AiFillDelete
                          style={{ color: "red", cursor: "pointer" }}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button className="mx-2" variant="primary">
                Save
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        {/* Edit Package modal */}
        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Edit Trip Date List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="row">
                <div className="do-sear mt-2">
                  <label>Package Name</label>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ height: "35px" }}
                    className="vi_0"
                  >
                    <option value="">Select Package</option>
                    <option value="Bus Package">Bus Package</option>
                    <option value="Air Package">Air Package</option>
                  </Form.Select>
                </div>
              </div>
            </div>

            <div className="do-sear mt-2">
              <label>Pick Up Location</label>
              <input
                type="date"
                placeholder=" Enter Your Pick Up Location"
                className="vi_0"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default PassangerDetails;
