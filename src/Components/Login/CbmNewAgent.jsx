import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

export default function CbmNewAgent() {
  const cbmObj = sessionStorage.getItem("CBMData");
  const [data, setdata] = useState([]);
  const getCBM = async () => {
    try {
      await axios.get("http://saisathish.info/api/v1/getallcbm").then((res) => {
        if (res.status == 200) {
          setdata(res.data.success);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!cbmObj) {
      return alert("Please login first!!!");
    } else {
      getCBM();
    }
  }, []);

  // Agents Add
  // const [cbmname, setCbmname] = useState("");
  // const [cbmObj, setCbmObj] = useState({});
  const [businessname, setBusinessname] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddres2] = useState("");
  const [gstnumber, setGstnumber] = useState("");
  const [aadhardocument, setAadhardocument] = useState([]);
  const handleFileChangeadhar = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 2) {
      alert("Please select only up to two images");
      e.target.value = null;
      return;
    }
    setAadhardocument(selectedFiles);
  };
  const [gstdocument, setGstdocument] = useState("");
  const [agentprofile, setAgentprofile] = useState("");
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
  const agentRegister = async () => {
    // console.log(
    //   "893kdkd",
    //   JSON.parse(cbmObj)?._id,
    //   "mgj43",
    //   JSON.parse(cbmObj)?.firstname
    // );
    try {
      if (!businessname) return alert("Businessname Required !");
      if (!name) return alert("Name Required !");
      if (!number) return alert("Phone No Required !");
      if (!email) return alert("Email Required !");
      if (!password) return alert("Password Required !");
      if (!address) return alert("Address Required !");
      // if (!gstnumber) return alert("GST Number Required !");
      if (!aadhardocument) return alert("Aadhar Document Required !");
      // if (!gstdocument) return alert("GST Document Required !");

      let config = {
        url: "/registrationUser",
        method: "post",
        baseURL: "http://saisathish.info/api/User",
        headers: { "content-type": "multipart/form-data" },
        data: {
          cbmID: JSON.parse(cbmObj)?._id,
          cbmname: JSON.parse(cbmObj)?.firstname,
          businessname: businessname,
          name: name,
          phone: number,
          email: email,
          address: address,
          password: password,
          gstnumber: gstnumber,
          aadhardocument: aadhardocument,
          address2: address2,
          gstdocument: gstdocument,
          agentprofile: agentprofile,
          pandocument: pandocument,
          shopimages: shopimages,
          bankname: bankname,
          accountnumber: accountnumber,
          ifscCode: ifsccode,
          branchname: branchname,
          commissionamount: commissionamount,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        console.log(res.data.success);
        alert("Agent Register successfully");
        window.location.assign("/add-agents-cbm");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };
  return (
    <div>
      <div className="container" style={{ padding: "5px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="header-c ">Agents</h2>
        </div>
        <div className="row ">
          {/* <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>Central Branch Manager</label>
              <Form.Select
                aria-label="Default select example"
                style={{ height: "35px" }}
                className="vi_0"
                // value={cbmname}
                onChange={(e) => {
                  setCbmObj(e.target.value);
                }}
              >
                <option value="">Select Central Branch Manager</option>
                {data?.map((ele) => {
                  return (
                    <option value={JSON.stringify(ele)}>
                      {ele?.firstname}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div> */}
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Firm Name / Business Name{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your  Firm Name / Business Name"
                className="vi_0"
                value={businessname}
                onChange={(e) => {
                  setBusinessname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Agent Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="vi_0"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Agent Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="vi_0"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Email Id <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email Id"
                className="vi_0"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>GST Number</label>
              <input
                type="text"
                placeholder="Enter Your GST Number"
                className="vi_0"
                value={gstnumber}
                onChange={(e) => {
                  setGstnumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Bank Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Bank Name"
                className="vi_0"
                value={bankname}
                onChange={(e) => {
                  setBankname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Branch Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Branch Name"
                className="vi_0"
                value={branchname}
                onChange={(e) => {
                  setBranchname(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Account Number<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Account Number"
                className="vi_0"
                value={accountnumber}
                onChange={(e) => {
                  setAccountnumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                IFSC Code<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter IFSC Code"
                className="vi_0"
                value={ifsccode}
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Commission <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="500"
                className="vi_0"
                value={commissionamount}
                onChange={(e) => {
                  setCommissionamount(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label htmlFor="upload1">
                Agent Image <span style={{ color: "red" }}>*</span>
              </label>
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
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label htmlFor="upload">GST Document</label>
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
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Aadhar Documents(Both sides){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangeadhar(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Pan Document (Both sides){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChangepandocument(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Address 1 <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your  Address 1"
                className="vi_0"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Address 2
                {/* <span style={{ color: "green" }}>(Optional)</span> */}
              </label>
              <input
                type="text"
                placeholder="Enter Your  Address 2"
                className="vi_0"
                value={address2}
                onChange={(e) => {
                  setAddres2(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label>
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="vi_0"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <label id="fileinput">
                Shop Images (FrontSide & Inside){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="file"
                className="vi_0"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChange(e)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="do-sear mt-2">
              <button
                className="btn-primary btn mt-3 mb-3"
                style={{ width: "155px" }}
                onClick={agentRegister}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
