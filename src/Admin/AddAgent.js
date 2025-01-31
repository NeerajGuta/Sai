import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
const AddAgent = () => {
  //   Row filter
  const navigate = useNavigate();
  const [itempage, setItempage] = useState(5);

  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //approved or refused agents
  const [Approved, setApproved] = useState(false);
  // const [NotApproved, setNotApproved] = useState(true);

  const [user, setuser] = useState([]);
  const [nochange, setNochange] = useState([]);
  // console.log(user);
  const getAlluser = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/User/getAllUser")
        .then((res) => {
          if (res.status === 200) {
            setuser(res.data.success);
            setNochange(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlluser();
  }, []);
  console.log(user, "user");

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
        // console.log(res.data.success);
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

  const approveUserByAdmin = async (id) => {
    try {
      const config = {
        url: "/approveuser/" + id,
        method: "put",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "application/json" },
      };

      let res = await axios(config);

      if (res.status === 200) {
        // console.log(res.data.success);
        alert(`Approved the Booking agent Successfully...`);
        getAlluser();
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [removeagent, setremoveagent] = useState("");
  const AgentDelete = async () => {
    try {
      await axios
        .delete(
          "http://saisathish.info/api/User/deleteUser/" + removeagent?._id
        )
        .then((res) => {
          if (res.status === 200) {
            alert("AgentDelete Successfully !!!");
            window.location.reload(true);
          }
        });
    } catch (error) {
      console.log(error);
      alert("Somthing went wrong !!!");
    }
  };

  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value !== "") {
      setSearch(e.target.value);
      const filterTable = nochange.filter((o) =>
        Object.keys(o).some(
          (k) =>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase()) ||
            (k === "cbmID" &&
              String(o[k]?.cbmId)
                .toLowerCase()
                .includes(e.target.value.toLowerCase()))
        )
      );

      // console.log("Filtered Table:", filterTable);

      setuser([...filterTable]);
    } else {
      setSearch(e.target.value);
      setuser([...nochange]);
    }
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = user
    ?.filter((val) => val.isApproved === true)
    ?.slice(visitedPage, visitedPage + productPerPage);
  const displayPage1 = user
    ?.filter((val) => val.isApproved === false)
    .slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(user.length / productPerPage);

  // Date filter

  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = nochange.filter((item) => {
      const itemDate = new Date(item?.createdAt);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setuser([...filteredData]);
  };

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Agent List</h2>
          {/* <button
            className="btn-primary btn"
            onClick={() => {
              navigate("/new-agents");
            }}
            style={{ cursor: "pointer" }}
          >
            Add Agent
          </button> */}
        </div>
        <div className="row p-2 align-items-end justify-content-around mb-3">
          <div className="col-lg-2 " style={{ width: "fit-content" }}>
            <label>Select :</label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "35px", cursor: "pointer" }}
              value={itempage}
              onChange={(e) => setItempage(Number(e.target.value))}
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

        <div className="d-flex justify-content-end m-2">
          <button
            className="btn btn-primary"
            style={{ marginRight: "3px" }}
            onClick={() => setApproved(true)}
          >
            Approved
          </button>
          <button
            className="btn btn-primary"
            style={{ marginRight: "3px" }}
            onClick={() => setApproved(false)}
          >
            Not Approved
          </button>
        </div>

        {Approved ? (
          <div className="mb-3">
            <Table responsive bordered style={{ width: "max-content" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>CBM ID</th>
                  <th>Central Branch Manager</th>
                  <th>Agent ID</th>
                  <th>Register Date</th>
                  <th>Traveler / Bussiness Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Booking Details</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {displayPage
                  ?.filter((val) => val.isApproved === true)
                  ?.slice(0, itempage)
                  ?.map((item, index) => {
                    return (
                      <tr key={item?._id}>
                        <td>{index + 1}</td>
                        <td>{item?.cbmID?.cbmId}</td>
                        <td>{item?.cbmname}</td>
                        <td>{item?.partnerId}</td>
                        <td>{moment(item?.createdAt).format("ll")}</td>
                        <td>
                          <div style={{ width: "155px" }}>
                            {item?.businessname}
                          </div>
                        </td>
                        <td>
                          <div style={{ width: "155px" }}>{item?.name}</div>
                        </td>
                        <td>{item?.email}</td>
                        <td> +91{item.phone}</td>

                        <td>
                          <div>
                            <Link to={"/all-information/" + item?._id}>
                              <AiFillEye
                                style={{
                                  cursor: "pointer",
                                  color: "blue",
                                  fontSize: "20px",
                                }}
                              />
                            </Link>
                          </div>
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            {item?.isBlock === true ? (
                              <span style={{ color: "red" }}>Blocked</span>
                            ) : (
                              <>
                                {" "}
                                <span style={{ color: "green" }}> Unblock</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            {item?.isBlock === false ? (
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  Actions(item?._id, true);
                                }}
                              >
                                Block
                              </button>
                            ) : (
                              <>
                                {" "}
                                <button
                                  className="btn btn-success"
                                  onClick={() => {
                                    Actions(item?._id, false);
                                  }}
                                >
                                  Unblock
                                </button>
                                <Button
                                  onClick={() => {
                                    handleShow();
                                    setremoveagent(item);
                                  }}
                                >
                                  <AiFillDelete style={{ color: "red" }} />
                                </Button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {/* ))} */}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="mb-3">
            <Table responsive bordered style={{ width: "max-content" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>CBM ID</th>
                  <th>Central Branch Manager</th>
                  <th>Agent ID</th>
                  <th>Register Date</th>
                  <th>Traveler / Bussiness Name</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {displayPage1
                  ?.filter((val) => val.isApproved === false)
                  ?.slice(0, itempage)
                  ?.map((item, index) => {
                    return (
                      <tr key={item?._id}>
                        <td>{index + 1}</td>
                        <td>{item?.cbmID?.cbmId}</td>
                        <td>{item?.cbmname}</td>
                        <td>{item?.partnerId}</td>
                        <td>{moment(item?.createdAt).format("ll")}</td>
                        <td>
                          <div style={{ width: "155px" }}>
                            {item?.businessname}
                          </div>
                        </td>
                        <td>
                          <div style={{ width: "155px" }}>{item?.name}</div>
                        </td>
                        <td>{item?.email}</td>
                        <td> +91{item.phone}</td>

                        <td>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-primary"
                              style={{ marginRight: "3px" }}
                              onClick={() => approveUserByAdmin(item?._id)}
                            >
                              Approved
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                {/* ))} */}
              </tbody>
            </Table>
          </div>
        )}

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
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Delete Agent</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete data !!!</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={AgentDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default AddAgent;
