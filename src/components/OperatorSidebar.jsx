import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export default function OperatorSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = [
    { to: "/operator/boundary-collection", label: "Boundary Collection" },
    { to: "/operator/driver-assignment", label: "Driver Assignment" },
    { to: "/operator/fleet-management", label: "Fleet Management" },
  ];

  const headerLinks = [{ to: "/", label: "Logout" }];

  return (
    <>
      <header className="flex flex-row gap-2 justify-between m-4">
        <h1>Operator</h1>
        <div>
          {headerLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <button>{link.label}</button>
            </Link>
          ))}
        </div>
      </header>
      <div className="flex m-4">
        <aside className="w-64">
          <ul className="flex flex-col">
            {sidebarLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
