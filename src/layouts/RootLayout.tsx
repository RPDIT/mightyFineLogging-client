import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header className="text-center">
        <h1 className="display-1 text-center">Mighty Fine Logging</h1>
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  <NavLink to="/">Home</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="available">Available Sessions</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="unavailable">Unavailable Sessions</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="login">Login</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="signup">Sign Up</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="users">All Users</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
