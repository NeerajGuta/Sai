import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import moment from "moment";

function Banner() {
  const [show, setShow] = useState();
  const [show1, setShow1] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [bannerimg, setbannerImg] = useState("");
  const addBanner = async () => {
    try {
      let config = {
        url: "/Addbanner",
        method: "post",
        baseURL: "http://saisathish.info/api/v1/admin",
        headers: { "content-type": "multipart/form-data" },
        data: {
          bannerimage: bannerimg,
        },
      };
      let res = await axios(config);
      if (res.status === 200) {
        console.log(res.data.success);
        window.location.reload(true);
        alert("Banner add successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.res) {
        alert(`${error.res.data.error}`);
      }
    }
  };

  const [data, setdata] = useState([]);
  useEffect(() => {
    const getbanner = async () => {
      try {
        await axios
          .get("http://saisathish.info/api/v1/admin/getbanner")
          .then((res) => {
            if (res.status == 200) {
              setdata(res.data.success);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };
    getbanner();
  }, []);

  const [bannerremove, setBannerremove] = useState("");
  const removeBanner = async () => {
    try {
      await axios
        .delete(
          "http://saisathish.info/api/v1/admin/remove/" + bannerremove?._id
        )
        .then((res) => {
          if (res.status == 200) {
            alert("Banner Delete Successfully");
            window.location.reload(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Banner List</h2>
        {data?.length < 4 ? (
          <>
            {" "}
            <button className="btn-primary btn" onClick={handleShow}>
              Add Banner
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* <div className="row p-2 align-items-end justify-content-around mb-3">
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
      </div> */}

      <div className="mb-3">
        <Table responsive bordered style={{ width: "-webkit-fill-available" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>
                <div>Banner</div>
              </th>

              <th>
                <div>Action</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((val, i) => {
              return (
                <tr key={data?._id}>
                  <td>{++i}</td>
                  <td>
                    <a
                      href={`http://saisathish.info/Product/${val?.bannerimage}`}
                      target="_blank"
                    >
                      <img
                        src={`http://saisathish.info/Product/${val?.bannerimage}`}
                        style={{ width: "200px", height: "100px" }}
                      />
                    </a>
                  </td>

                  <td>
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                        paddingTop: "30px",
                      }}
                    >
                      <div>
                        <AiFillDelete
                          onClick={() => {
                            handleShow1();
                            setBannerremove(val);
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
          <Modal.Title className="text-success">Add Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="do-sear mt-2">
            <label id="upload">Banner</label>
            <input
              type="file"
              id="upload"
              className="vi_0"
              accept="image/*"
              onChange={(e) => setbannerImg(e.target.files[0])}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex">
            <Button
              className="mx-2"
              variant="primary"
              onClick={() => {
                addBanner();
                handleClose();
              }}
            >
              Save
            </Button>
          </div>
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
          <Modal.Title className="text-success">Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Are you sure want to delete ?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              handleClose1();
              removeBanner();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Banner;
