import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Paymenthistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2 style={{ alignSelf: "center" }}>Transactions</h2>
     <div className="row">
     <div className="col-md-4">
        <p>search</p>
        <input
          type="text"S
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
       
      </div>
      <div className="col-md-4">
       
        <p>From Date</p>
        <DatePicker
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          selectsStart
          startDate={fromDate}
          endDate={toDate}
          placeholderText="From Date"
        />
       
      </div>
      <div className="col-md-4">
       
     
        <p>To Date</p>
        <DatePicker
          selected={toDate}
          onChange={(date) => setToDate(date)}
          selectsEnd
          startDate={fromDate}
          endDate={toDate}
          minDate={fromDate || undefined}
          placeholderText="To Date"
        />
      </div>
     </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User ID</th>
            <th>User Name</th>
            <th>Phone No.</th>
            <th>Payment Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user, index) => ( */}
          <tr>
            <td>{1}.</td>
            <td>Sai7374743</td>
            <td>ram</td>

            <td>986762735</td>
            <td>10-09-2023</td>
            <td>Approved</td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default Paymenthistory;
