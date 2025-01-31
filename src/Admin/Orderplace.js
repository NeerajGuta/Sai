import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
function Orderplace() {
  const [allorder, setAllorder] = useState([]);
  const getAllorder = async () => {
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getOrderDetails"
    );
    if (res.status === 200) {
      setAllorder(res.data.OrderList);
    }
  };

  useEffect(() => {
    getAllorder();
  }, []);
  // console.log("allbooking", allorder);

  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getDate() +
    "/ " +
    myCurrentDate.getHours() +
    ":" +
    myCurrentDate.getMinutes() +
    ":" +
    myCurrentDate.getSeconds();
  const newCurrentDate = date;

  const OutforDelivery = async (id, ArrivedStatus) => {
    try {
      const config = {
        url: "/OutforDelivery/" + id,
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          ArrivedD: id,
          ArrivedDate: newCurrentDate,
          ArrivedStatus: ArrivedStatus,
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        console.log(res.data.success);
        alert(`${res.data.success}`);
        getAllorder();
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };
  const Status = async (id, DeliveredStatus) => {
    try {
      const config = {
        url: "/DeliveredOrder/" + id,
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          id: id,
          invoicedate: newCurrentDate,
          DeliveredStatus: DeliveredStatus,
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        console.log(res.data.success);
        alert(`${res.data.success}`);
        getAllorder();
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [itempage, setItempage] = useState(5);
  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = allorder.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setAllorder([...filterTable]);
    } else {
      setSearch(e.target.value);
      setAllorder([...allorder]);
    }
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = allorder.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(allorder.length / productPerPage);

  // Date filter

  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = allorder.filter((item) => {
      const itemDate = new Date(item?.createdAt);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setAllorder([...filteredData]);
  };

  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Order Details</h2>
      </div>

      <div className="row p-2 align-items-end justify-content-around mb-3">
        <div className="col-lg-2 " style={{ width: "fit-content" }}>
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
        </div>

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

      <div className="mb-3">
        <Table responsive bordered style={{ width: "max-content" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Order date</th>
              {/* <th>Delivery date</th> */}
              <th>ProductName</th>
              <th>Address</th>
              {/* <th>Customer Details</th> */}
              <th>Total</th>
              <th>PayId</th>
              <th>Order Date </th>
              <th>Status</th>
              <th>Actions </th>
            </tr>
          </thead>
          {displayPage?.slice(0, itempage).map((item, i) => {
            const formattedDate = moment(item?.customerorderdatetime).format(
              "DD/MM/YYYY"
            );
            return (
              <tbody>
                {/* {users.map((user, index) => ( */}
                <tr>
                  <td>{i + 1}.</td>
                  <td>{item?._id}</td>

                  {/* <td>
                  {item.allproduct.map((items) => items.productId.productName)}
                </td> */}
                  <td>{item?.FName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.Phno}</td>
                  <td>{formattedDate}</td>
                  {/* <td>{item?.deliverydate}</td> */}
                  <td>
                    {item?.allproduct?.map(
                      (item) => item?.productId?.productName
                    )}
                  </td>
                  <td>
                    {item?.House},{item?.Area},{item?.Landmark},{item?.City},
                    {item?.State}
                  </td>
                  {/* <td>Customer Details</td> */}
                  <td>₹{item?.Totalamount}</td>
                  <td>{item?.PaymentId}</td>
                  <td> {moment(item?.createdAt).format("ll")}</td>

                  <td>
                    {item?.DeliveredStatus == false ? (
                      <span style={{ color: "red" }}>Pending</span>
                    ) : (
                      <span style={{ color: "green" }}>Deliverd</span>
                    )}
                  </td>
                  <td>
                    <div>
                      {/* <Form.Select aria-label="Default select example">
                        <option value="1">Pending</option>
                        <option value="2">Order Confirmed</option>
                        <option value="3">Out For Delivery</option>
                        <option value="3">Deliverd</option>
                      </Form.Select> */}
                    </div>
                    {item?.DeliveredStatus == false ? (
                      <button
                        onClick={() => Status(item?._id, true)}
                        className="btn btn-danger"
                      >
                        Complete
                      </button>
                    ) : (
                      <button
                        // onClick={() => Status(item?._id, false)}
                        className="btn btn-success"
                      >
                        Completed
                      </button>
                    )}
                  </td>
                </tr>
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
    </div>
  );
}

export default Orderplace;
