import React, { useEffect } from "react";
import { FaUserShield } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSearch, BsSun } from "react-icons/bs";
import { useTheme } from "../../Context/ThemeContext";
import { Form, FormCheck } from "react-bootstrap";

export default function CbmHeader() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <div>
        <div className={`header ${isDarkMode ? "dark" : "light"}`}>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 d-flex justify-content-center">
              {/* <div class="input-group ">
            <span class="input-group-text" id="basic-addon1">
              <BsSearch />
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-describedby="basic-addon1"
            />
          </div> */}
            </div>
            {/* <div className="col-lg-7"></div> */}
            <div
              className="col-lg-8  "
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
                gap: "30px",
                alignItems: "center",
                fontSize: "25px",
              }}
            >
              <Form>
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  onClick={toggleTheme}
                />
              </Form>

              <img
                src="../assets/user.png"
                style={{ height: "50px", width: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
