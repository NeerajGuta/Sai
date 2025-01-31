import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";

const TripPackage = () => {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [packagename, setPackagename] = useState("");
  const [packagesCount, setPackagesCount] = useState(0);
  const addPackageType = async () => {
    try {
      let config = {
        url: "/addtrippackage",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          tripname: packagename,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert("Packages add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const [edit, setedit] = useState("");
  const editPackages = async () => {
    try {
      let config = {
        url: "/updatetrippackage",
        method: "put",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          id: edit,
          tripname: packagename,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        handleClose();
        window.location.reload(true);
        alert(`${res.data.success}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const removePackage = async (id) => {
    try {
      await axios
        .delete("http://saisathish.info/api/v1/removetrippackage/" + id)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.success);
            window.location.reload(true);
            alert("Packages delete successfully");
          }
        });
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const [data, setData] = useState([]);
  const getPackage = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/v1/getalltrippackage")
        .then((res) => {
          if (res.status == 200) {
            setData(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackage();
  }, []);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 5;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = data.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(data.length / productPerPage);

  return (
    <>
      <div className="customerhead p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Package Type List</h2>
          {data.length < 2 ? (
            <button className="btn-primary btn" onClick={handleShow}>
              Add PackageType
            </button>
          ) : (
            <></>
          )}
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

                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {displayPage?.map((item, index) => {
                return (
                  <tr key={item?._id}>
                    <td>{index + 1}</td>
                    <td>{item?.tripname}</td>

                    <td>
                      {" "}
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <BiSolidEdit
                            onClick={() => {
                              setedit(item);
                              handleShow1();
                            }}
                            className="text-success"
                            style={{
                              cursor: "pointer",
                              fontSize: "20px",
                            }}
                          />{" "}
                        </div>
                        {/* <div>
                          <AiFillDelete
                            onClick={() => {
                              removePackage(item?._id);
                            }}
                            className="text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          />{" "}
                        </div> */}
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
            <Modal.Title className="text-success">Add Package Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="do-sear mt-2">
              <label>Package Type</label>
              <input
                type="text"
                placeholder="Package Type"
                value={packagename}
                className="vi_0"
                onChange={(e) => {
                  setPackagename(e.target.value);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                className="mx-2"
                variant="primary"
                onClick={addPackageType}
              >
                Add
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
              Edit Package Type
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="do-sear mt-2">
              <label>Package Type</label>
              <input
                type="text"
                placeholder="Package Type"
                value={packagename}
                onChange={(e) => {
                  setPackagename(e.target.value);
                }}
                className="vi_0"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={editPackages}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default TripPackage;
