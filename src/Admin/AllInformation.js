import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom/dist";
import { DownloadTableExcel } from "react-export-table-to-excel";

function AllInformation() {
  const [acc, setAcc] = useState("");
  const [acc1, setAcc1] = useState(true);
  const [acc2, setAcc2] = useState("");
  const [acc3, setAcc3] = useState("");

  const tableRef = useRef(null);

  //   modal1
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  update modal
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //  Sure modal
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const { id } = useParams();
  // console.log(id);

  const [data, setData] = useState({});
  const [allbooking, setAllbooking] = useState([]);
  const [nochangeData, setNochangedata] = useState([]);

  // console.log(data, "allbooking");
  useEffect(() => {
    const getUserId = async () => {
      try {
        await axios
          .get("http://saisathish.info/api/User/getUserById/" + id)
          .then((res) => {
            if ((res.status = 200)) {
              setData(res.data.success);
              setNochangedata(res.data.success);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    const getAllbooking = async () => {
      try {
        let res = await axios.get(
          "http://saisathish.info/api/Admin/getAllBooking"
        );
        if (res.status === 200) {
          setAllbooking(res.data.success);
          setNochangedata(res.data.success);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserId();
    getAllbooking();
  }, []);

  // const [commission, setcommission] = useState([]);
  // console.log(commission, "jifowijfojrei");

  // useEffect(() => {
  //   const getCommission = async () => {
  //     try {
  //       await axios
  //         .get("http://saisathish.info/api/v1/getcommission")
  //         .then((res) => {
  //           if ((res.status = 200)) {
  //             setcommission(res.data.success);
  //           }
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCommission();
  // }, []);

  // console.log(allbooking, "fde");
  const [showdata, setshowdata] = useState(true);
  const [status, setStatus] = useState("");
  const [recivedamount, setrecivedamount] = useState("");
  const [recivepaymentid, setrecivepaymentid] = useState("");
  const [paymentdate, setpaymentdate] = useState("");
  const [edit, setEdit] = useState("");

  const updateBooking = async () => {
    try {
      let config = {
        url: "/bookingupdate",
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          id: edit?._id,
          recivedammount: recivedamount,
          commissionId: recivepaymentid,
          statuscheck: status,
          paymentdate: paymentdate,
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

  // Date filter

  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const filterData = () => {
    if (!startDate) return alert("Please select from date");
    if (!endDate) return alert("Please select to date");
    const filteredData = allbooking.filter((item) => {
      const itemDate = new Date(item?.updatedAt);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });
    setAllbooking([...filteredData]);
  };

  // update agent
  const [update, setupdate] = useState("");
  const [updatedata, setupdatedata] = useState({});
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
          id: update?._id,
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

  return (
    <>
      <div className="info-p pt-4 pb-2">
        <div className="container">
          <div className="" style={{ display: "flex", gap: "25px" }}>
            {/* <div className="">
              <Button
                onClick={() => {
                  setAcc(true);
                  setAcc1(false);
                  setAcc2(false);
                  setAcc3(false);
                }}
                style={{ color: acc ? "red" : "" }}
              >
                Profile
              </Button>
            </div> */}
            <div>
              <Button
                onClick={() => {
                  setAcc(false);
                  setAcc1(true);
                  setAcc2(false);
                  setAcc3(false);
                }}
                style={{ color: acc1 ? "red" : "" }}
              >
                Agent Details
              </Button>
            </div>
            {/* <div className="">
              <Button
                onClick={() => {
                  setAcc(false);
                  setAcc1(false);
                  setAcc2(true);
                  setAcc3(false);
                }}
                style={{ color: acc2 ? "red" : "" }}
              >
                Consultant Manager
              </Button>
            </div>
            <div className="">
              <Button
                onClick={() => {
                  setAcc(false);
                  setAcc1(false);
                  setAcc2(false);
                  setAcc3(true);
                }}
                style={{ color: acc3 ? "red" : "" }}
              >
                Center Executive{" "}
              </Button>
            </div> */}
          </div>

          {/* Details */}

          {acc ? (
            <>
              <div className="details-o pt-3 pb-3">
                <div>
                  {/* <Button>
                    <BiSolidEdit style={{ fontSize: "25px", color: "blue" }} />
                  </Button> */}
                </div>

                <div className="mb-3 mt-3">
                  <Table
                    responsive
                    bordered
                    style={{ width: "-webkit-fill-available" }}
                  >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>
                          <div style={{ width: "150px" }}>Business Name</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Person Name</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Person Number</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Email Id</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>GST Number</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Aadhar Document </div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>GST Document</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Pan Document</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Address 1</div>
                        </th>
                        <th>
                          <div style={{ width: "150px" }}>Address 2</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr key={data?._id}>
                        <td>1</td>
                        <td>{data?.businessname}</td>
                        <td>{data?.name}</td>
                        <td>{data?.phone}</td>
                        <td>{data?.email}</td>
                        <td>{data?.gstnumber}</td>
                        <td>
                          <div>
                            <img
                              src={`http://saisathish.info/Product/${data?.aadhardocument}`}
                              alt="gstdocument"
                              style={{ widht: "200px", height: "100px" }}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <img
                              src={`http://saisathish.info/Product/${data?.gstdocument}`}
                              alt="gstdocument"
                              style={{ widht: "200px", height: "100px" }}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <img
                              src={`http://saisathish.info/Product/${data?.pandocument}`}
                              alt="pandocument"
                              style={{ widht: "200px", height: "100px" }}
                            />
                          </div>
                        </td>

                        <td>{data?.address}</td>
                        <td>{data?.address2}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </>
          ) : (
            <>
              {acc1 ? (
                <>
                  <div className="details-o pt-3 pb-3">
                    <div className="mb-3 mt-3">
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
                                Booking Agent Id
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Name</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Phone Number</div>
                            </th>

                            <th>
                              <div style={{ width: "150px" }}>Email Id</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Address 1</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Address 2</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Bank Name</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>
                                Account Number
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>IFSC Code</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Branch Name</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>
                                Commission Amount
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>GST Number</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>
                                Agent Profile
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>GST Document</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Pan Document</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>
                                Aadhar Document
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Shop Images</div>
                            </th>
                            {/* <th>
                              <div style={{ width: "150px" }}>Action</div>
                            </th> */}
                          </tr>
                        </thead>

                        <tbody>
                          <tr key={data?._id}>
                            <td> 1</td>
                            <td>{data?.partnerId}</td>
                            <td>{data?.name}</td>
                            <td>{data?.phone}</td>
                            <td>{data?.email}</td>
                            <td>{data?.address}</td>
                            <td>{data?.address2}</td>
                            <td>{data?.bankname}</td>
                            <td>{data?.accountnumber}</td>
                            <td>{data?.ifscCode}</td>
                            <td>{data?.branchname}</td>
                            <td>{data?.commissionamount}</td>
                            <td>{data?.gstnumber}</td>
                            <td>
                              <div>
                                <a
                                  href={`http://saisathish.info/Product/${data?.agentprofile}`}
                                  target="_blank"
                                >
                                  <img
                                    src={`http://saisathish.info/Product/${data?.agentprofile}`}
                                    alt="profile"
                                    style={{ widht: "200px", height: "100px" }}
                                  />
                                </a>
                              </div>
                            </td>
                            <td>
                              <div>
                                <a
                                  href={`http://saisathish.info/Product/${data?.gstdocument}`}
                                  target="_blank"
                                >
                                  <img
                                    src={`http://saisathish.info/Product/${data?.gstdocument}`}
                                    alt="pandocument"
                                    style={{ widht: "200px", height: "100px" }}
                                  />
                                </a>
                              </div>
                            </td>
                            <td>
                              <div>
                                <td style={{ display: "flex", gap: "21px" }}>
                                  {data?.pandocument?.map((item, index) => {
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
                                            widht: "200px",
                                            height: "100px",
                                          }}
                                        />
                                      </a>
                                    );
                                  })}
                                </td>
                              </div>
                            </td>
                            <td>
                              <div>
                                <td style={{ display: "flex", gap: "21px" }}>
                                  {data?.aadhardocument?.map((item, index) => {
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
                                            widht: "200px",
                                            height: "100px",
                                          }}
                                        />
                                      </a>
                                    );
                                  })}
                                </td>
                              </div>
                            </td>
                            <td style={{ display: "flex", gap: "21px" }}>
                              {data?.shopimages?.map((item, index) => {
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
                                        widht: "200px",
                                        height: "100px",
                                      }}
                                    />
                                  </a>
                                );
                              })}
                            </td>
                            {/* <td>
                              {" "}
                              <Button
                                onClick={() => {
                                  setupdate(data);
                                  setupdatedata(data);
                                  handleShow1();
                                }}
                              >
                                <BiSolidEdit
                                  style={{ fontSize: "25px", color: "blue" }}
                                />
                              </Button>
                            </td> */}
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  {/* Table data */}
                  <div className="customerhead p-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="header-c ">Booked / Commission History</h2>
                    </div>
                    <div className="row p-2 align-items-end justify-content-around mb-3">
                      <div className="col-lg-4">
                        <label>From :</label>
                        <Form.Control
                          type="date"
                          aria-describedby="basic-addon1"
                          value={startDate}
                          onChange={(e) => setstartDate(e.target.value)}
                        />
                      </div>

                      <div className="col-lg-4">
                        <label>To :</label>
                        <Form.Control
                          type="date"
                          aria-describedby="basic-addon1"
                          value={endDate}
                          onChange={(e) => setendDate(e.target.value)}
                        />
                      </div>

                      <div className="col-lg-2">
                        <button
                          className="btn btn-primary"
                          onClick={filterData}
                        >
                          Submit
                        </button>
                      </div>
                      <div className="col-lg-2">
                        <DownloadTableExcel
                          filename="users table"
                          sheet="users"
                          currentTableRef={tableRef.current}
                        >
                          <button className="btn btn-danger">
                            Export Excel
                          </button>
                        </DownloadTableExcel>
                      </div>
                    </div>

                    <div className="mb-3">
                      <Table
                        responsive
                        bordered
                        style={{ width: "-webkit-fill-available" }}
                        ref={tableRef}
                      >
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>
                              <div style={{ width: "100px" }}>Start Date</div>
                            </th>
                            {/* <th>
                              <div>Return Date</div>
                            </th> */}
                            <th>
                              <div style={{ width: "100px" }}>
                                No of Booking
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "100px" }}>
                                {" "}
                                Total Amount
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "100px" }}>
                                Payment Amount
                              </div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Date</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Payment Id</div>
                            </th>
                            <th>
                              <div style={{ width: "150px" }}>Payment Date</div>
                            </th>
                            <th>
                              <div style={{ width: "100px" }}>Status</div>
                            </th>
                            <th>
                              <div>Action</div>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {allbooking
                            .filter((val) => val?.userId?._id === id)
                            ?.map((item, i) => {
                              return (
                                <tr>
                                  <td>{++i}</td>
                                  <td>{item?.Bookingdate}</td>
                                  <td>{item?.SeatNo?.length}</td>
                                  <td>
                                    {item?.SeatNo?.length *
                                      data?.commissionamount}
                                  </td>
                                  <td>
                                    {item?.recivedammount ? (
                                      <div>
                                        <>{item?.recivedammount}</>
                                      </div>
                                    ) : (
                                      <div>-----</div>
                                    )}
                                  </td>

                                  <td>
                                    {moment(item?.createdAt).format("lll")}
                                  </td>
                                  <td>
                                    {item?.commissionId ? (
                                      <div>
                                        <>{item?.commissionId}</>
                                      </div>
                                    ) : (
                                      <div>-----</div>
                                    )}
                                  </td>
                                  <td>{item?.paymentdate}</td>
                                  <td>{item?.statuscheck}</td>
                                  <td>
                                    {item?.statuscheck === "pending" ? (
                                      <>
                                        <Button
                                          onClick={() => {
                                            setEdit(item);
                                            handleShow();
                                          }}
                                        >
                                          AddPayment
                                        </Button>
                                      </>
                                    ) : (
                                      <>
                                        <div
                                          style={{
                                            color: "Green",
                                            fontSize: "20px",
                                            fontWeight: "700",
                                          }}
                                        >
                                          successfully
                                        </div>
                                      </>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {acc2 ? (
                    <>
                      <div className="details-o pt-3 pb-3">
                        <div>
                          <Button>
                            <BiSolidEdit
                              style={{ fontSize: "25px", color: "blue" }}
                            />
                          </Button>
                        </div>
                        <div className="mb-3 mt-3">
                          <Table
                            responsive
                            bordered
                            style={{ width: "-webkit-fill-available" }}
                          ></Table>
                        </div>
                      </div>
                      {/* Table data */}
                      <div className="customerhead p-2">
                        <div className="d-flex justify-content-between align-items-center">
                          <h2 className="header-c ">
                            Booked / Commission History
                          </h2>
                        </div>
                        <div className="row p-2 align-items-end justify-content-around mb-3"></div>

                        <div className="mb-3">
                          <Table
                            responsive
                            bordered
                            style={{ width: "-webkit-fill-available" }}
                          ></Table>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {acc3 ? (
                        <>
                          <div className="details-o pt-3 pb-3">
                            <div>
                              <Button>
                                <BiSolidEdit
                                  style={{ fontSize: "25px", color: "blue" }}
                                />
                              </Button>
                            </div>
                            <div className="mb-3 mt-3">
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
                                        Your Name
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Phone Number
                                      </div>
                                    </th>

                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Email Id
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Bank Name
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Account Number
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        IFSC Code
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Branch Name
                                      </div>
                                    </th>
                                    <th>
                                      <div style={{ width: "150px" }}>
                                        Commission Amount
                                      </div>
                                    </th>
                                  </tr>
                                </thead>

                                <tbody>
                                  <tr key={data?._id}>
                                    <td>1</td>
                                    <td>{data?.centername}</td>
                                    <td>{data?.centerphone}</td>
                                    <td>{data?.centeremail}</td>
                                    <td>{data?.centerbankname}</td>
                                    <td>{data?.centeraccountnumber}</td>
                                    <td>{data?.centerifscCode}</td>
                                    <td>{data?.centerbranchname}</td>
                                    <td>{data?.centercommissionamount}</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                          {/* Table data */}
                          <div className="customerhead p-2">
                            <div className="d-flex justify-content-between align-items-center">
                              <h2 className="header-c ">
                                Booked / Commission History
                              </h2>
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* Modal1 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "35px" }}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option value={"Pending"}>Pending</option>
              <option value={"Cleared"}>Cleared</option>
            </Form.Select>
          </div>
          <label>Amount</label>
          <div className="do-sear mt-2" style={{ background: "white" }}>
            <input
              type="text"
              placeholder="Amount"
              className="vi_0 mb-2"
              value={recivedamount}
              onChange={(e) => {
                setrecivedamount(e.target.value);
              }}
            />
          </div>
          <label>PaymentId</label>
          <div className="do-sear mt-2" style={{ background: "white" }}>
            <input
              type="text"
              placeholder="PaymentId"
              className="vi_0 mb-2"
              value={recivepaymentid}
              onChange={(e) => {
                setrecivepaymentid(e.target.value);
              }}
            />
          </div>
          <label>Payment Date</label>
          <div className="do-sear mt-2" style={{ background: "white" }}>
            <input
              type="date"
              placeholder="PaymentId"
              className="vi_0 mb-2"
              value={paymentdate}
              onChange={(e) => {
                setpaymentdate(e.target.value);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleShow2();
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update modal */}

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Update Agent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Business Name</label>
          <div className="do-sear mt-2" style={{ background: "white" }}>
            <input
              type="text"
              placeholder={updatedata?.businessname}
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
              placeholder={updatedata?.name}
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
              placeholder={updatedata?.phone}
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
              placeholder={updatedata?.email}
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
              placeholder={updatedata?.address}
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
              placeholder={updatedata?.address2}
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
              placeholder={updatedata?.bankname}
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
              placeholder={updatedata?.accountnumber}
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
              placeholder={updatedata?.ifscCode}
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
              placeholder={updatedata?.branchname}
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
              placeholder={updatedata?.commissionamount}
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
              placeholder={updatedata?.gstnumber}
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
              placeholder={updatedata?.password}
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

      <Modal show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "green" }}>Cleared Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure ?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={updateBooking}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AllInformation;

// backend code for multiple image update
// if (arr[i].fieldname === "shopimages[]") {
//   obj["shopimages"] = obj["shopimages"] || []; // Initialize if not exists
//   obj["shopimages"].push(arr[i].filename);
