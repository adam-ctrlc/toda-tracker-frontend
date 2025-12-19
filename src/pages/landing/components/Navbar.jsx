import { Link } from "react-router-dom";
import { Car } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Car className="text-white h-6 w-6" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900">
            TodaTrack
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#problem"
            className="text-slate-600 font-bold text-sm hover:text-primary transition-colors uppercase tracking-widest"
          >
            The Problem
          </a>
          <a
            href="#features"
            className="text-slate-600 font-bold text-sm hover:text-primary transition-colors uppercase tracking-widest"
          >
            Solutions
          </a>
          <Link
            to="/login"
            className="text-slate-600 font-bold text-sm hover:text-primary transition-colors uppercase tracking-widest"
          >
            Login
          </Link>
          <Link
            to="/operator/fleet-management"
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold transition-all hover:bg-slate-800"
          >
            Launch Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
