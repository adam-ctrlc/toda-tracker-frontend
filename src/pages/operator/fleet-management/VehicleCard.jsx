import { Car, Truck, MoreVertical, ShieldCheck, MapPin } from "lucide-react";

export default function VehicleCard({ vehicle, type, onDetails }) {
  return (
    <div className="dashboard-card group">
      <div className="flex justify-between items-start mb-4">
        <div
          className={`p-2 rounded-lg ${
            type === "jeepney"
              ? "bg-blue-50 text-blue-600"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {type === "jeepney" ? <Truck size={24} /> : <Car size={24} />}
        </div>
        <button
          onClick={() => onDetails(vehicle, type)}
          className="p-1 hover:bg-slate-100 rounded-md text-slate-400"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
            {vehicle.plate_number}
          </h3>
          <p className="text-sm text-slate-500 font-medium capitalize">
            {type}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span className="text-xs font-semibold">Active</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin size={16} className="text-slate-400" />
            <span className="text-xs font-semibold">Cagayan de Oro</span>
          </div>
        </div>
      </div>
    </div>
  );
}
