import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";

const PickUpList = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [data1, setData1] = useState([]);
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

  const [data2, setData2] = useState([]);
  const getPackage = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/Admin/getallpackage")
        .then((res) => {
          if (res.status == 200) {
            setData2(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setdata] = useState([]);
  const getPickUp = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/getallpickuplocation")
        .then((res) => {
          if (res.status == 200) {
            setdata(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPickUp();
    getTriptype();
    getPackage();
  }, []);

  const [triptype, setTriptype] = useState("");
  const [tripname, setTripname] = useState("");
  const [pickuplocation, setPickuplocation] = useState("");

  const addPickLocation = async () => {
    try {
      let config = {
        url: "/addpickuplocation",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          triptype: triptype,
          tripname: tripname,
          pickuplocation: pickuplocation,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert("Pick Up Location add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const [edit, setEdit] = useState("");
  const updatePickLocation = async () => {
    try {
      let config = {
        url: "/updatepickuplocation",
        method: "put",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          id: edit,
          triptype: triptype,
          tripname: tripname,
          pickuplocation: pickuplocation,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert("Pick Up Location add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const removePickUp = async (id) => {
    try {
      await axios
        .delete("http://saisathish.info/api/v1/removepickuplocation/" + id)
        .then((res) => {
          if (res.status == 200) {
            alert("Pick Up Location Delete Successfully");
            window.location.reload(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Pick Up List</h2>
          <button className="btn-primary btn" onClick={handleShow}>
            Add Pick Up List
          </button>
        </div>
        <div className="row p-2 align-items-end justify-content-around mb-3">
          <div className="col-lg-6 " style={{ width: "fit-content" }}>
            <label>Select :</label>
            <Form.Select
              aria-label="Default select example"
              style={{ height: "35px" }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={15}>20</option>
              <option value={15}>25</option>
            </Form.Select>
          </div>

          <div
            className="input-group col-lg-6"
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
                  <div>Pick Up Location with Time</div>
                </th>
                <th>
                  <div>Action</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.map((wrap, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{wrap?.triptype}</td>
                    <td>{wrap?.tripname}</td>
                    <td>{wrap?.pickuplocation}</td>

                    <td>
                      {" "}
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div>
                          <BiSolidEdit
                            onClick={() => {
                              handleShow1();
                              setEdit(wrap);
                            }}
                            className="text-success"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          />{" "}
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => {
                              removePickUp(wrap?._id);
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
                  value={triptype}
                  onChange={(e) => {
                    setTriptype(e.target.value);
                  }}
                >
                  <option value="">Select Package Type</option>
                  {data1?.map((ele) => {
                    return (
                      <option value={ele?.tripname}>{ele?.tripname}</option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Package Name</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                  value={tripname}
                  onChange={(e) => {
                    setTripname(e.target.value);
                  }}
                >
                  <option value="">Select Package Type</option>
                  {data2?.map((ele) => {
                    return (
                      <option value={ele?.packagename}>
                        {ele?.packagename}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>

            <div className="do-sear mt-2">
              <label>Pick Up Location</label>
              <input
                type="text"
                placeholder="Enter Passenger Pick Up Location"
                className="vi_0"
                value={pickuplocation}
                onChange={(e) => {
                  setPickuplocation(e.target.value);
                }}
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
              Edit Pick Up List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="do-sear mt-2">
                <label>Package Type</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                  value={triptype}
                  onChange={(e) => {
                    setTriptype(e.target.value);
                  }}
                >
                  <option value="">Select Package Type</option>
                  {data1?.map((ele) => {
                    return (
                      <option value={ele?.tripname}>{ele?.tripname}</option>
                    );
                  })}
                </Form.Select>
              </div>
              <div className="do-sear mt-2">
                <label>Package Name</label>
                <Form.Select
                  aria-label="Default select example"
                  style={{ height: "35px" }}
                  className="vi_0"
                  value={tripname}
                  onChange={(e) => {
                    setTripname(e.target.value);
                  }}
                >
                  <option value="">Select Package Type</option>
                  {data2?.map((ele) => {
                    return (
                      <option value={ele?.packagename}>
                        {ele?.packagename}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </div>

            <div className="do-sear mt-2">
              <label>Pick Up Location</label>
              <input
                type="text"
                placeholder="Enter Passenger Pick Up Location"
                className="vi_0"
                value={pickuplocation}
                onChange={(e) => {
                  setPickuplocation(e.target.value);
                }}
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
      </div>
    </>
  );
};
export default PickUpList;
