import { LayoutDashboard, Wallet, Map } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Real-time Fleet View",
      desc: "Oversee every Jeepney and Tricycle in your association from a central hub.",
    },
    {
      icon: Wallet,
      title: "Smart Boundary",
      desc: "Automated payment tracking with instant status indicators for every driver.",
    },
    {
      icon: Map,
      title: "Route Matrix",
      desc: "Geospatial insights into vehicle assignments across association zones.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
            The Digital Solution
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            Built for CDO Operators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <f.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
