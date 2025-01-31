import React from "react";
import { Link } from "react-router-dom";
import {
  LuActivity,
  LuBookMarked,
  LuFileQuestion,
  LuIndianRupee,
  LuListOrdered,
  LuLogOut,
  LuPackageX,
  LuUserCog,
} from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { useTheme } from "../../Context/ThemeContext";
export default function CbmSide() {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <>
        <div className="si09 ddd">
          <div className="lo-ad">
            <img
              src="../assets/logo.webp"
              alt="adminlogo"
              style={{ width: "200px", height: "130px" }}
            />
          </div>
          <ul className={`main-content ${isDarkMode ? "dark" : "light"}`}>
            <Link to="/add-agents-cbm">
              <li className="a-ele ">
                <span>
                  <MdOutlineSupportAgent style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Booking Agent</span>
              </li>
            </Link>
            {/* <Link to="/banner">
              <li className="a-ele ">
                <span>
                  <AiOutlineAppstoreAdd style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Banner</span>
              </li>
            </Link>
            <Link to="/trippackage">
              <li className="a-ele ">
                <span>
                  <AiOutlineAppstoreAdd style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Package Type</span>
              </li>
            </Link>

            <Link to="/Addpackage">
              <li className="a-ele ">
                <span>
                  <AiOutlineAppstoreAdd style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Package</span>
              </li>
            </Link>
            <Link to="/trip-list">
              <li className="a-ele ">
                <span>
                  <AiOutlineAppstoreAdd style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Trip Date </span>
              </li>
            </Link>
            <Link to="/pick-up-list">
              <li className="a-ele ">
                <span>
                  <AiOutlineAppstoreAdd style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Pick Up </span>
              </li>
            </Link>
            <Link to="/Booking">
              <li className="a-ele ">
                <span>
                  <LuBookMarked style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Booking</span>
              </li>
            </Link>

            <Link to="/Enquire">
              <li className="a-ele ">
                <span>
                  <LuFileQuestion style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Enquiries</span>
              </li>
            </Link>
            <Link to="/Product">
              <li className="a-ele ">
                <span>
                  <LuPackageX style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Product</span>
              </li>
            </Link>
            <Link to="/Orderplace">
              <li className="a-ele ">
                <span>
                  <LuListOrdered style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Order place</span>
              </li>
            </Link> */}
            <Link to="/cbmlogin">
              <li className="a-ele ">
                <span>
                  <LuLogOut style={{ fontSize: "20px" }} />
                </span>
                <span className="ms-2">Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </>
    </div>
  );
}
