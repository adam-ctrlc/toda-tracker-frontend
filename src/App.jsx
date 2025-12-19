import { Routes, Route } from "react-router-dom";
import BoundaryCollection from "./pages/operator/boundary-collection";
import DriverAssignment from "./pages/operator/driver-assignment";
import FleetManagement from "./pages/operator/fleet-management";
import Profile from "./pages/operator/profile";
import OperatorSidebar from "./components/OperatorSidebar";
import Landing from "./pages/landing/index";
import Login from "./pages/login";

export default function App() {
  return (
    <>
      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Operator Routes */}
        <Route path="/operator" element={<OperatorSidebar />}>
          <Route path="boundary-collection" element={<BoundaryCollection />} />
          <Route path="driver-assignment" element={<DriverAssignment />} />
          <Route path="fleet-management" element={<FleetManagement />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
