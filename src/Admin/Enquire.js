import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import moment from "moment";
function Enquire() {
  const [allenquire, setAllenquire] = useState([]);
  const getAllenquire = async () => {
    let res = await axios.get("http://saisathish.info/api/Admin/getEnquire");
    if (res.status === 200) {
      setAllenquire(res.data.Address);
    }
  };

  useEffect(() => {
    getAllenquire();
  }, []);
  // console.log(allenquire, "allenquire");

  //   Row Filter
  const [itempage, setItempage] = useState(5);

  //   DateRange Filter
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = allenquire.filter((item) => {
      const itemDate = new Date(item?.createdAt);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setAllenquire([...filteredData]);
  };

  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = allenquire.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setAllenquire([...filterTable]);
    } else {
      setSearch(e.target.value);
      setAllenquire([...allenquire]);
    }
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = allenquire.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(allenquire.length / productPerPage);
  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Enquiries</h2>
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
            <option value={15}>20</option>
            <option value={15}>25</option>
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
        <Table responsive bordered style={{ width: "-webkit-fill-available" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Agent ID</th>
              <th>Agent Name</th>
              <th>Email</th>
              <th>Phone No.</th>

              {/* <th>
                <div style={{ width: "200px" }}>Enquire </div>
              </th> */}
              <th>
                <div style={{ width: "200px" }}>Enquire</div>
              </th>
              <th>
                {" "}
                <div style={{ width: "150px" }}>Date</div>
              </th>
            </tr>
          </thead>
          {displayPage?.slice(0, itempage)?.map((item, i) => {
            return (
              <tbody>
                <tr>
                  <td>{i + 1}.</td>
                  <td>{item?.userId}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.mobile}</td>

                  {/* <td>{item?.enquiretype}</td> */}
                  <td>{item?.enquireCommenets}</td>
                  <td> {moment(item?.createdAt).format("ll")}</td>
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

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="do-sear mt-2">
              <label>User ID</label>
              <input
                type="text"
                placeholder="ID"
                className="vi_0"
              />
            </div>

            <div className="do-sear mt-2">
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="vi_0"
              />
            </div>

            <div className="do-sear mt-2">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="vi_0"
              />
            </div>

            <div className="do-sear mt-2">
              <label>Phone No</label>
              <input
                type="text"
                placeholder="Number"
                className="vi_0"
              />
            </div>

            <div className="do-sear mt-2">
              <label>Enquiry type</label>
              <input
                type="text"
                min="0"
                placeholder="enquiry"
                className="vi_1"
              />
            </div>
            <div className="do-sear mt-2">
              <label>Comments</label>
              <input
                type="text"
                min="0"
                placeholder="comment"
                className="vi_1"
              />
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default Enquire;
