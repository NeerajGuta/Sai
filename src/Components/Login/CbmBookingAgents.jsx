import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEye } from "react-icons/ai";

export default function CbmBookingAgents() {
  const navigate = useNavigate();
  const cbmdetails = sessionStorage.getItem("CBMData");
  const [itempage, setItempage] = useState(5);
  const [View, setView] = useState({});
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Approved, setApproved] = useState(true);

  const [show1, setShow1] = useState();
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //   profile image
  const [show2, setShow2] = useState();
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //   gst doc image
  const [show3, setShow3] = useState();
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  //   pan doc image
  const [show4, setShow4] = useState();
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  //   aadhar doc image
  const [show5, setShow5] = useState();
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  //   shop image
  const [show6, setShow6] = useState();
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  //   update Agent
  const [show7, setShow7] = useState();
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  const [user, setuser] = useState([]);
  const [nochange, setNochange] = useState([]);
  // console.log(user);
  const getAlluser = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/User/getAllUser")
        .then((res) => {
          if (res.status === 200) {
            setuser(
              res.data.success?.filter(
                (val) => val.cbmID._id == JSON.parse(cbmdetails)._id
              )
            );
            setNochange(
              res.data.success?.filter(
                (val) => val.cbmID._id == JSON.parse(cbmdetails)._id
              )
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (cbmdetails) {
      getAlluser();
    } else {
      window.location.assign("/cbmlogin");
      return alert("Please Login first");
    }
  }, [cbmdetails]);
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
  const displayPage = user.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(displayPage.length / productPerPage);

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

  const [businessname, setBusinessname] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddres2] = useState("");
  const [gstnumber, setGstnumber] = useState("");
  const [gstdocument, setGstdocument] = useState("");
  const [agentprofile, setAgentprofile] = useState("");
  const [aadhardocument, setAadhardocument] = useState([]);
  const handleFileChangeaadhar = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setAadhardocument(selectedFiles);
  };

  const [pandocument, setPandocument] = useState([]);
  const handleFileChangepandocument = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setPandocument(selectedFiles);
  };
  const [shopimages, setShopimages] = useState([]);
  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setShopimages(selectedFiles);
  };
  const [bankname, setBankname] = useState("");
  const [branchname, setBranchname] = useState("");
  const [ifsccode, setIfsccode] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [commissionamount, setCommissionamount] = useState("");

  const updateAgent = async () => {
    try {
      let config = {
        url: "/UpdateUser",
        method: "put",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "multipart/form-data" },
        data: {
          id: View?._id,
          businessname: businessname,
          name: name,
          phone: number,
          email: email,
          address: address,
          gstnumber: gstnumber,
          aadhardocument: aadhardocument,
          address2: address2,
          password: password,
          gstdocument: gstdocument,
          pandocument: pandocument,
          shopimages: shopimages,
          bankname: bankname,
          accountnumber: accountnumber,
          ifscCode: ifsccode,
          branchname: branchname,
          commissionamount: commissionamount,
          agentprofile: agentprofile,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        // console.log(res.data.success);
        window.location.reload(true);
        alert("Update successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  console.log(
    "display1 Page: ",
    JSON.parse(cbmdetails)._id,
    user?.filter((val) => val.cbmID._id == JSON.parse(cbmdetails)._id)
  );
  return (
    <div>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Agent List</h2>
          <button
            className="btn-primary btn"
            onClick={() => {
              navigate("/new-agents-cbm");
            }}
            style={{ cursor: "pointer" }}
          >
            Add Agent
          </button>
        </div>
        <div className="row p-2 align-items-end justify-content-around mb-3">
          <div className="col-lg-2 firse" style={{ width: "fit-content" }}>
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
            <button className="btn btn-primary gzv" onClick={filterData}>
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
                            {/* <Link to={"/all-information/" + item?._id}> */}
                            <AiFillEye
                              style={{
                                cursor: "pointer",
                                color: "blue",
                                fontSize: "20px",
                              }}
                              onClick={() => {
                                setView(item);
                                handleShow1();
                              }}
                            />
                            {/* </Link> */}
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
                  <th>Booking Details</th>
                  {/* <th>Status</th>
                  <th>Action</th> */}
                </tr>
              </thead>

              <tbody>
                {displayPage
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
                          <div>
                            {/* <Link to={"/all-information/" + item?._id}> */}
                            <AiFillEye
                              style={{
                                cursor: "pointer",
                                color: "blue",
                                fontSize: "20px",
                              }}
                              onClick={() => {
                                setView(item);
                                handleShow1();
                              }}
                            />
                            {/* </Link> */}
                          </div>
                        </td>

                        {/* <td>
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
                        </td> */}
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

        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">
              Booking Agent Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table responsive>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Booking Agent Id</td>
                  <td>{View?.partnerId}</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Name</td>
                  <td>{View?.name}</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Phone Number</td>
                  <td>{View?.phone}</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Email</td>
                  <td>{View?.email}</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Address 1</td>
                  <td>{View?.address}</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Address 2</td>
                  <td>{View?.address2}</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Bank Name</td>
                  <td>{View?.bankname}</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Account Number</td>
                  <td>{View?.accountnumber}</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>IFSC Code</td>
                  <td>{View?.ifscCode}</td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>Branch Name</td>
                  <td>{View?.branchname}</td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>Commission Amount</td>
                  <td>{View?.commissionamount}</td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>GST Number</td>
                  <td>{View?.gstnumber ? View?.gstnumber : <>--/--</>}</td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>Agent Profile</td>
                  <td>
                    <AiFillEye
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        handleShow2();
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td>GST Document</td>
                  <td>
                    {View?.gstdocument ? (
                      <AiFillEye
                        style={{
                          cursor: "pointer",
                          color: "blue",
                          fontSize: "20px",
                        }}
                        onClick={() => {
                          handleShow3();
                        }}
                      />
                    ) : (
                      <>--/--</>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>15.</td>
                  <td>Pan Document</td>
                  <td>
                    <AiFillEye
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        handleShow4();
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>16.</td>
                  <td>Aadhar Document</td>
                  <td>
                    <AiFillEye
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        handleShow5();
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>17.</td>
                  <td>Shop Images</td>
                  <td>
                    <AiFillEye
                      style={{
                        cursor: "pointer",
                        color: "blue",
                        fontSize: "20px",
                      }}
                      onClick={() => {
                        handleShow6();
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleShow7}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show2}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">
              Booking Agent profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <a
                href={`http://saisathish.info/Product/${View?.agentprofile}`}
                target="_blank"
              >
                <img
                  src={`http://saisathish.info/Product/${View?.agentprofile}`}
                  alt="profile"
                  style={{ width: "72vh" }}
                />
              </a>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show3}
          onHide={handleClose3}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">GST Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <a
                href={`http://saisathish.info/Product/${View?.gstdocument}`}
                target="_blank"
              >
                <img
                  src={`http://saisathish.info/Product/${View?.gstdocument}`}
                  alt="profile"
                  style={{ width: "72vh" }}
                />
              </a>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show4}
          onHide={handleClose4}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Pan Card Document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {View?.pandocument?.map((item, index) => {
                return (
                  <div>
                    <a
                      key={item?._id}
                      href={`http://saisathish.info/Product/${item}`}
                      target="_blank"
                    >
                      <img
                        src={`http://saisathish.info/Product/${item}`}
                        alt="shop_images"
                        style={{
                          width: "72vh",
                          marginTop: "10px",
                        }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show5}
          onHide={handleClose5}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Aadhar document</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {View?.aadhardocument?.map((item, index) => {
                return (
                  <div>
                    <a
                      key={item?._id}
                      href={`http://saisathish.info/Product/${item}`}
                      target="_blank"
                    >
                      <img
                        src={`http://saisathish.info/Product/${item}`}
                        alt="shop_images"
                        style={{
                          width: "72vh",
                          marginTop: "10px",
                        }}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={show6}
          onHide={handleClose6}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-danger">Shop Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {View?.shopimages?.map((item, index) => {
                return (
                  <a
                    key={item?._id}
                    href={`http://saisathish.info/Product/${item}`}
                    target="_blank"
                  >
                    <img
                      src={`http://saisathish.info/Product/${item}`}
                      alt="shop_images"
                      style={{
                        width: "72vh",
                        marginTop: "10px",
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>

        {/* update agent */}
        <Modal show={show7} onHide={handleClose7}>
          <Modal.Header closeButton>
            <Modal.Title>Update Agent</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Business Name</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.businessname}
                className="vi_0 mb-2"
                value={businessname}
                onChange={(e) => {
                  setBusinessname(e.target.value);
                }}
              />
            </div>
            <label>Name</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.name}
                className="vi_0 mb-2"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <label>Phone Number</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.phone}
                className="vi_0 mb-2"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <label>Email </label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.email}
                className="vi_0 mb-2"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <label>Address 1</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.address}
                className="vi_0 mb-2"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <label>Address 2</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.address2}
                className="vi_0 mb-2"
                value={address2}
                onChange={(e) => {
                  setAddres2(e.target.value);
                }}
              />
            </div>
            <label>Bank Name</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.bankname}
                className="vi_0 mb-2"
                value={bankname}
                onChange={(e) => {
                  setBankname(e.target.value);
                }}
              />
            </div>
            <label>Account No</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.accountnumber}
                className="vi_0 mb-2"
                value={accountnumber}
                onChange={(e) => {
                  setAccountnumber(e.target.value);
                }}
              />
            </div>
            <label>IFSC Code</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.ifscCode}
                className="vi_0 mb-2"
                value={ifsccode}
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
              />
            </div>
            <label>Branch Name</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.branchname}
                className="vi_0 mb-2"
                value={branchname}
                onChange={(e) => {
                  setBranchname(e.target.value);
                }}
              />
            </div>
            <label>Commission Amount</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.commissionamount}
                className="vi_0 mb-2"
                value={commissionamount}
                onChange={(e) => {
                  setCommissionamount(e.target.value);
                }}
              />
            </div>
            <label>GST Number</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.gstnumber}
                className="vi_0 mb-2"
                value={gstnumber}
                onChange={(e) => {
                  setGstnumber(e.target.value);
                }}
              />
            </div>
            <label>Password</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="text"
                placeholder={View?.password}
                className="vi_0 mb-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <label htmlFor="upload1">Agent Image</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => {
                  setAgentprofile(e.target.files[0]);
                }}
              />
            </div>
            <label htmlFor="upload">GST Document</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="file"
                id="upload"
                accept="image/*"
                className="vi_0"
                onChange={(e) => {
                  setGstdocument(e.target.files[0]);
                }}
              />
            </div>
            <label htmlFor="upload1">Pan Document</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangepandocument(e)}
              />
            </div>
            <label htmlFor="upload2">Aadhar Document</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangeaadhar(e)}
              />
            </div>
            <label>Shop Images</label>
            <div className="do-sear mt-2" style={{ background: "white" }}>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={updateAgent}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
