import { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";

interface User {
  email_address: string;
  password: string;
  created?: string;
  edited?: string;
  _id: string;
  impoundment?: object;
}

interface Props {
  usernameInput: string;
  passwordInput1: string;
}

function AUser({ usernameInput, passwordInput1 }: Props) {
  let [dbData, setDbData] = useState<User>();
  useEffect(() => {
    if (!dbData) {
      fetch("http://localhost:9000/permit/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email_address: usernameInput,
          password: passwordInput1,
        }),
      })
        .then((response) => response.json())
        .then((thisJson) => {
          setDbData(thisJson.user_data);
        });
    }
  });
  return (
    <div>
      {dbData ? (
        <>
          <div>
            <h2>Info of a Single User</h2>
            <p>
              <h3>The User {dbData.email_address}</h3>
              <b>Was Created on {dbData.created}</b>
              <b>With an ID of {dbData._id}</b>
            </p>
            <TransactionTable userObj={dbData} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default AUser;
