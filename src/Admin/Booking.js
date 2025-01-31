import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Pagination from "react-bootstrap/Pagination";
import moment from "moment";

function Booking() {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [allbooking, setAllbooking] = useState([]);
  const [ChangesAllbooking, setChangesAllbooking] = useState([]);
  const Allbookedseat = allbooking?.map((item) => item?.SeatNo);
  const getAllbooking = async () => {
    let res = await axios.get("http://saisathish.info/api/Admin/getAllBooking");
    if (res.status === 200) {
      setAllbooking(res.data.success);
      setChangesAllbooking(res.data.success);
    }
  };

  console.log("allbooking", allbooking);

  useEffect(() => {
    getAllbooking();
  }, []);
  //  console.log("allbooking", allbooking);
  const deleteOne = async (_id) => {
    let res = await axios.delete(
      "http://saisathish.info/api/Admin/deletebooking"
    );
    if (res.status === 200) {
      alert("Successfully Deleted");
    }
  };

  const deletealladdcart = async () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete all bookings?"
    );

    if (shouldDelete) {
      try {
        const res = await axios.delete(
          "http://saisathish.info/api/Admin/deleteAllbooking"
        );
        if (res.status === 200) {
          alert("Successfully All Deleted");
        }
      } catch (error) {
        console.error("Error deleting all bookings:", error);
      }
    }
  };

  const totalBookedSeats = Allbookedseat.reduce(
    (total, seatArray) => total + seatArray.length,
    0
  );
  const [filteredPkg, setfilteredPkg] = useState("");
  const [filteredDate, setfilteredDate] = useState("");
  const [totalSeatsFiltered, settotalSeatsFiltered] = useState(44);
  const [bookedSeatsFiltered, setbookedSeatsFiltered] = useState(0);
  const [AvailSeatsFiltered, setAvailSeatsFiltered] = useState(0);

  let filterTableForBookings = [];
  useEffect(() => {
    filterTableForBookings = ChangesAllbooking?.filter(
      (item) =>
        item?.bookedFor == filteredPkg && item?.Bookingdate == filteredDate
    );

    let count = 0;
    filterTableForBookings?.map((item) => {
      count += item?.SeatNo?.length;
    });
    setbookedSeatsFiltered(count);
    setAvailSeatsFiltered(44 - count);
  }, [filteredPkg, filteredDate]);
  // console.log('Total Booked Seats:', totalBookedSeats);
  const total = 44 - totalBookedSeats;

  const [itempage, setItempage] = useState(5);

  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = allbooking.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setAllbooking([...filterTable]);
    } else {
      setSearch(e.target.value);
      setAllbooking([...allbooking]);
    }
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = allbooking.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(allbooking.length / productPerPage);

  // Date filter

  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = ChangesAllbooking.filter((item) => {
      const itemDate = new Date(item?.Bookingdate);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setAllbooking([...filteredData]);
  };

  useEffect(() => {
    setAllbooking([...allbooking]);
  }, [startDate, endDate]);

  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Booking History</h2>
      </div>
      <div className="row p-2 align-items-end justify-content-around mb-3">
        {/* <div className="col-lg-2 " style={{ width: "fit-content" }}>
          <label>Select :</label>
          <Form.Select
            aria-label="Default select example"
            style={{ height: "35px" }}
            value={itempage}
            onChange={(e) => setItempage(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </Form.Select>
        </div> */}

        {/* <div className="col-lg-2">
          <label>Package :</label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setfilteredPkg(e.target.value)}
          >
            <option>Choose package</option>
            <option value="bookedforbus">Bus Package</option>
            <option value="bookedforflight">Air Package</option>
          </Form.Select>
        </div> */}

        <div className="col-lg-2">
          <label>From :</label>
          <Form.Control
            type="date"
            aria-describedby="basic-addon1"
            value={startDate}
            onChange={(e) => setstartDate(e.target.value)}
          />
        </div>

        <div className="col-lg-2">
          <label>To :</label>
          <Form.Control
            type="date"
            aria-describedby="basic-addon1"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
          />
        </div>

        <div className="col-lg-2">
          <button className="btn btn-primary" onClick={filterData}>
            Submit
          </button>
        </div>

        <div
          className="input-group col-lg-4"
          style={{ width: "auto", height: "35px", marginTop: "20px" }}
        >
          <span class="input-group-text" id="basic-addon1">
            <BsSearch />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-describedby="basic-addon1"
            onChange={handleFilter}
          />
        </div>
      </div>
      <div
      // className="row p-2 align-items-center mb-3"
      >
        {/* <div className="col-md-3">
          <h4
            style={{
              alignSelf: "center",
              color: "gray",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Total Seat(44)
          </h4>
        </div>
        <div className="col-md-3">
          <h4
            style={{
              alignSelf: "center",
              color: "red",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Booked Seat({totalBookedSeats})
          </h4>
        </div>
        <div className="col-md-3">
          <h4
            style={{
              alignSelf: "center",
              color: "green",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Available Seat ({total})
          </h4>
        </div> */}
        {/* <div>Seat Availability</div> */}
        <Table responsive bordered style={{ width: "max-content" }}>
          <thead>
            <tr>
              <th>Package</th>
              <th>Date</th>
              <th>Total Seats available</th>
              <th>Booked Seats</th>
              <th>Available Seats</th>
            </tr>
          </thead>

          <tbody>
            {/* {users.map((user, index) => ( */}
            <tr>
              <td>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setfilteredPkg(e.target.value)}
                >
                  <option>Choose package</option>
                  <option value="bookedforbus">Bus Package</option>
                  <option value="bookedforflight">Air Package</option>
                </Form.Select>
              </td>
              <td>
                <Form.Control
                  type="date"
                  aria-describedby="basic-addon1"
                  value={filteredDate}
                  onChange={(e) => setfilteredDate(e.target.value)}
                />
              </td>
              <td>{totalSeatsFiltered}</td>
              <td>{bookedSeatsFiltered}</td>
              <td>{AvailSeatsFiltered}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="mb-3">
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
              <th>No of Booking</th>
              <th>Total Amount</th>
              <th>Recived Amount</th>
              {/* <th>PaymentMethod</th> */}
              <th>Payment Id</th>
              <th>Payment Date</th>
              <th>Passangers Details</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          {displayPage
            ?.slice(0, itempage)
            // ?.filter((val) => val?.bookedFor == filteredPkg)
            ?.map((item, i) => {
              const data = `${item?.SeatNo}`;
              return (
                <tbody>
                  {/* {users.map((user, index) => ( */}
                  <tr>
                    <td>{i + 1}.</td>
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
                    {/* <td>{item?.returndate}</td> */}
                    {/* <td>{item?.FromArea}</td>
                  <td>{item?.destination}</td> */}
                    <td>{data}</td>

                    <td>₹{item?.amount}</td>
                    <td>₹{item?.amount}</td>
                    {/* <td>{item?.PaymentMethod}</td> */}
                    <td>{item?.PayId}</td>
                    <td>{moment(item?.createdAt).format("lll")}</td>
                    <td>
                      <a href={`/passenger-details/${item?._id}`}>
                        {" "}
                        <AiFillEye
                          style={{ fontSize: "20px", color: "blue" }}
                        />
                      </a>
                    </td>
                    <td>{item?.Status}</td>
                    <td>
                      <AiFillDelete
                        onClick={() => {
                          handleShow(item?._id);
                        }}
                        style={{ fontSize: "20px", color: "red" }}
                      />
                    </td>
                  </tr>
                  {/* ))} */}
                </tbody>
              );
            })}
        </Table>
      </div>

      <Pagination style={{ float: "right" }}>
        <Pagination.First onClick={() => setPageNumber(0)} />
        <Pagination.Prev
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 0))}
        />
        {Array.from({ length: pageCount }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index === pageNumber}
            onClick={() => setPageNumber(index)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            setPageNumber((prev) => Math.min(prev + 1, pageCount - 1))
          }
        />
        <Pagination.Last onClick={() => setPageNumber(pageCount - 1)} />
      </Pagination>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <h5 style={{ color: "red" }}>
              {" "}
              Are you sure you want to delete Booking ?
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button
              variant="danger"
              onClick={() => {
                handleClose();
              }}
            >
              Close
            </Button>
            <Button
              className="mx-2"
              variant="primary"
              onClick={() => {
                deleteOne();
                window.location.reload(true);
                handleClose();
              }}
            >
              Delete
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Booking;

// <tbody>
// {item?.customerdetails?.map(
//   (item, index) => {
//     return (
//       <tr>
//         {/* <td>{index + 1}</td> */}
//         <td>{item?._id}</td>
//         <td>{item?.name}</td>
//         <td>{item?.age}</td>
//         <td>{item?.gender}</td>
//       </tr>
//     );
//   }

// )}
// </tbody>

// const [UserName, setUserName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Mobile, setMobile] = useState("");
//   const [bookingdate, setbookingdate] = useState("");
//   const [Returndate, setReturndate] = useState("");
//   const [fromarea, setfromarea] = useState("");
//   const [Destination, setDestination] = useState("");
//   const [seatNo, setseatNo] = useState("");

//   const AddBooking = async () => {
//     try {
//       const config = {
//         url: "/booking",
//         method: "post",
//         baseURL: "http://saisathish.info/api/Admin",
//         headers: { "content-type": "multipart/form-data" },
//         data: {
//           name: UserName,
//           email: Email,
//           mobile: Mobile,
//           Bookingdate: bookingdate,
//           returndate: Returndate,
//           FromArea: fromarea,
//           destination: Destination,
//           SeatNo: seatNo,
//         },
//       };

//       let res = await axios(config);

//       if (res.status === 200) {
//         console.log(res.data.success);
//         alert("Added Product Success");
//       }
//     } catch (error) {
//       console.log("error", error.response);
//       if (error.response) {
//         alert(error.response.data.error);
//       }
//     }
//   };
