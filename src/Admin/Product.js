import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { Button, Form, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsSearch } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";

function Product() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [productname, setProductname] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [decription, setDecription] = useState("");
  const [stock, setStock] = useState("");
  const [remaingStock, setRemaingStock] = useState("");
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("");
  const [discount, setDiscount] = useState("");
  //   const [howtouse, setHowtouse] = useState("");
  const Addproduct = async () => {
    try {
      const config = {
        url: "/AddProduct",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "multipart/form-data" },
        data: {
          productName: productname,
          image1: image1,
          image2: image2,
          image3: image3,
          image4: image4,
          category: "Sai Raksha Kavacha",
          productDiscription: decription,
          subcategory: "Sai Raksha Kavacha",
          remaingStock: remaingStock,
          totalStock: stock,
          price: amount,
          gst: gst,
          discount: discount,
          addedBy: "Sai group",
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        console.log(res.data.success);
        alert("Added Product Success");
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(error.response.data.error);
      }
    }
  };

  const [edit, setedit] = useState("");
  const editProduct = async () => {
    try {
      let config = {
        url: "/updateProduct",
        method: "put",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "multipart/form-data" },
        data: {
          id: edit,
          productName: productname,
          image1: image1,
          image2: image2,
          image3: image3,
          image4: image4,
          category: "Sai Raksha Kavacha",
          productDiscription: decription,
          subcategory: "Sai Raksha Kavacha",
          remaingStock: remaingStock,
          totalStock: stock,
          price: amount,
          gst: gst,
          discount: discount,
          addedBy: "Sai group",
        },
      };
      let res = await axios(config);

      if (res.status === 200) {
        // console.log(res.data.success);
        alert("Product update successfully");
        window.location.reload(true);
      }
    } catch (error) {
      console.log("error", error.response);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const [allproduct, setAllproduct] = useState([]);
  let getCatrDeatils = async () => {
    try {
      let res = await axios.get(
        "http://saisathish.info/api/Admin/getAllProduct"
      );
      if (res.status === 200) {
        setAllproduct(res.data.success);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCatrDeatils();
  }, []);

  const deletealladdcart = async (_id) => {
    let res = await axios.delete(
      "http://saisathish.info/api/Admin/deleteProduct/" + _id
    );
    if (res.status === 200) {
      alert("Successfully Deleted");
      getCatrDeatils();
    }
  };

  return (
    <div className="customerhead p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-c ">Product : Sai Raksha Kavacha</h2>
        <button className="btn-primary btn" onClick={handleShow}>
          {" "}
          Add Product
        </button>
      </div>
      {/* <div className="row p-2 align-items-end justify-content-around mb-3">
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
      </div> */}
      {/* <h2 style={{ alignSelf: "center" }}> Sai Raksha Kavacha</h2> */}
      <div className="container">
        <div className="row">
          <Table
            responsive
            striped
            bordered
            hover
            style={{ textAlign: "center", width: "max-content" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Name</th>
                <th>Product Images</th>
                <th style={{ width: "300px" }}>Discription</th>
                <th>TotalStock</th>
                <th>RemaingStock</th>
                <th>Amount</th>
                <th>Gst</th>
                <th>Discount</th>
                <th>AddedBy</th>

                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            {allproduct?.map((item, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item?.productName}</td>
                    <td>
                      <img
                        src={`http://saisathish.info/Product/${item?.image1}`}
                        alt=""
                        width={50}
                      />
                      <img
                        src={`http://saisathish.info/Product/${item?.image2}`}
                        alt=""
                        width={50}
                      />
                      <img
                        src={`http://saisathish.info/Product/${item?.image3}`}
                        alt=""
                        width={50}
                      />
                      <img
                        src={`http://saisathish.info/Product/${item?.image4}`}
                        alt=""
                        width={50}
                      />
                    </td>

                    <td>{item?.productDiscription}</td>
                    <td>{item?.totalStock} </td>

                    <td>{item?.remaingStock}</td>
                    <td>₹{item?.price}</td>
                    <td>{item?.gst}%</td>
                    <td>{item?.discount}%</td>
                    <td>{item?.addedBy}</td>

                    {/* <td>
                      <Button type="button" variant="danger">
                        <span>
                          <RiEditLine style={{ fontSize: "20" }} />
                        </span>
                      </Button>
                    </td> */}
                    <td>
                      <div className="d-flex gap-2 fs-4">
                        <BiSolidEdit
                          className="text-success "
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            handleShow1();
                            setedit(item);
                          }}
                        />
                        <AiFillDelete
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => deletealladdcart(item?._id)}
                        />
                      </div>
                      {/* <Button onClick={() => deletealladdcart(item?._id)} type="button" variant="danger">
                        <span>
                          <RiDeleteBin6Line style={{ fontSize: "20" }} />
                        </span>
                      </Button> */}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>

      {/* Add product */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="row">
              <div className="do-sear mt-2">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="vi_0"
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 1</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 2</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 3</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 4</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </div>
          </div>

          <div className="row">
            <div className="do-sear mt-2">
              <label>Discription</label>
              <input
                type="text"
                placeholder="Discription"
                onChange={(e) => setDecription(e.target.value)}
                className="vi_0"
              />
            </div>
          </div>

          <div className="row">
            <div className="do-sear mt-2">
              <label>Amount</label>
              <input
                type="number"
                min="0"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="2000"
                className="vi_1"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>TotalStock</label>
                <input
                  type="number"
                  placeholder="TotalStock"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setStock(e.target.value)}
                  width={20}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>RemaingStock</label>
                <input
                  type="number"
                  placeholder="RemaingStock"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setRemaingStock(e.target.value)}
                  width={20}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>Gst</label>
                <input
                  type="number"
                  placeholder="Gst"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setGst(e.target.value)}
                  width={20}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>Discount</label>
                <input
                  type="number"
                  placeholder="10%"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setDiscount(e.target.value)}
                  width={20}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() => Addproduct()} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit product */}
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="row">
              <div className="do-sear mt-2">
                <label>Product Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="vi_0"
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 1</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 2</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 3</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </div>
            <div className="do-sear mt-2">
              <label htmlFor="upload1">Upload Image 4</label>
              <input
                type="file"
                placeholder="Enter Location"
                name="file"
                id="upload1"
                accept="image/*"
                className="vi_0"
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </div>
          </div>

          <div className="row">
            <div className="do-sear mt-2">
              <label>Discription</label>
              <input
                type="text"
                placeholder="Discription"
                onChange={(e) => setDecription(e.target.value)}
                className="vi_0"
              />
            </div>
          </div>

          <div className="row">
            <div className="do-sear mt-2">
              <label>Amount</label>
              <input
                type="number"
                min="0"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="2000"
                className="vi_1"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>TotalStock</label>
                <input
                  type="number"
                  placeholder="TotalStock"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setStock(e.target.value)}
                  width={20}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>RemaingStock</label>
                <input
                  type="number"
                  placeholder="RemaingStock"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setRemaingStock(e.target.value)}
                  width={20}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>Gst</label>
                <input
                  type="number"
                  placeholder="Gst"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setGst(e.target.value)}
                  width={20}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="do-sear mt-2">
                <label>Discount</label>
                <input
                  type="number"
                  placeholder="10%"
                  className="vi_0"
                  min="0"
                  onChange={(e) => setDiscount(e.target.value)}
                  width={20}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Close
          </Button>
          <Button
            onClick={() => {
              editProduct();
              handleClose1();
            }}
            variant="primary"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;
