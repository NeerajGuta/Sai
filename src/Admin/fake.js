import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const steps = [
  "General Information",
  "Agent Details",
  "Consultant Manager",
  "Center Executive ",
];

function AgentInfomation() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStep = (step) => () => {
  //   setActiveStep(step);
  // };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    // handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // GeneralInformation Add
  const [businessname, setBusinessname] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddres2] = useState("");
  const [gstnumber, setGstnumber] = useState("");
  const [pannumber, setPannumber] = useState("");
  const [gstdocument, setGstdocument] = useState("");
  const [pandocument, setPandocument] = useState("");
  // Agent Details
  const [agentname, setAgentname] = useState("");
  const [agentphone, setAgentphone] = useState("");
  const [agentemail, setAgentemail] = useState("");
  const [agentbankname, setAgentbankname] = useState("");
  const [agentaccountnumber, setAgentaccountnumber] = useState("");
  const [agentifscCode, setAgentifscCode] = useState("");
  const [agentbranchname, setAgentbranchname] = useState("");
  const [agentcommissionamount, setAgentcommissionamount] = useState("");

  // Consultant Details Add

  const [consultantname, setConsultantname] = useState("");
  const [consultantphone, setConsultantphone] = useState("");
  const [consultantemail, setConsultantemail] = useState("");
  const [consultantbankname, setConsultantbankname] = useState("");
  const [consultantaccountnumber, setConsultantaccountnumber] = useState("");
  const [consultantifscCode, setConsultantifscCode] = useState("");
  const [consultantbranchname, setConsultantbranchname] = useState("");
  const [consultantcommissionamount, setConsultantcommissionamount] =
    useState("");

  // Centerexcutive Details Add

  const [centerexecutivename, setCenterexecutivename] = useState("");
  const [centerexecutivephone, setCenterexecutivephone] = useState("");
  const [centerexecutiveemail, setCenterexecutiveemail] = useState("");
  const [centerexecutivebankname, setCenterexecutivebankname] = useState("");
  const [centerexecutiveaccountnumber, setCenterexecutiveaccountnumber] =
    useState("");
  const [centerexecutiveifscCode, setCenterexecutiveifscCode] = useState("");
  const [centerexecutivebranchname, setCenterexecutivebranchname] =
    useState("");
  const [centerexecutivecommissionamount, setCenterexecutivecommissionamount] =
    useState("");

  const agentRegister = async () => {
      if (!businessname) return alert("Businessname Required !");
      if (!name) return alert("Name Required !");
      if (!number) return alert("Phone No Required !");
      if (!email) return alert("Email Required !");
      if (!password) return alert("Password Required !");
      if (!address) return alert("Address Required !");
      if (!gstnumber) return alert("GST Number Required !");
      if (!pannumber) return alert("Pan Number Required !");
      if (!gstdocument) return alert("GST Document Required !");
        alert("General Information register successfully");
       return setActiveStep(1);
    }
  };

  // Agent Details Add

  const agentDetails = async () => {
    try {
      if (!agentname) return alert("Name Required !");
      if (!agentphone) return alert("Phone No Required !");
      if (!agentemail) return alert(" Email Required !");
      if (!agentbankname) return alert("Bank Name Required !");
      if (!agentaccountnumber) return alert("Account Number Required !");
      if (!agentifscCode) return alert("IFSC code Required !");
      if (!agentbranchname) return alert("Branch Name Required !");
      if (!agentcommissionamount) return alert("Commission Amount Required !");

      let config = {
        url: "/addagent",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          agentname: agentname,
          agentphone: agentphone,
          agentemail: agentemail,
          agentbankname: agentbankname,
          agentaccountnumber: agentaccountnumber,
          agentifscCode: agentifscCode,
          agentbranchname: agentbranchname,
          agentcommissionamount: agentcommissionamount,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        // console.log(res.data.success);
        alert("Agent Details register successfully");
        setActiveStep(2);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const consultantDetails = async () => {
    try {
      if (!consultantname) return alert("Name Required !");
      if (!consultantphone) return alert("Phone No Required !");
      if (!consultantemail) return alert(" Email Required !");
      if (!consultantbankname) return alert("Bank Name Required !");
      if (!consultantaccountnumber) return alert("Account Number Required !");
      if (!consultantifscCode) return alert("IFSC code Required !");
      if (!consultantbranchname) return alert("Branch Name Required !");
      if (!consultantcommissionamount)
        return alert("Commission Amount Required !");

      let config = {
        url: "/addconsultant",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          consultantname: consultantname,
          consultantphone: consultantphone,
          consultantemail: consultantemail,
          consultantbankname: consultantbankname,
          consultantaccountnumber: consultantaccountnumber,
          consultantifscCode: consultantifscCode,
          consultantbranchname: consultantbranchname,
          consultantcommissionamount: consultantcommissionamount,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        // console.log(res.data.success);
        alert("Consultant Details register successfully");
        setActiveStep(3);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const centerexecutiveDetails = async () => {
    try {
      if (!centerexecutivename) return alert("Name Required !");
      if (!centerexecutivephone) return alert("Phone No Required !");
      if (!centerexecutiveemail) return alert(" Email Required !");
      if (!centerexecutivebankname) return alert("Bank Name Required !");
      if (!centerexecutiveaccountnumber)
        return alert("Account Number Required !");
      if (!centerexecutiveifscCode) return alert("IFSC code Required !");
      if (!centerexecutivebranchname) return alert("Branch Name Required !");
      if (!centerexecutivecommissionamount)
        return alert("Commission Amount Required !");

      let config = {
        url: "/addcenterexcutive",
        method: "post",
        baseURL: "http://saisathish.info/api/v1",
        headers: { "content-type": "application/json" },
        data: {
          centerexecutivename: centerexecutivename,
          centerexecutivephone: centerexecutivephone,
          centerexecutiveemail: centerexecutiveemail,
          centerexecutivebankname: centerexecutivebankname,
          centerexecutiveaccountnumber: centerexecutiveaccountnumber,
          centerexecutiveifscCode: centerexecutiveifscCode,
          centerexecutivebranchname: centerexecutivebranchname,
          centerexecutivecommissionamount: centerexecutivecommissionamount,
        },
      };
      let res = await axios(config);
      if (res.status == 200) {
        // console.log(res.data.success);
        alert("Center Executive Details register successfully");
        setActiveStep(3);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(`${error.response.data.error}`);
      }
    }
  };

  const isStep0Valid = () => {
    agentRegister();
  };
  const isStep1Valid = () => {
    agentDetails();
  };
  const isStep2Valid = () => {
    consultantDetails();
  };
  const isStep3Valid = () => {
    centerexecutiveDetails();
  };
  const handleStep = (step) => () => {
    if (
      (step === 0 && isStep0Valid(agentRegister())) ||
      (step === 1 && isStep1Valid(agentDetails())) ||
      (step === 2 && isStep2Valid(consultantDetails())) ||
      (step === 3 && isStep3Valid(centerexecutiveDetails()))
      // You can add more steps here
    ) {
      setActiveStep(step);
    }
  };

  const handleNext = () => {
    if (activeStep == 0) {
      return agentRegister();
    } else if (activeStep == 1) {
      // Check if the current step is valid before proceeding
      return agentDetails();
    } else if (activeStep == 2) {
      // Check if the current step is valid before proceeding
      return consultantDetails();
    } else {
      return centerexecutiveDetails();
    }
  };

  return (
    <>
      <div className="Stepper-info " style={{ padding: "20px" }}>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep == 3 ? (
              <React.Fragment>
                <Typography
                  sx={{ mt: 2, mb: 1 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  All steps completed successfully
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "center",
                      pt: 2,
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleReset();
                        window.location.reload(true);
                      }}
                    >
                      Back
                    </Button>
                  </Box>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep == 0 ? (
                  <>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                      <div className="container" style={{ padding: "5px" }}>
                        <div className="row ">
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Contact Person Name{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Contact Person Name"
                                className="vi_0"
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Contact Person Number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Contact Person Number"
                                className="vi_0"
                                value={number}
                                onChange={(e) => {
                                  setNumber(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                GST Number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label htmlFor="upload">
                                GST Document{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Pan Number{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Pan Number"
                                className="vi_0"
                                value={pannumber}
                                onChange={(e) => {
                                  setPannumber(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label htmlFor="upload1">
                                Pan Document{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="file"
                                id="upload1"
                                accept="image/*"
                                className="vi_0"
                                onChange={(e) => {
                                  setPandocument(e.target.files[1]);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Address 1{" "}
                                <span style={{ color: "red" }}>*</span>
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Address 2{" "}
                                <span style={{ color: "green" }}>
                                  (Optional)
                                </span>
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
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <div className="do-sear mt-2">
                              <label>
                                Confirm Password{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Enter Your Confirm Password"
                                className="vi_0"
                                value={cpassword}
                                onChange={(e) => {
                                  setCpassword(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </>
                ) : (
                  <>
                    {activeStep == 1 ? (
                      <>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                          <div className="container" style={{ padding: "5px" }}>
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Name <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="vi_0"
                                    value={agentname}
                                    onChange={(e) => {
                                      setAgentname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Phone Number{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your Phone Number"
                                    className="vi_0"
                                    value={agentphone}
                                    onChange={(e) => {
                                      setAgentphone(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Email Id{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your Email Id"
                                    className="vi_0"
                                    value={agentemail}
                                    onChange={(e) => {
                                      setAgentemail(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Bank Name{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your Bank Name"
                                    className="vi_0"
                                    value={agentbankname}
                                    onChange={(e) => {
                                      setAgentbankname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Account Number{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your A/C Number"
                                    className="vi_0"
                                    value={agentaccountnumber}
                                    onChange={(e) => {
                                      setAgentaccountnumber(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    IFSC Code{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your IFSC Code"
                                    className="vi_0"
                                    value={agentifscCode}
                                    onChange={(e) => {
                                      setAgentifscCode(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Branch Name{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Your Branch Name "
                                    className="vi_0"
                                    value={agentbranchname}
                                    onChange={(e) => {
                                      setAgentbranchname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="do-sear mt-2">
                                  <label>
                                    Commission Amount{" "}
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Eg:500"
                                    className="vi_0"
                                    value={agentcommissionamount}
                                    onChange={(e) => {
                                      setAgentcommissionamount(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Typography>
                      </>
                    ) : (
                      <>
                        {activeStep == 2 ? (
                          <>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                              <div
                                className="container"
                                style={{ padding: "5px" }}
                              >
                                <div className="row ">
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="vi_0"
                                        value={consultantname}
                                        onChange={(e) => {
                                          setConsultantname(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Phone Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="vi_0"
                                        value={consultantphone}
                                        onChange={(e) => {
                                          setConsultantphone(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Email Id{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Email Id"
                                        className="vi_0"
                                        value={consultantemail}
                                        onChange={(e) => {
                                          setConsultantemail(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Bank Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Bank Name"
                                        className="vi_0"
                                        value={consultantbankname}
                                        onChange={(e) => {
                                          setConsultantbankname(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Account Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your A/C Number"
                                        className="vi_0"
                                        value={consultantaccountnumber}
                                        onChange={(e) => {
                                          setConsultantaccountnumber(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        IFSC Code{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your IFSC Code"
                                        className="vi_0"
                                        value={consultantifscCode}
                                        onChange={(e) => {
                                          setConsultantifscCode(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Branch Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Branch Name "
                                        className="vi_0"
                                        value={consultantbranchname}
                                        onChange={(e) => {
                                          setConsultantbranchname(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Commission Amount{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Eg:500"
                                        className="vi_0"
                                        value={consultantcommissionamount}
                                        onChange={(e) => {
                                          setConsultantcommissionamount(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                              <div
                                className="container"
                                style={{ padding: "5px" }}
                              >
                                <div className="row ">
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="vi_0"
                                        value={centerexecutivename}
                                        onChange={(e) => {
                                          setCenterexecutivename(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Phone Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Phone Number"
                                        className="vi_0"
                                        value={centerexecutivephone}
                                        onChange={(e) => {
                                          setCenterexecutivephone(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Email Id{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Email Id"
                                        className="vi_0"
                                        value={centerexecutiveemail}
                                        onChange={(e) => {
                                          setCenterexecutiveemail(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Bank Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Bank Name"
                                        className="vi_0"
                                        value={centerexecutivebankname}
                                        onChange={(e) => {
                                          setCenterexecutivebankname(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Account Number{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your A/C Number"
                                        className="vi_0"
                                        value={centerexecutiveaccountnumber}
                                        onChange={(e) => {
                                          setCenterexecutiveaccountnumber(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        IFSC Code{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your IFSC Code"
                                        className="vi_0"
                                        value={centerexecutiveifscCode}
                                        onChange={(e) => {
                                          setCenterexecutiveifscCode(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Branch Name{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Enter Your Branch Name "
                                        className="vi_0"
                                        value={centerexecutivebranchname}
                                        onChange={(e) => {
                                          setCenterexecutivebranchname(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="do-sear mt-2">
                                      <label>
                                        Commission Amount{" "}
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="Eg:500"
                                        className="vi_0"
                                        value={centerexecutivecommissionamount}
                                        onChange={(e) => {
                                          setCenterexecutivecommissionamount(
                                            e.target.value
                                          );
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Typography>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    onClick={() => {
                      handleNext();
                    }}
                    sx={{ mr: 1 }}
                  >
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button
                        onClick={() => {
                          handleNext();
                        }}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Submit"
                          : "Complete Step"}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </>
  );
}

export default AgentInfomation;
