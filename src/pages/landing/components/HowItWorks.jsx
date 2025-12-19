import { LayoutDashboard, UserPlus, BarChart3 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: LayoutDashboard,
      title: "Register Association",
      desc: "Create your TODA digital headquarters and customize your fleet categories.",
    },
    {
      step: "02",
      icon: UserPlus,
      title: "Onboard Drivers",
      desc: "Quickly register your drivers and assign them to their respective units.",
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Automate tracking",
      desc: "Start collecting boundaries and generating real-time performance reports.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24 space-y-4">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs">
            Simple 3-Step Process
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Get Started in Minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10"></div>

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative space-y-6 text-center animate-in fade-in zoom-in duration-700"
            >
              <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto shadow-xl relative z-10 transition-transform hover:scale-110">
                <s.icon className="text-primary w-8 h-8" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">
                  {s.step}
                </span>
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-slate-900">
                  {s.title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed px-6">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
