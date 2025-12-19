import { CheckCircle2, Car, Users } from "lucide-react";

export default function TodaSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-primary font-black uppercase tracking-widest text-sm">
                What is TODA?
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Tricycle Operators and <br />
                Drivers' Association
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                TODA is the backbone of regional transport in the Philippines.
                These associations represent thousands of hardworking families
                providing essential door-to-door transit for millions of
                commuters daily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "Self-Regulated Ops",
                "Community Support",
                "Fixed Local Routes",
                "Mutual Benefit Sytems",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl -z-10 animate-pulse"></div>
            <div className="bg-white rounded-[3rem] border border-slate-200 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Car size={200} />
              </div>
              <div className="space-y-6 relative">
                <div className="flex gap-2">
                  <div className="w-12 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-black text-slate-900">
                  Association <br />
                  Management 2.0
                </h3>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-full"></div>
                  <div className="h-4 bg-slate-100 rounded-full w-1/2"></div>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Total Registered
                    </p>
                    <p className="text-4xl font-black text-primary tracking-tight">
                      +1,240
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                    <Users size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
