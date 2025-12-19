import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Hero({ onDemoClick }) {
  return (
    <header className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[50%] bg-primary/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-blue-400/10 blur-[130px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 lg:space-y-12 relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
          Empowering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
            TODA Community
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl lg:text-2xl text-slate-500 leading-relaxed font-semibold">
          The all-in-one digital infrastructure for the{" "}
          <span className="text-slate-900 underline decoration-primary/30 decoration-4">
            Tricycle Operators and Drivers' Association
          </span>
          . Modernize your fleet, maximize revenue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
          <Link
            to="/operator/fleet-management"
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/25"
          >
            Start Managing Free
            <ChevronRight className="w-6 h-6" />
          </Link>
          <button
            onClick={onDemoClick}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
          >
            See the Demo
          </button>
        </div>
      </div>
    </header>
  );
}
