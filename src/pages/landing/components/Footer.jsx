import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-slate-50 border-t border-slate-100 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Car className="text-white h-5 w-5" />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900">
              TodaTrack
            </span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-slate-400 font-bold text-xs uppercase hover:text-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-slate-400 font-bold text-xs uppercase hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 font-bold text-xs uppercase hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="text-center md:text-left pt-12 border-t border-slate-200/50">
          <p className="text-slate-400 text-sm font-medium">
            © 2025 TodaTrack Inc. Built for the Filipino community.
          </p>
        </div>
      </div>
    </footer>
  );
}
