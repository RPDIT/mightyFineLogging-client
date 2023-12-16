import { useState } from "react";

function UserCreation() {
  const [creationEmail, setCreationEmail] = useState("");
  const [creationPassword, setCreationPassword] = useState("");
  const [dataStatus, setDataStatus] = useState(false);
  const [newUser, setNewUser] = useState({});

  async function createUser() {
    if (dataStatus == false) {
      fetch("http://localhost:9000/permit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email_address: creationEmail,
          password: creationPassword,
        }),
      })
        .then((response) => response.json())
        .then((thisJson) => {
          setNewUser(thisJson);
        });
      setDataStatus(true);
    }
  }

  return (
    <div className="container">
      <h2> User Creation</h2>
      <form>
        <div>
          <div className="mb-3 --bs-body-color-rgb">
            <label htmlFor="inputEmailAddress1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="creationEmailAddress1"
              aria-describedby={"emailHelp"}
              onChange={(event) => {
                setCreationEmail(event.target.value);
                console.log(event.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Email with anyone else
            </div>
            <label htmlFor="creationPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="creationPassword1"
              aria-describedby={"passowrdHelp"}
              onChange={(event) => {
                setCreationPassword(event.target.value);
                console.log(event.target.value);
              }}
            />
            <div id="passwordHelp" className="form-text">
              Never Share your Password with anyone, and ensure you choose a
              strong Password to protect your account.
            </div>
          </div>
          <input type="checkbox" className="form-check-input" id="terms" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I Want to Create My Account
          </label>
        </div>
        <button
          form="creationEmail"
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setDataStatus(false);
            console.log("clicked");
            createUser();
            setCreationEmail("");
            setCreationPassword("");
          }}
        >
          Submit
        </button>
      </form>
      {dataStatus == true ? (
        <div>
          <h2>Info of a Single User</h2>
          <p>
            <h3>The User {newUser.email_address}</h3>
            <b>Was Created on {newUser.created}</b>
            <b>With an ID of {newUser._id}</b>
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default UserCreation;
