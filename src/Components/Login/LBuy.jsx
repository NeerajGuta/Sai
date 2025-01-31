import React, { useEffect, useState } from "react";
import "./Styles/LBuy.css";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
export default function LBuy() {
  const agentDetails = sessionStorage.getItem("user");
  // const [selectedImg, setSelectedImg] = useState("");
  // const [selectedimgid, setSelectedimgid] = useState(
  //   "/img/bussiness-img-5.webp"
  // );
  function changeImgNdAttr(id, imgSelected, itemid) {
    // setSelectedImg(imgSelected);
    // setSelectedimgid(itemid);
    document
      .getElementById(`img-div-${itemid}`)
      .setAttribute("src", imgSelected);
    // console.log(
    //   document.getElementById("parentImgDiv").children[0].id,
    //   9898999999
    // );
    const parentDivForImg = document.getElementById(`parentImgDiv-${itemid}`);
    console.log(parentDivForImg, `parentImgDiv-${itemid}`, 7473737);
    const childDivForImg = document.getElementById(id);
    parentDivForImg.children[0]["id"] == id
      ? (childDivForImg.style.border = "2px solid red")
      : (parentDivForImg.children[0].style.border = "2px solid #ffffff");
    parentDivForImg.children[1]["id"] == id
      ? (childDivForImg.style.border = "2px solid red")
      : (parentDivForImg.children[1].style.border = "2px solid #ffffff");
    parentDivForImg.children[2]["id"] == id
      ? (childDivForImg.style.border = "2px solid red")
      : (parentDivForImg.children[2].style.border = "2px solid #ffffff");
    parentDivForImg.children[3]["id"] == id
      ? (childDivForImg.style.border = "2px solid red")
      : (parentDivForImg.children[3].style.border = "2px solid #ffffff");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(2);

  const [allproduct, setAllproduct] = useState([]);
  const [SeeMore, setSeeMore] = useState(false);
  let getAllProductDeatils = async () => {
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

  // =====================================Add to cart=====================================
  const [increase, setincrease] = useState(1);
  const handleIncrease = () => {
    setincrease(increase + 1);
  };
  const Addcart = async (item) => {
    try {
      const user = JSON.parse(agentDetails);
      console.log("kar to rahua", user?._id);
      const config = {
        url: "/Addtocart",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: {
          userId: user?._id,
          productId: item?._id,
          price: item?.price,
          quantity: increase,
        },
      };

      let res = await axios(config);

      if (res.status === 200) {
        alert("Add to cart Successfully");

        // navigate('Cart');
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
        alert(error.response.data.error);
      }
    }
  };

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
  const currentProducts = allproduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      getAllProductDeatils();
    }
  }, [agentDetails]);
  console.log(3232323, allproduct);
  return (
    <div className="main-container">
      <Container fluid>
        {currentProducts?.map((items) => {
          return (
            <div className="row p-5">
              <div
                id={`parentImgDiv-${items?._id}`}
                className="col-lg-2 row justify-content-center mb-2"
              >
                <div
                  id={`img-${items?._id}-1`}
                  onClick={() =>
                    changeImgNdAttr(
                      `img-${items?._id}-1`,
                      `http://saisathish.info/Product/${items?.image1}`,
                      `${items?._id}`
                    )
                  }
                  // style={{
                  //   width: "210px",
                  //   height: "276px",
                  //   display: "flex",
                  //   justifyContent: "center",
                  // }}
                  className="side-image-div col-lg-12 col-sm-6"
                >
                  <img
                    src={`http://saisathish.info/Product/${items?.image1}`}
                    // style={{  }}
                    alt="no-image"
                    className="product-images"
                  />
                </div>
                <div
                  id={`img-${items?._id}-2`}
                  onClick={() => {
                    console.log(`img-${items?._id}-2`);
                    changeImgNdAttr(
                      `img-${items?._id}-2`,
                      `http://saisathish.info/Product/${items?.image2}`,
                      `${items?._id}`
                    );
                  }}
                  className="side-image-div col-lg-12 col-sm-6"
                >
                  <img
                    src={`http://saisathish.info/Product/${items?.image2}`}
                    alt="no-image"
                    className="product-images"
                  />
                </div>
                <div
                  id={`img-${items?._id}-3`}
                  onClick={() =>
                    changeImgNdAttr(
                      `img-${items?._id}-3`,
                      `http://saisathish.info/Product/${items?.image3}`,
                      `${items?._id}`
                    )
                  }
                  className="side-image-div col-lg-12 col-sm-6"
                >
                  <img
                    src={`http://saisathish.info/Product/${items?.image3}`}
                    alt="no-image"
                    className="product-images"
                  />
                </div>
                <div
                  id={`img-${items?._id}-4`}
                  onClick={() =>
                    changeImgNdAttr(
                      `img-${items?._id}-4`,
                      `http://saisathish.info/Product/${items?.image4}`,
                      `${items?._id}`
                    )
                  }
                  className="side-image-div col-lg-12 col-sm-6"
                >
                  <img
                    src={`http://saisathish.info/Product/${items?.image4}`}
                    alt="no-image"
                    className="product-images"
                  />
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img
                  id={`img-div-${items?._id}`}
                  src={`http://saisathish.info/Product/${items?.image1}`}
                  alt="no-image"
                  style={{
                    width: "300px",
                    height: "300px",
                    imageRendering: "pixelated",
                  }}
                />
              </div>
              <div className="col-lg-4">
                <h6 style={{ fontSize: "3rem" }} className="bigtext">
                  {items?.productName}
                </h6>
                <p style={{ fontSize: "25px" }}>
                  <b style={{ marginRight: "30px" }}>₹{items?.price}/-</b>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => Addcart(items)}
                  >
                    Add to cart
                  </button>
                </p>
                <div style={{ marginTop: "25px" }}>
                  <h5 style={{ color: "#F1BE05" }}>About</h5>
                  {!SeeMore ? (
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setSeeMore(true)}
                    >
                      see more...
                    </span>
                  ) : (
                    <></>
                  )}
                  {SeeMore ? (
                    <div>
                      {items?.productDiscription}
                      <span
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() => setSeeMore(false)}
                      >
                        show less
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="pagination d-flex justify-content-end mt-3 mb-3">
          {[...Array(Math.ceil(allproduct.length / ProductsPerPage))].map(
            (_, index) => (
              <Button
                style={{ marginRight: "5px" }}
                key={index}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Button>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
