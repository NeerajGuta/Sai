import React from "react";
import Cbmside from "./CbmSide";
import Cbmheader from "./CbmHeader";
import { useTheme } from "../../Context/ThemeContext";
export default function CbmMain(props) {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <>
        <div className="dash">
          <div className="admin-all">
            <div className="">
              <div
                className="left-side mov"
                style={{ position: "sticky", top: "0", height: "100vh" }}
              >
                <Cbmside />
              </div>
            </div>

            <div
              className={`right-admin main-content ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <Cbmheader />
              {props.children}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
