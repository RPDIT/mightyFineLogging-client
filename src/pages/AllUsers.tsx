import { useState, useEffect } from "react";

interface User {
  email_address: string;
  password: string;
  created?: string;
  edited?: string;
  _id: string;
}

function AllUsers() {
  let [dbData, setDbData] = useState({
    getStatus: false,
    getInfo: [],
  });
  useEffect(() => {
    if (dbData.getStatus === false) {
      fetch("http://localhost:9000/permit", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((response) => response.json())
        .then((thisJson) => {
          setDbData({
            getStatus: true,
            getInfo: thisJson,
          });
        });
    }
  });

  return (
    <div>
      <h2>All Current Users</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {dbData.getInfo.length == 0 && <th>Loading...</th>}
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">ID</th>
            <th scope="col">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {dbData.getInfo.map((user: User, index) => (
            <tr key={user._id}>
              <td>{index}</td>
              <td>{user.email_address}</td>
              <td>{user.password}</td>
              <td>{user._id}</td>
              <td>{user.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
