import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { useParams } from "react-router-dom";

function CBMAgent() {
  const { id } = useParams();
  // console.log(id);
  const [user, setuser] = useState([]);
  // console.log(user, "all user");
  const [nochange, setNochange] = useState([]);

  const [cbmcommissionStatus, setcbmcommissionStatus] = useState("");
  const [cbmcommissionAmt, setcbmcommissionAmt] = useState("");
  const [cbmcommissionId, setcbmcommissionId] = useState("");
  const [cbmcommissionDate, setcbmcommissionDate] = useState("");

  // console.log(user);
  const [View, setView] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [CBMDetails, setCBMDetails] = useState({});

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

  const PayCBMCommission = async () => {
    try {
      let config = {
        url: "/UpdateUser",
        method: "put",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "application/json" },
        data: {
          id: View?._id,
          cbmcommissionStatus: cbmcommissionStatus,
          cbmcommissionAmt: cbmcommissionAmt,
          cbmcommissionId: cbmcommissionId,
          cbmcommissionDate: cbmcommissionDate,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        // console.log(res.data.success);
        window.location.reload(true);
        getAlluser();
        alert("Status Updated successfully");
        handleClose2();
        handleClose1();
        handleClose();
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  console.log("gggugugu: ", user);

  useEffect(() => {
    getAlluser();
  }, []);

  return (
    <>
      <div className="info-p pt-4 pb-2">
        <div className="container">
          <div className="">
            {/* <div>
              <Button>Agent</Button>
            </div> */}
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
                          Central Branch Manager
                        </div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>Agent ID</div>
                      </th>

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
                        <div style={{ width: "150px" }}>
                          CBM Commission Details
                        </div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>
                          Pay CBM's Commission
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {user
                      ?.filter((save) => {
                        return save?.cbmID?._id === id;
                      })
                      ?.map((items, index) => {
                        return (
                          <tr key={items?._id}>
                            <td>{++index}</td>
                            <td>{items?.cbmname}</td>
                            <td>{items?.partnerId}</td>
                            <td>{items?.businessname}</td>
                            <td>{items?.name}</td>
                            <td>{items?.phone}</td>
                            <td>{items?.email}</td>
                            <td>
                              {items?.cbmcommissionStatus ? (
                                <>
                                  <AiFillEye
                                    style={{
                                      cursor: "pointer",
                                      color: "blue",
                                      fontSize: "20px",
                                    }}
                                    onClick={() => {
                                      setView(items);
                                      handleShow1();
                                    }}
                                  />
                                </>
                              ) : (
                                <>--/--</>
                              )}
                            </td>
                            <td>
                              {items?.cbmcommissionStatus ? (
                                <>
                                  <div
                                    style={{
                                      color: "Green",
                                      fontSize: "20px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    PAID
                                  </div>
                                </>
                              ) : (
                                <>
                                  <Button
                                    onClick={() => {
                                      setView(items);
                                      handleShow();
                                    }}
                                  >
                                    AddPayment
                                  </Button>
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

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Payment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Form.Select
                    aria-label="Default select example"
                    style={{ height: "35px" }}
                    value={cbmcommissionStatus}
                    onChange={(e) => {
                      setcbmcommissionStatus(e.target.value);
                    }}
                  >
                    <option value="">Select Payment status</option>
                    <option value={false}>Pending</option>
                    <option value={true}>Cleared</option>
                  </Form.Select>
                </div>
                <label>Amount</label>
                <div className="do-sear mt-2" style={{ background: "white" }}>
                  <input
                    type="text"
                    placeholder={View?.cbmID?.branchcommission}
                    className="vi_0 mb-2"
                    value={cbmcommissionAmt}
                    onChange={(e) => {
                      setcbmcommissionAmt(e.target.value);
                    }}
                  />
                </div>
                <label>PaymentId</label>
                <div className="do-sear mt-2" style={{ background: "white" }}>
                  <input
                    type="text"
                    placeholder="PaymentId"
                    className="vi_0 mb-2"
                    value={cbmcommissionId}
                    onChange={(e) => {
                      setcbmcommissionId(e.target.value);
                    }}
                  />
                </div>
                <label>Payment Date</label>
                <div className="do-sear mt-2" style={{ background: "white" }}>
                  <input
                    type="date"
                    placeholder="PaymentId"
                    className="vi_0 mb-2"
                    value={cbmcommissionDate}
                    onChange={(e) => {
                      setcbmcommissionDate(e.target.value);
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

            <Modal
              show={show1}
              onHide={handleClose1}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-danger">
                  Commission Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Table responsive>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Commission Status</td>
                      <td>
                        {View?.cbmcommissionStatus ? (
                          <div
                            style={{
                              color: "Green",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            PAID
                          </div>
                        ) : (
                          <div
                            style={{
                              color: "Red",
                              fontSize: "20px",
                              fontWeight: "700",
                            }}
                          >
                            UNPAID
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Amount</td>
                      <td>{View?.cbmcommissionAmt}</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Payment Id</td>
                      <td>{View?.cbmcommissionId}</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Date</td>
                      <td>{View?.cbmcommissionDate}</td>
                    </tr>
                  </tbody>
                </Table>
              </Modal.Body>
              {/* <Modal.Footer>
                <Button
                  variant="danger"
                  // onClick={handleShow7}
                >
                  Update
                </Button>
              </Modal.Footer> */}
            </Modal>

            <Modal show={show2} onHide={handleClose2} centered>
              <Modal.Header closeButton>
                <Modal.Title style={{ color: "green" }}>
                  Cleared Payment
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>Are you sure ?</div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={PayCBMCommission}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default CBMAgent;
