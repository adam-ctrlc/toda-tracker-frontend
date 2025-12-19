import { Clock, TrendingUp, Shield } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Wasted Hours",
      desc: "Manual logging of daily boundary takes up hours of productive time.",
    },
    {
      icon: TrendingUp,
      title: "Lost Revenue",
      desc: "Paper logs lead to tracking errors and uncollected daily payments.",
    },
    {
      icon: Shield,
      title: "Blind Spots",
      desc: "Zero visibility on vehicle status, leading to unexpected breakdowns.",
    },
  ];

  return (
    <section id="problem" className="py-24 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Stop Managing via <br className="hidden sm:block" />
            <span className="text-red-500 line-through decoration-slate-900 decoration-8 underline-offset-8">
              Pen and Paper
            </span>
          </h2>
          <p className="text-xl text-slate-500 font-bold">
            Associated operations shouldn't be a logistical nightmare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto border border-red-100">
                <p.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900">{p.title}</h4>
              <p className="text-slate-500 font-medium text-sm leading-relaxed px-4">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
