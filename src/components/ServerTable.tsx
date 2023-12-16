import { ReactNode, useEffect, useState } from "react";
import TableRow from "./TableRow";

interface Props {
  byStatus: string;
}

function ServerTable({ byStatus }: Props) {
  let [dbData, setDbData] = useState({
    getStatus: false,
    getInfo: [],
  });
  useEffect(() => {
    if (dbData.getStatus === false) {
      fetch(`http://localhost:9000/` + byStatus, {
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
    <>
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              {dbData.getInfo.length == 0 && <th>Loading...</th>}
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Active Status</th>
              <th scope="col">Date of Last Edit</th>
            </tr>
          </thead>
          <tbody>
            <TableRow sessions={dbData.getInfo} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ServerTable;
