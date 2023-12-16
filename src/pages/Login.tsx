import { useState, useRef } from "react";

import AUser from "./AUser";

function Login() {
  const [foundUsers, setFoundUsers] = useState([]);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [dataRequest, setDataRequst] = useState(false);
  const ref = useRef(null);

  function userAuth() {
    let USERS = [];
    setDataRequst(true);
    for (let i = 0; i <= foundUsers.length; i++) {
      USERS.push(foundUsers[i]);
    }
    USERS.push();
    setFoundUsers([]);
    setFoundUsers(USERS);
  }

  return (
    <div className="container">
      <h2> Login Page</h2>
      <form>
        <div>
          <div className="mb-3 --bs-body-color-rgb">
            <label htmlFor="inputEmailAddress1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmailAddress1"
              aria-describedby={"emailHelp"}
              onChange={(event) => {
                setEmailInput(event.target.value);
                console.log(event.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Email with anyone else
            </div>
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputpassword1"
              aria-describedby={"passowrdHelp"}
              onChange={(event) => {
                setPasswordInput(event.target.value);
                console.log(event.target.value);
              }}
              ref={ref}
            />
            <div id="passwordHelp" className="form-text">
              Never Share your Password with anyone
            </div>
          </div>
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            ref={ref}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          form="inputEmail"
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            setDataRequst(false);
            console.log("clicked");
            userAuth();
          }}
        >
          Submit
        </button>
      </form>
      {dataRequest == true ? (
        <AUser usernameInput={emailInput} passwordInput1={passwordInput} />
      ) : null}
    </div>
  );
}
//  place Auser in a constructor function that places it in the foundUsers Array to be mapped into the return here
export default Login;
