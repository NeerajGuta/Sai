import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";
import exportFromJSON from "export-from-json";
import { FaFileAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const AddCBM = () => {
  const [itempage, setItempage] = useState(5);

  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show4, setShow4] = useState();
  const [show5, setShow5] = useState();
  const [View, setView] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [data, setdata] = useState([]);
  const [PasswordShow, setPasswordShow] = useState(false);
  // console.log(data, "Data");
  const [nochange, setNochange] = useState([]);
  const [data1, setdata1] = useState([]);
  const getCBM = async () => {
    try {
      await axios.get("http://saisathish.info/api/v1/getallcbm").then((res) => {
        if (res.status == 200) {
          setdata1(res.data.success);
          setdata(
            res.data.success?.map(
              ({
                cbmId,
                firstname,
                lastname,
                phoneno,
                email,
                password,
                createdAt,
                residentialaddress,
                currentaddress,
                bankname,
                branch,
                ifsccode,
                accountno,
              }) => ({
                "Central Branch Manager Id": cbmId,
                "First Name": firstname,
                "Last Name": lastname,
                "Phone No": phoneno,
                Email: email,
                password: password,
                "Register date": moment(createdAt).format("LL"),
                "Residential Address": residentialaddress,
                "Current Address": currentaddress,
                "Bank Name": bankname,
                "Branch Name": branch,
                "IFSC Code": ifsccode,
                "Account No": accountno,
              })
            )
          );
          setNochange(res.data.success);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // export excel
  const exportType = "xls";
  const [fileName, setfileName] = useState("CBM");
  const ExportToExcel = () => {
    exportFromJSON({ data, fileName, exportType });
  };
  useEffect(() => {
    getCBM();
  }, []);

  const [pickuplocation, setPickuplocation] = useState("");
  const [lastname, setlastname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [residentialaddress, setresidentialaddress] = useState("");
  const [currentaddress, setcurrentaddress] = useState("");
  const [bankname, setbankname] = useState("");
  const [branch, setbranch] = useState("");
  const [ifsccode, setifsccode] = useState("");
  const [accountno, setaccountno] = useState("");
  const [cv, setcv] = useState("");
  const [pandocument, setpandocument] = useState([]);
  const handleFileChangepan = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setpandocument(selectedFiles);
  };
  const [aadharcard, setaadharcard] = useState([]);
  const handleFileChangeadhar = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setaadharcard(selectedFiles);
  };
  const [branchcommission, setBranchcommission] = useState("");
  const [cbmprofile, setcbmProfile] = useState("");

  const addPickLocation = async () => {
    if (!pickuplocation) {
      return alert("First name required !!!");
    } else {
      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
      if (!nameRegex.test(pickuplocation)) {
        return alert(
          "First Name is Invalid!!! Please enter valid First name only!!!"
        );
      }
    }
    if (!lastname) {
      return alert("Last name required !!!");
    } else {
      const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
      if (!nameRegex.test(lastname)) {
        return alert(
          "Last Name is Invalid!!! Please enter valid Last name only!!!"
        );
      }
    }
    if (!phoneno) {
      return alert("Phone No required !!!");
    } else {
      const phoneNumberRegex = /^(\d{10}|\(\d{3}\)\s?\d{3}[-\s]?\d{4})$/;
      if (!phoneNumberRegex.test(phoneno)) {
        return alert("mobile is Invalid!!! Please enter valid mobile only!!!");
      }
    }
    if (!email) {
      return alert("Email required !!!");
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        return alert(
          "Email-id is Invalid!!! Please enter valid Email-id only!!!"
        );
      }
    }
    if (!password) {
      return alert("Password required !!!");
    }
    if (!residentialaddress) {
      return alert("Residential Address required !!!");
    }
    if (!currentaddress) {
      return alert("Current Addess required !!!");
    }
    if (!bankname) {
      return alert("Bank Name required !!!");
    }
    if (!branch) {
      return alert("Branch required !!!");
    }
    if (!ifsccode) {
      return alert("IFSC code required !!!");
    }
    if (!cv) {
      return alert("CV required !!!");
    }
    if (!pandocument) {
      return alert("Pan document required !!!");
    }
    if (!aadharcard) {
      return alert("Aadhar Card required !!!");
    }
    try {
      let config = {
        url: "/addcbm",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "multipart/form-data" },
        data: {
          firstname: pickuplocation,
          lastname: lastname,
          phoneno: phoneno,
          email: email,
          password: password,
          residentialaddress: residentialaddress,
          currentaddress: currentaddress,
          bankname: bankname,
          branch: branch,
          ifsccode: ifsccode,
          accountno: accountno,
          cv: cv,
          pandocument: pandocument,
          aadharcard: aadharcard,
          branchcommission: branchcommission,
          cbmprofile: cbmprofile,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert("Central Booking Manager Add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const [edit, setEdit] = useState("");
  const [update, setUpdate] = useState({});
  const updatePickLocation = async () => {
    try {
      let config = {
        url: "/updatecbm",
        method: "put",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "multipart/form-data" },
        data: {
          id: edit?._id,
          firstname: pickuplocation,
          lastname: lastname,
          phoneno: phoneno,
          email: email,
          residentialaddress: residentialaddress,
          currentaddress: currentaddress,
          bankname: bankname,
          branch: branch,
          ifsccode: ifsccode,
          accountno: accountno,
          cv: cv,
          pandocument: pandocument,
          aadharcard: aadharcard,
          branchcommission: branchcommission,
          cbmprofile: cbmprofile,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        // console.log(res.data.success);
        window.location.reload(true);
        alert("Central Booking Manager Update successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const [alertremove, setAlertremove] = useState("");
  const removePickUp = async (id) => {
    try {
      await axios
        .delete("http://saisathish.info/api/v1/delete/" + alertremove?._id)
        .then((res) => {
          if (res.status == 200) {
            alert("Central Booking Manager Delete Successfully");
            window.location.reload(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Search filter
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    if (e.target.value != "") {
      setSearch(e.target.value);
      const filterTable = nochange.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setdata1([...filterTable]);
    } else {
      setSearch(e.target.value);
      setdata1([...nochange]);
    }
  };

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
    setdata1([...filteredData]);
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = nochange.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(nochange.length / productPerPage);

  console.log("data1: ", data1);

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Central Booking Manager</h2>
          <button className="btn-danger btn" onClick={ExportToExcel}>
            DownloadToExcel
          </button>
          <button className="btn-primary btn" onClick={handleShow}>
            Add CBM
          </button>
        </div>
        <div
          className="row p-2 align-items-end  mb-3"
          style={{ justifyContent: "space-between" }}
        >
          {/* <div className="col-lg-1">
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
            className="input-group col-lg-3"
            style={{ width: "272px", height: "35px", marginTop: "20px" }}
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
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>
                  <div style={{ width: "150px" }}>
                    Central Booking Manager Id
                  </div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>First Name</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Last Name</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Phone No</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Email</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Register date</div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>Residential Address</div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>Current Address</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Bank Name</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Branch Name</div>
                </th>
                <th>
                  <div style={{ width: "200px" }}>IFSC Code </div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>Account No </div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>Commission</div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>CBM Image</div>
                </th>
                <th>
                  <div style={{ width: "220px" }}>CV</div>
                </th>
                <th>
                  <div style={{ width: "200px" }}>Pan Card</div>
                </th>
                <th>
                  <div style={{ width: "200px" }}>Aadhar Card</div>
                </th>
                <th>
                  <div style={{ width: "200px" }}>View agents</div>
                </th>
                <th>
                  <div>Action</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {displayPage?.slice(0, itempage)?.map((wrap, index) => {
                return (
                  <tr key={wrap?._id}>
                    <td>{index + 1}</td>
                    <td>{wrap?.cbmId}</td>
                    <td>{wrap?.firstname}</td>
                    <td>{wrap?.lastname}</td>
                    <td>{wrap?.phoneno}</td>
                    <td>{wrap?.email}</td>
                    <td>{moment(wrap?.createdAt).format("LL")}</td>
                    <td>{wrap?.residentialaddress}</td>
                    <td>{wrap?.currentaddress}</td>
                    <td>{wrap?.bankname}</td>
                    <td>{wrap?.branch}</td>
                    <td>{wrap?.ifsccode}</td>
                    <td>{wrap?.accountno}</td>
                    <td>{wrap?.branchcommission}</td>
                    <td>
                      <a
                        href={`http://saisathish.info/CBM/${wrap?.cbmprofile}`}
                        target="_blank"
                      >
                        <img
                          src={`http://saisathish.info/CBM/${wrap?.cbmprofile}`}
                          style={{ width: "200px", height: "70px" }}
                        />
                      </a>
                    </td>
                    <td>
                      <div>
                        {wrap?.cv && (
                          <>
                            {wrap.cv.toLowerCase().endsWith(".jpg") ||
                            wrap.cv.toLowerCase().endsWith(".jpeg") ||
                            wrap.cv.toLowerCase().endsWith(".png") ? (
                              <>
                                <img
                                  src={`http://saisathish.info/CBM/${wrap?.cv}`}
                                  alt="pdf"
                                  style={{ width: "100%", height: "100px" }}
                                  onClick={() => {
                                    setView(wrap);
                                    handleShow4();
                                  }}
                                />
                              </>
                            ) : (
                              <a
                                href={`http://saisathish.info/CBM/${wrap?.cv}`}
                              >
                                <FaFileAlt
                                  style={{
                                    color: "blue",
                                    cursor: "pointer",
                                    fontSize: "35px",
                                    widht: "200px",
                                    height: "100px",
                                  }}
                                />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                    <td>
                      <div>
                        <td style={{ display: "flex", gap: "21px" }}>
                          {wrap?.pandocument?.map((item, index) => {
                            return (
                              <a
                                key={item?._id}
                                href={`http://saisathish.info/CBM/${item}`}
                                target="_blank"
                              >
                                <img
                                  src={`http://saisathish.info/CBM/${item}`}
                                  alt="shop_images"
                                  style={{
                                    widht: "200px",
                                    height: "100px",
                                  }}
                                />
                              </a>
                            );
                          })}
                        </td>
                      </div>
                      {/* <a
                        href={`http://saisathish.info/CBM/${wrap?.pandocument}`}
                        target="_blank"
                      >
                        <img
                          src={`http://saisathish.info/CBM/${wrap?.pandocument}`}
                          style={{ width: "200px", height: "70px" }}
                        />
                      </a> */}
                    </td>
                    <td>
                      <div>
                        <td style={{ display: "flex", gap: "21px" }}>
                          {wrap?.aadharcard?.map((item, index) => {
                            return (
                              <a
                                key={item?._id}
                                href={`http://saisathish.info/CBM/${item}`}
                                target="_blank"
                              >
                                <img
                                  src={`http://saisathish.info/CBM/${item}`}
                                  alt="shop_images"
                                  style={{
                                    widht: "200px",
                                    height: "100px",
                                  }}
                                />
                              </a>
                            );
                          })}
                        </td>
                      </div>
                      {/* <a
                        href={`http://saisathish.info/CBM/${wrap?.aadharcard}`}
                        target="_blank"
                      >
                        <img
                          src={`http://saisathish.info/CBM/${wrap?.aadharcard}`}
                          style={{ width: "200px", height: "70px" }}
                        />
                      </a> */}
                    </td>
                    <td>
                      <a href={`/cbm-all-agent/${wrap._id}`}>
                        {" "}
                        <AiFillEye style={{ fontSize: "22px" }} />
                      </a>
                    </td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            onClick={() => {
                              handleShow1();
                              setEdit(wrap);
                              setUpdate(wrap);
                            }}
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => {
                              handleShow5();
                              setAlertremove(wrap);
                            }}
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          />{" "}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
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

        {/* Add Package modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Add Central Booking Manager
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="do-sear mt-2">
              <label> First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="vi_0"
                value={pickuplocation}
                onChange={(e) => {
                  setPickuplocation(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label> Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="vi_0"
                value={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Phone No</label>
              <input
                type="number"
                placeholder="Enter Phone No"
                className="vi_0"
                value={phoneno}
                onChange={(e) => {
                  setphoneno(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label> Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                className="vi_0"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Password</label>
              <div className="d-flex">
                <input
                  type={PasswordShow ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="vi_0"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                {PasswordShow ? (
                  <button
                    style={{
                      width: "10%",
                      border: "1px solid #DEDEDE",
                      backgroundColor: "#FFFFFF",
                    }}
                    onClick={() => setPasswordShow(!PasswordShow)}
                    className="passbtn"
                  >
                    <FaEye style={{ color: "#778700" }} />
                  </button>
                ) : (
                  <button
                    style={{
                      width: "10%",
                      border: "1px solid #DEDEDE",
                      backgroundColor: "#FFFFFF",
                    }}
                    onClick={() => setPasswordShow(!PasswordShow)}
                    className="passbtn"
                  >
                    <FaEyeSlash style={{ color: "#778700" }} />
                  </button>
                )}
              </div>
            </div>

            <div className="do-sear mt-2">
              <label>Residential Address</label>
              <input
                type="text"
                placeholder="Enter Residential address"
                className="vi_0"
                value={residentialaddress}
                onChange={(e) => {
                  setresidentialaddress(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Current Address</label>
              <input
                type="text"
                placeholder="Enter Current Address"
                className="vi_0"
                value={currentaddress}
                onChange={(e) => {
                  setcurrentaddress(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Bank Name</label>
              <input
                type="text"
                placeholder="Enter Bank Name"
                className="vi_0"
                value={bankname}
                onChange={(e) => {
                  setbankname(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Branch Name</label>
              <input
                type="text"
                placeholder="Enter Branch Name"
                className="vi_0"
                value={branch}
                onChange={(e) => {
                  setbranch(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Commission </label>
              <input
                type="text"
                placeholder="500 e.g"
                className="vi_0"
                value={branchcommission}
                onChange={(e) => {
                  setBranchcommission(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>IFSC Code</label>
              <input
                type="text"
                placeholder="Enter Current Address"
                className="vi_0"
                value={ifsccode}
                onChange={(e) => {
                  setifsccode(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Account No</label>
              <input
                type="text"
                placeholder="Enter Account No"
                className="vi_0"
                value={accountno}
                onChange={(e) => {
                  setaccountno(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label id="upload">CV</label>
              <input
                type="file"
                id="upload"
                accept="image/*, application/*"
                className="vi_0"
                onChange={(e) => setcv(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label id="uploadw">CBM Image</label>
              <input
                type="file"
                id="uploadw"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setcbmProfile(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Pan Card (Bothe sides)</label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangepan(e)}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Aadhar Card (Bothe sides)</label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangeadhar(e)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                className="mx-2"
                variant="primary"
                onClick={() => {
                  addPickLocation();
                  handleClose();
                }}
              >
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
              Edit Central Booking Manager
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="do-sear mt-2">
              <label> First Name</label>
              <input
                type="text"
                placeholder={update?.firstname}
                className="vi_0"
                value={pickuplocation}
                onChange={(e) => {
                  setPickuplocation(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label> Last Name</label>
              <input
                type="text"
                placeholder={update?.lastname}
                className="vi_0"
                value={lastname}
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Phone No</label>
              <input
                type="number"
                placeholder={update?.phoneno}
                className="vi_0"
                value={phoneno}
                onChange={(e) => {
                  setphoneno(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label> Email</label>
              <input
                type="email"
                placeholder={update?.email}
                className="vi_0"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Residential Address</label>
              <input
                type="text"
                placeholder={update?.residentialaddress}
                className="vi_0"
                value={residentialaddress}
                onChange={(e) => {
                  setresidentialaddress(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Current Address</label>
              <input
                type="text"
                placeholder={update?.currentaddress}
                className="vi_0"
                value={currentaddress}
                onChange={(e) => {
                  setcurrentaddress(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Bank Name</label>
              <input
                type="text"
                placeholder={update?.bankname}
                className="vi_0"
                value={bankname}
                onChange={(e) => {
                  setbankname(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Branch Name</label>
              <input
                type="text"
                placeholder={update?.branch}
                className="vi_0"
                value={branch}
                onChange={(e) => {
                  setbranch(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>IFSC Code</label>
              <input
                type="text"
                placeholder={update?.ifsccode}
                className="vi_0"
                value={ifsccode}
                onChange={(e) => {
                  setifsccode(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Account No</label>
              <input
                type="text"
                placeholder={update?.firstname}
                className="vi_0"
                value={accountno}
                onChange={(e) => {
                  setaccountno(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Commission</label>
              <input
                type="text"
                placeholder={update?.branchcommission}
                className="vi_0"
                value={branchcommission}
                onChange={(e) => {
                  setBranchcommission(e.target.value);
                }}
              />
            </div>
            <div className="do-sear mt-2">
              <label id="upload">CV</label>
              <input
                type="file"
                id="upload"
                accept="image/*, application/*"
                className="vi_0"
                onChange={(e) => setcv(e.target.files[0])}
              />
            </div>

            <div className="do-sear mt-2">
              <label id="upload1">CBM Image</label>
              <input
                type="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setcbmProfile(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Pan Card (Bothsides)</label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangepan(e)}
              />
            </div>
            <div className="do-sear mt-2">
              <label>Aadhar Card (Bothsides)</label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangeadhar(e)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                updatePickLocation();
                handleClose1();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show5} onHide={handleClose5} centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "red" }}>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete data ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose5}>
              Close
            </Button>
            <Button variant="primary" onClick={removePickUp}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Final Report</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              {View?.cv && (
                <>
                  {View.cv.toLowerCase().endsWith(".jpg") ||
                  View.cv.toLowerCase().endsWith(".jpeg") ||
                  View.cv.toLowerCase().endsWith(".png") ? (
                    <>
                      <img
                        src={`http://saisathish.info/CBM/${View?.cv}`}
                        alt="pdf"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </>
                  ) : (
                    <>
                      <object
                        data={`http://saisathish.info/CBM/${View?.cv}`}
                        type="application/pdf"
                        width="100%"
                        height="400"
                      ></object>
                      <a
                        href={`http://saisathish.info/CBM/${View?.cv}`}
                        download={View?.cv}
                        style={{ display: "block", marginTop: "10px" }}
                      >
                        Download PDF
                      </a>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddCBM;
