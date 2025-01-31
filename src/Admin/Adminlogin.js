import axios from "axios";
import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { HiEyeOff } from "react-icons/hi";

function Adminlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [acc, setAcc] = useState(false);

  const loginAdmin = async () => {
    // e.preventDefault()
    try {
      const config = {
        url: "/login",
        method: "post",
        baseURL: "http://saisathish.info/api/Admin",
        headers: { "content-type": "application/json" },
        data: { email: email, password: password },
      };
      let res = await axios(config);
      // console.log(res, "res>>>>>>>>>>>>>>>>>.");
      if (res.status == 200) {
        alert("Successfully login");
        window.sessionStorage.setItem(
          "admin",
          JSON.stringify(res.data.success)
        );
        // window.sessionStorage.setItem("token", res.data.token);
        window.location.assign("/central-branch");
      }
    } catch (error) {
      alert(error.response.data.error);
      console.log(error);
    }
  };

  const handlePassword = () => {
    setAcc(!acc);
  };

  return (
    <>
      <div className="add">
        <div className="container">
          <div className="fw_90">
            <div className="add_0">
              <div className="im09">
                <img
                  src="./assets/logo.webp"
                  alt="adminlogo"
                  className="di_90"
                />
              </div>
              <div className="add-90">
                <form>
                  <div className="sd_00 mb-2">
                    <label>Email</label> <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="name_0"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="sd_00 mb-2">
                    <label>Password</label>
                    <br />
                    <input
                      type={acc ? "text" : "password"}
                      placeholder="Enter your password"
                      className="name_0"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "65%",
                        right: "46px",
                        cursor: "pointer",
                      }}
                      onClick={handlePassword}
                    >
                      {acc ? <HiEyeOff /> : <BsEyeFill />}
                    </div>
                  </div>
                  <div>
                    <a href="/forgot">Forgot Password</a>
                  </div>
                  <div className="sd_00 mt-4">
                    <button type="button" onClick={(e) => loginAdmin(e)}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminlogin;
