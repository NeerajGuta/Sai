import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal, Pagination, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function CBMAgent() {
  const { id } = useParams();
  // console.log(id);
  const [user, setuser] = useState([]);
  // console.log(user, "all user");
  const [nochange, setNochange] = useState([]);
  // console.log(user);
  const getAlluser = async () => {
    try {
      await axios
        .get("http://saisathish.info/api/User/getAllUser")
        .then((res) => {
          if (res.status === 200) {
            setuser(res.data.success);
            setNochange(res.data.success);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAlluser();
  }, []);

  return (
    <>
      <div className="info-p pt-4 pb-2">
        <div className="container">
          <div className="">
            {/* <div>
              <Button>Agent</Button>
            </div> */}
            <div className="details-o pt-3 pb-3">
              <div className="mb-3 mt-3">
                <Table
                  responsive
                  bordered
                  style={{ width: "-webkit-fill-available" }}
                >
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>
                        <div style={{ width: "150px" }}>
                          Central Branch Manager
                        </div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>Agent ID</div>
                      </th>

                      <th>
                        <div style={{ width: "150px" }}>Business Name</div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>Person Name</div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>Person Number</div>
                      </th>
                      <th>
                        <div style={{ width: "150px" }}>Email Id</div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {user
                      ?.filter((save) => {
                        return save?.cbmID?._id === id;
                      })
                      ?.map((items, index) => {
                        return (
                          <tr key={items?._id}>
                            <td>{++index}</td>
                            <td>{items?.cbmname}</td>
                            <td>{items?.partnerId}</td>
                            <td>{items?.businessname}</td>
                            <td>{items?.name}</td>
                            <td>{items?.phone}</td>
                            <td>{items?.email}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CBMAgent;
