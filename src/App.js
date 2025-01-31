import "./App.css";
import "./Sai.css";
import React from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ListOfBusiness from "./Components/ListOfBusiness";
import NavbarScroll from "./Components/Navbar";
import AboutBusiness from "./Components/AboutBusiness";
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import Service from "./Components/Service";
import AboutService from "./Components/AboutService";
import Contact from "./Components/Contact";
import "aos/dist/aos.css";
import Enquiry from "./Components/Enquiry";
import AiMultiService from "./Components/AiMultiService";
import Privacy from "./Components/Privacy";
import Disclaimer from "./Components/Disclaimer";
import Terms from "./Components/Terms";
import Adminlogin from "./Admin/Adminlogin";
import AgentInfomation from "./Admin/AgentInfomation";
import AddAgent from "./Admin/AddAgent";
import Booking from "./Admin/Booking";
import Orderplace from "./Admin/Orderplace";
import Paymenthistory from "./Admin/Paymenthistory";
import Enquire from "./Admin/Enquire";
import Product from "./Admin/Product";
import Banner from "./Admin/Banner";
import AddPackage from "./Admin/AddPackage";
import TripDateList from "./Admin/TripDateList";
import PickUpList from "./Admin/PickUpList";
import AllInformation from "./Admin/AllInformation";
import PassangerDetails from "./Admin/PassengerDetails";
import TripPackage from "./Admin/TripPackage";
import AddCBM from "./Admin/AddCBM";
import NewAgent from "./Admin/NewAgent";
import CBMAgent from "./Admin/CBMAgent";
import Main from "./Admin/Main";
import CbmLogin from "./Components/Login/CbmLogin";
import CbmMain from "./Components/Login/CbmMain";
import CbmBookingAgents from "./Components/Login/CbmBookingAgents";
import CbmNewAgent from "./Components/Login/CbmNewAgent";
import ForgotPassword from "./Admin/ForgotPassword";
import Login from "./Components/Login/Login";
import NavBar from "./Components/Login/NavBar";
import LFooter from "./Components/Login/LFooter";
import LEnquiry from "./Components/Login/LEnquiry";
import LHome from "./Components/Login/LHome";
import LBookYathra from "./Components/Login/LBookYathra";
import LTerms_Conditions from "./Components/Login/LTerms_Conditions";
import LPrivacy_Policy from "./Components/Login/LPrivacy_Policy";
import LProfile from "./Components/Login/LProfile";

import LBuy from "./Components/Login/LBuy";
import LPaymentStatus from "./Components/Login/LPaymentStatus";
import LYPaymentStatus from "./Components/Login/LYPaymentStatus";
import LYFPaymentStatus from "./Components/Login/LYFPaymentStatus";
import LBookedDetails from "./Components/Login/LBookedDetails";
import LOrderHistroy from "./Components/Login/LOrderHistroy";
import LCart from "./Components/Login/LCart";
import LCheckout from "./Components/Login/LCheckout";
import LPaymentOrder from "./Components/Login/LPaymentOrder";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          {/* <ScrolltoTop /> */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/listofbusiness"
              element={
                <>
                  <NavbarScroll />
                  <ListOfBusiness />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aboutbusiness"
              element={
                <>
                  <NavbarScroll />
                  <AboutBusiness />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <NavbarScroll />
                  <AboutUs />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/gallery"
              element={
                <>
                  <NavbarScroll />
                  <Gallery />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/service"
              element={
                <>
                  <NavbarScroll />
                  <Service />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aboutservice"
              element={
                <>
                  <NavbarScroll />
                  <AboutService />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <NavbarScroll />
                  <Contact />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/aimultiservice"
              element={
                <>
                  <NavbarScroll />
                  <AiMultiService />
                  <Enquiry />
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <>
                  <Privacy />
                </>
              }
            />
            <Route
              path="/disclaimer"
              element={
                <>
                  <Disclaimer />
                </>
              }
            />
            <Route
              path="/terms-condition"
              element={
                <>
                  <Terms />
                </>
              }
            />
            <Route path="/admin" element={<Adminlogin />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route
              path="/add-agents"
              element={<Main children={<AgentInfomation />} />}
            />
            <Route
              path="/Customerdetails"
              element={<Main children={<AddAgent />} />}
            />
            <Route path="/Booking" element={<Main children={<Booking />} />} />
            <Route
              path="/Orderplace"
              element={<Main children={<Orderplace />} />}
            />
            <Route
              path="/Paymenthistory"
              element={<Main children={<Paymenthistory />} />}
            />
            <Route path="/Enquire" element={<Main children={<Enquire />} />} />
            <Route path="/Product" element={<Main children={<Product />} />} />
            <Route
              path="/Addagent"
              element={<Main children={<AddAgent />} />}
            />
            <Route
              path="/Addpackage"
              element={<Main children={<AddPackage />} />}
            />
            <Route
              path="/trip-list"
              element={<Main children={<TripDateList />} />}
            />
            <Route
              path="/pick-up-list"
              element={<Main children={<PickUpList />} />}
            />
            <Route
              path="/all-information/:id"
              element={<Main children={<AllInformation />} />}
            />
            <Route
              path="/passenger-details/:id"
              element={<Main children={<PassangerDetails />} />}
            />
            <Route
              path="/trippackage"
              element={<Main children={<TripPackage />} />}
            />
            <Route
              path="/central-branch"
              element={<Main children={<AddCBM />} />}
            />
            <Route
              path="/new-agents"
              element={<Main children={<NewAgent />} />}
            />
            <Route
              path="/cbm-all-agent/:id"
              element={<Main children={<CBMAgent />} />}
            />
            <Route path="/banner" element={<Main children={<Banner />} />} />
            {/* ==================After login===================== */}
            <Route
              path="/cbmlogin"
              element={
                <>
                  <CbmLogin />
                </>
              }
            />
            <Route
              path="/add-agents-cbm"
              element={<CbmMain children={<CbmBookingAgents />} />}
            />
            <Route
              path="/new-agents-cbm"
              element={<CbmMain children={<CbmNewAgent />} />}
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/LoginHome"
              element={
                <>
                  <NavBar />
                  <LHome />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginBookYatra"
              element={
                <>
                  <NavBar />
                  <LBookYathra />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginTerms&Conditions"
              element={
                <>
                  <NavBar />
                  <LTerms_Conditions />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginPrivacy&Policy"
              element={
                <>
                  <NavBar />
                  <LPrivacy_Policy />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginBuy"
              element={
                <>
                  <NavBar />
                  <LBuy />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/PaymentStatus"
              element={
                <>
                  <NavBar />
                  <LPaymentStatus />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/YatraPaymentStatus"
              element={
                <>
                  <NavBar />
                  <LYPaymentStatus />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/YatraFPaymentStatus"
              element={
                <>
                  <NavBar />
                  <LYFPaymentStatus />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginProfile"
              element={
                <>
                  <NavBar />
                  <LProfile />
                </>
              }
            />
            <Route
              path="/LoginBookedDetails"
              element={
                <>
                  <NavBar />
                  <LBookedDetails />
                  <LEnquiry />
                  <LFooter />
                </>
              }
            />
            <Route
              path="/LoginOrderHistroy"
              element={
                <>
                  <NavBar />
                  <LOrderHistroy />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginCart"
              element={
                <>
                  <NavBar />
                  <LCart />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LoginCheckout"
              element={
                <>
                  <NavBar />
                  <LCheckout />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
            <Route
              path="/LPaymentOrder"
              element={
                <>
                  <NavBar />
                  <LPaymentOrder />
                  <LFooter />
                  <LEnquiry />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
