import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import ASessions from "./pages/ASessions";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import AllUsers from "./pages/AllUsers";
import UserCreation from "./pages/UserCreation";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import UaSessions from "./pages/UaSessions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="available" element={<ASessions />} />
      <Route path="unavailable" element={<UaSessions />} />
      <Route path="login" element={<Login />} />
      <Route path="users" element={<AllUsers />} />
      <Route path="signup" element={<UserCreation />} />
    </Route>
  )
);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
