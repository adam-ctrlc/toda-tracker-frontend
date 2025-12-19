import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Users,
  Wallet,
  LogOut,
  Menu,
  X,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function OperatorSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) setSidebarOpen(false);
  }, [location.pathname, isMobile]);

  const sidebarLinks = [
    { to: "/operator/fleet-management", label: "Fleet Management", icon: Car },
    {
      to: "/operator/driver-assignment",
      label: "Driver Assignment",
      icon: Users,
    },
    {
      to: "/operator/boundary-collection",
      label: "Boundary Collection",
      icon: Wallet,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden relative">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          ${
            isMobile
              ? "fixed inset-y-0 left-0 z-50 transition-transform duration-300"
              : "relative transition-all duration-300"
          }
          ${
            sidebarOpen
              ? "translate-x-0 w-72"
              : "-translate-x-full lg:translate-x-0 lg:w-20"
          }
          bg-white border-r border-slate-200 flex flex-col h-full
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <div
            className={`flex items-center gap-3 ${
              sidebarOpen || isMobile ? "flex" : "hidden"
            }`}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="text-white h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-slate-900">TodaTrack</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive(link.to)
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <link.icon
                className={`h-5 w-5 ${
                  isActive(link.to)
                    ? "text-white"
                    : "group-hover:text-primary transition-colors"
                }`}
              />
              {(sidebarOpen || (isMobile && sidebarOpen)) && (
                <span className="font-medium whitespace-nowrap">
                  {link.label}
                </span>
              )}
              {sidebarOpen && isActive(link.to) && (
                <ChevronRight className="ml-auto h-4 w-4 opacity-70" />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-1">
          <Link
            to="/operator/profile"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              isActive("/operator/profile")
                ? "bg-primary text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${
                isActive("/operator/profile")
                  ? "bg-white/20 border-white/30 text-white"
                  : "bg-slate-100 border-slate-200 text-primary"
              }`}
            >
              AS
            </div>
            {sidebarOpen && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate">Adam Smith</span>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive("/operator/profile")
                      ? "text-white/70"
                      : "text-slate-400"
                  }`}
                >
                  View Profile
                </span>
              </div>
            )}
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 group"
          >
            <LogOut className="h-5 w-5 group-hover:text-red-600 transition-colors" />
            {sidebarOpen && <span className="text-sm font-bold">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 z-10">
          <div className="flex items-center gap-4">
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 -ml-2 text-slate-500 hover:bg-slate-50 rounded-lg"
              >
                <Menu size={20} />
              </button>
            )}
            <h1 className="text-base lg:text-lg font-semibold text-slate-900 truncate max-w-[150px] lg:max-w-none">
              {sidebarLinks.find((l) => isActive(l.to))?.label || "Dashboard"}
            </h1>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button className="hidden sm:flex p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full relative transition-all">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="hidden sm:flex p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-all">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50/50">
          <div className="max-w-6xl mx-auto space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
