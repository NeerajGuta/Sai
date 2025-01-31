import React from "react";
import Side from "./Side";
import Adminheader from "./AdminHeader";
import { useTheme } from "../Context/ThemeContext";

function Main(props) {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="dash">
        <div className="admin-all">
          <div className="" style={{ width: "18%" }}>
            <div
              className="left-side"
              style={{ position: "sticky", top: "0", height: "100vh" }}
            >
              <Side />
            </div>
          </div>

          <div
            className={`right-admin main-content ${
              isDarkMode ? "dark" : "light"
            }`}
          >
            <Adminheader />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
