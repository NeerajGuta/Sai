import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Customerdetails({}) {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  const [alluser, setAlluser] = useState([]);
  const getAlluser = async () => {
    let res = await axios.get("http://saisathish.info/api/User/getAllUser");
    if (res.status === 200) {
      setAlluser(res.data.success);
    }
  };

  useEffect(() => {
    getAlluser();
  }, []);

  const Actions = async (id, isBlock) => {
    try {
      const config = {
        url: "/makeBlockUnblockUser",
        method: "put",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "application/json" },
        data: {
          id: id,
          isBlock: isBlock,
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        console.log(res.data.success);
        alert(`${res.data.success}`);
        getAlluser();
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="customerhead p-2">
      <h2 className="header-c ">Customer Details</h2>

      <div className="row p-2 align-items-end justify-content-around mb-3">
        <div className="col-lg-2 " style={{ width: "fit-content" }}>
          <label>Select :</label>
          <Form.Select
            aria-label="Default select example"
            style={{ height: "35px" }}
          >
            <option value="1">5</option>
            <option value="2">10</option>
            <option value="3">15</option>
          </Form.Select>
        </div>

        <div className="col-lg-2">
          <label>From :</label>
          <Form.Control type="date" aria-describedby="basic-addon1" />
        </div>

        <div className="col-lg-2">
          <label>To :</label>
          <Form.Control type="date" aria-describedby="basic-addon1" />
        </div>

        <div className="col-lg-2">
          <button className="btn btn-primary">Submit</button>
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
          />
        </div>
      </div>

      <div className="mb-3">
        <Table responsive bordered style={{ width: "max-content" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {alluser?.map((item, i) => {
            return (
              <tbody>
                {/* {users.map((user, index) => ( */}
                <tr>
                  <td>{i + 1}.</td>
                  <td>{item?._id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.address}</td>
                  <td>
                    {item?.isBlock == false ? (
                      <span style={{ color: "green" }}>Unblock</span>
                    ) : (
                      <span style={{ color: "red" }}>Blocked</span>
                    )}
                  </td>
                  <td>
                    {" "}
                    {item?.isBlock == false ? (
                      <button
                        onClick={() => Actions(item?._id, true)}
                        className="btn btn-danger"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={() => Actions(item?._id, false)}
                        className="btn btn-success"
                      >
                        Unblock
                      </button>
                    )}
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            );
          })}
        </Table>
      </div>

      <Pagination className="justify-content-end">{items}</Pagination>

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
            <div className="row">
              <div className="do-sear mt-2">
                <label>User ID</label>
                <input
                  type="text"
                  placeholder="ID"
                  className="vi_0"
                />
              </div>
            </div>
            <div className="row">
              <div className="do-sear mt-2">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="vi_0"
                />
              </div>
            </div>
          
          </div>

          <div className="row">
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
          </div>

          <div className="row">
            <div className="do-sear mt-2">
              <label>Address</label>
              <input
                type="text"
                min="0"
                placeholder="Address"
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

export default Customerdetails;
