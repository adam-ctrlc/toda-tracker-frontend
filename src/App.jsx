import { Routes, Route } from "react-router-dom";
import BoundaryCollection from "./pages/operator/BoundaryCollection";
import DriverAssignment from "./pages/operator/DriverAssignment";
import FleetManagement from "./pages/operator/FleetManagement";
import OperatorSidebar from "./components/OperatorSidebar";

export default function App() {
  return (
    <>
      {/* Public Routes */}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        {/* Operator Routes */}
        <Route path="/operator" element={<OperatorSidebar />}>
          <Route path="boundary-collection" element={<BoundaryCollection />} />
          <Route path="driver-assignment" element={<DriverAssignment />} />
          <Route path="fleet-management" element={<FleetManagement />} />
        </Route>
      </Routes>
    </>
  );
}
