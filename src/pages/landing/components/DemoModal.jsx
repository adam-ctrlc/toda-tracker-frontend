import Modal from "../../../components/Modal";
import { Zap } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Schedule Your Onboarding"
      icon={Zap}
      footer={
        <button
          onClick={onClose}
          className="w-full py-4 bg-primary text-white font-black text-lg rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all"
        >
          Confirm Inquiry
        </button>
      }
    >
      <div className="space-y-5 py-2">
        <p className="text-slate-500 font-medium text-sm leading-relaxed">
          Our association specialists will reach out to schedule a physical
          onboarding session for your TODA officers.
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
              TODA Name
            </label>
            <input
              type="text"
              placeholder="e.g. Cagayan de Oro Central TODA"
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold"
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
              Official Email
            </label>
            <input
              type="email"
              placeholder="admin@yourtoda.ph"
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
