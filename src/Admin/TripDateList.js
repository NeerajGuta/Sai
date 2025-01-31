import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";

const TripDateList = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // itenirary
  const [show3, setShow3] = useState();
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // MenuChart
  const [show4, setShow4] = useState();
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [data, setData] = useState([]);
  // console.log(data, "packagetype");
  const getPackage = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/Admin/getallpackage")
        .then((res) => {
          if (res.status == 200) {
            setData(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [data1, setData1] = useState([]);
  // console.log(data1, "packagename");
  const getTriptype = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/getalltrippackage")
        .then((res) => {
          if (res.status == 200) {
            setData1(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [element, setelement] = useState([]);
  const [nochange, setnochange] = useState([]);
  // console.log(element, "Date");

  const getTripdate = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/getalltripdate")
        .then((res) => {
          if (res.status == 200) {
            setelement(res.data.success);
            setnochange(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackage();
    getTriptype();
    getTripdate();
  }, []);

  const [tripDate, setTripDate] = useState([]);
  const [triptype1, setTriptype1] = useState("");
  const [tripname1, settripname1] = useState("");
  const [startdate1, setstartdate1] = useState("");
  const [returndate1, setreturndate1] = useState("");

  function tripDates() {
    if (!startdate1) return alert("Start Date Required");
    // if (!returndate1) return alert("Return Date Required");
    let Obj = { startdate: startdate1, returndate: returndate1 };
    tripDate.push(Obj);
  }
  const [packageId, setpackageId] = useState("");

  const addTripdate = async () => {
    try {
      let config = {
        url: "/addtripdate",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          triptype: triptype1,
          tripname: tripname1,
          tripdates: tripDate,
          packageId: packageId,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert("Trip Date add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const removeTripdate = async (id) => {
    try {
      await axios
        .delete("http://saisathish.info/api/v1/removetripdate/" + id)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.success);
            window.location.reload(true);
            alert("Trip Date delete successfully");
          }
        });
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const removeItem = (val) => {
    tripDate.splice(val, 1);
    setTripDate([...tripDate]);
    alert("Date delete successfully");
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = data.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(data.length / productPerPage);

  // //////////////////////
  const alreadyAdd = () => {
    let flag = 1;
    for (let item of element) {
      let isAvail = item.tripdates.find((val) => val.startdate === startdate1);
      // console.log("checking ", isAvail);
      if (isAvail) {
        flag = 0;
        alert("Cannot Add The Same Date!!!");
        handleClose1();
        break;
      }
    }
    // console.log("element======>", element);
    if (flag) {
      tripDates();
      handleClose1();
    }
  };

  const [selectedPackageType, setselectedPackageType] = useState("");

  // useEffect(() => {
  //   if (selectedPackageType) {
  //     setnochange(element?.filter((e) => e.triptype == selectedPackageType));
  //   } else if (!selectedPackageType) {
  //     setnochange(element);
  //   }
  // }, [element, selectedPackageType]);

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Trip Date List</h2>
          <button className="btn-primary btn" onClick={handleShow}>
            ADD DATES / Add Trip Date
          </button>
        </div>
        <div className="row p-2  mb-3">
          <div className="col-lg-5 " style={{ width: "300px" }}>
            <label>Package Type</label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "35px" }}
              value={selectedPackageType}
              onChange={(e) => setselectedPackageType(e.target.value)}
            >
              <option>Select option</option>
              {data1?.map((uiniv) => {
                return (
                  <option value={uiniv?.tripname} key={uiniv?._id}>
                    {uiniv?.tripname}
                  </option>
                );
              })}
            </Form.Select>
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
                  <div>Package Type</div>
                </th>
                <th>
                  <div>Package Name</div>
                </th>
                <th>
                  <div>Trip Date </div>
                </th>
                <th>
                  <div> Date </div>
                </th>

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {selectedPackageType ? (
                <>
                  {nochange
                    ?.filter((e) => e.triptype == selectedPackageType)
                    .map((acid, index) => {
                      return (
                        <tr key={acid?._id}>
                          <td>{index + 1}</td>
                          <td>{acid?.triptype}</td>
                          <td>{acid?.tripname}</td>
                          <td>
                            <Table responsive bordered>
                              <thead>
                                <th>Start Date</th>
                                {/* <th>End Date</th> */}
                              </thead>
                              <tbody>
                                {acid?.tripdates?.map((item) => (
                                  <tr key={item?._id}>
                                    <td>{item?.startdate}</td>
                                    {/* <td>{item?.returndate}</td> */}
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </td>
                          <td>{moment(acid?.createdAt).format("ll")}</td>
                          <td>
                            {" "}
                            <div style={{ display: "flex", gap: "20px" }}>
                              {/* <div>
                          <BiSolidEdit
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          />{" "}
                        </div> */}
                              <div>
                                <AiFillDelete
                                  onClick={() => {
                                    removeTripdate(acid?._id);
                                  }}
                                  className="text-danger"
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "20px",
                                  }}
                                />{" "}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </>
              ) : (
                <>
                  {element.map((acid, index) => {
                    return (
                      <tr key={acid?._id}>
                        <td>{index + 1}</td>
                        <td>{acid?.triptype}</td>
                        <td>{acid?.tripname}</td>
                        <td>
                          <Table responsive bordered>
                            <thead>
                              <th>Start Date</th>
                              {/* <th>End Date</th> */}
                            </thead>
                            <tbody>
                              {acid?.tripdates?.map((item) => (
                                <tr key={item?._id}>
                                  <td>{item?.startdate}</td>
                                  {/* <td>{item?.returndate}</td> */}
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </td>
                        <td>{moment(acid?.createdAt).format("ll")}</td>
                        <td>
                          {" "}
                          <div style={{ display: "flex", gap: "20px" }}>
                            {/* <div>
                            <BiSolidEdit
                              className="text-success"
                              style={{ cursor: "pointer", fontSize: "20px" }}
                            />{" "}
                          </div> */}
                            <div>
                              <AiFillDelete
                                onClick={() => {
                                  removeTripdate(acid?._id);
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
                </>
              )}
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
            <Modal.Title className="text-success">Add Trip Date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Package Type</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                  value={triptype1}
                  onChange={(e) => setTriptype1(e.target.value)}
                >
                  <option value="">Select Package Type</option>
                  {data1?.map((uiniv) => {
                    return (
                      <option value={uiniv?.tripname} key={uiniv?._id}>
                        {uiniv?.tripname}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>
            <div className="do-sear mt-2">
              <label>Package Name</label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "35px" }}
                className="vi_0"
                // value={tripname1}
                onChange={(e) => {
                  setpackageId(
                    e.target.value ? JSON.parse(e.target.value)?._id : ""
                  );
                  settripname1(
                    e.target.value
                      ? JSON.parse(e.target.value)?.packagename
                      : ""
                  );
                }}
              >
                <option value="">Select Package Name</option>
                {data
                  ?.filter((ele) => ele?.packagetype == triptype1)
                  ?.map((item) => {
                    return (
                      <option value={JSON.stringify(item)}>
                        {item?.packagename}
                      </option>
                    );
                  })}
              </Form.Select>
            </div>
            <div className="mt-4">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Start Date</th>
                    {/* <th>Return Date</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tripDate?.map((belive, index) => {
                    return (
                      <tr key={belive?._id}>
                        <td>{index + 1}</td>
                        <td>{belive?.startdate}</td>
                        {/* <td>{belive?.returndate}</td> */}
                        <td>
                          <div>
                            <AiFillDelete
                              onClick={() => {
                                removeItem(index);
                              }}
                              style={{ color: "red", cursor: "pointer" }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button className="mx-2" variant="primary" onClick={handleShow1}>
                Add Trip Dates
              </Button>
              <Button
                className="mx-2"
                variant="primary"
                onClick={() => {
                  addTripdate();
                }}
              >
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        {/*  Add Trip Date */}
        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-success">Add Trip Date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Start Date</label>
                <input
                  type="date"
                  value={startdate1}
                  onChange={(e) => setstartdate1(e.target.value)}
                  className="vi_0"
                />
              </div>

              {/* <div className="do-sear mt-2">
                <label>Return Date</label>
                <input
                  type="date"
                  min="0"
                  value={returndate1}
                  onChange={(e) => setreturndate1(e.target.value)}
                  className="vi_1"
                />
              </div> */}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                // tripDates();
                alreadyAdd();
                // handleClose1();
              }}
            >
              Add{" "}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default TripDateList;
