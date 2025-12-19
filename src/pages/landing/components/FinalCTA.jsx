import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="pb-32 px-6">
      <div className="max-w-6xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-primary to-blue-700 p-12 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl shadow-primary/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

        <div className="space-y-4 relative">
          <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Ready to modernize <br /> your association?
          </h2>
          <p className="text-xl text-white/80 font-bold max-w-2xl mx-auto">
            Join the hundreds of TODA operators in Misamis Oriental who have
            already digitized their fleet management with TodaTrack.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 relative">
          <Link
            to="/operator/fleet-management"
            className="px-12 py-5 bg-white text-primary rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-xl"
          >
            Get Started Now
          </Link>
          <p className="text-white/60 font-medium text-sm w-full">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
