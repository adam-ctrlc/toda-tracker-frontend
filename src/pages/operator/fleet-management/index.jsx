import { useState } from "react";
import data from "../../../data.json";
import VehicleCard from "./VehicleCard";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import { Plus, PlusCircle, Info, Search } from "lucide-react";

export default function FleetManagement() {
  const [jeepneys] = useState(data.fleet_management.vehicles.jeepneys);
  const [tricycles] = useState(data.fleet_management.vehicles.tricycles);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDetails = (vehicle, type) => {
    setSelectedVehicle({ ...vehicle, type });
  };

  const filteredJeepneys = jeepneys.filter((j) => {
    const fullName = `${j.driver.first_name} ${j.driver.last_name}`;
    return (
      j.plate_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredTricycles = tricycles.filter((t) => {
    const fullName = `${t.driver.first_name} ${t.driver.last_name}`;
    return (
      t.plate_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-6 lg:space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Fleet Overview
          </h2>
          <p className="text-sm lg:text-base text-slate-500 mt-1">
            Manage and monitor your regional transport fleet.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search plate or driver..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <button
            onClick={() => setIsRegisterOpen(true)}
            className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-blue-600"
          >
            <Plus size={20} />
            Add Vehicle
          </button>
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg lg:text-xl font-bold text-slate-800">
            Jeepneys
          </h2>
          <span className="px-2.5 py-0.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
            {filteredJeepneys.length} units
          </span>
        </div>
        {filteredJeepneys.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredJeepneys.map((jeepney) => (
              <VehicleCard
                key={jeepney.plate_number}
                vehicle={jeepney}
                type="jeepney"
                onDetails={handleDetails}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-white rounded-3xl border border-slate-100">
            <Search size={32} className="mx-auto text-slate-200 mb-3" />
            <p className="text-slate-400 font-medium">
              No jeepneys found matching "{searchTerm}"
            </p>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 bg-emerald-500 rounded-full"></div>
          <h2 className="text-lg lg:text-xl font-bold text-slate-800">
            Tricycles
          </h2>
          <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full">
            {filteredTricycles.length} units
          </span>
        </div>
        {filteredTricycles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredTricycles.map((tricycle) => (
              <VehicleCard
                key={tricycle.plate_number}
                vehicle={tricycle}
                type="tricycle"
                onDetails={handleDetails}
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center bg-white rounded-3xl border border-slate-100">
            <Search size={32} className="mx-auto text-slate-200 mb-3" />
            <p className="text-slate-400 font-medium">
              No tricycles found matching "{searchTerm}"
            </p>
          </div>
        )}
      </section>

      {/* Register Modal */}
      <Modal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        title="Register New Vehicle"
        icon={PlusCircle}
        footer={
          <>
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="px-4 py-2.5 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl transition-all">
              Complete Registration
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Plate Number
            </label>
            <input
              type="text"
              placeholder="ABC-1234"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                M.I.
              </label>
              <input
                type="text"
                placeholder="A."
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30"
              />
            </div>
          </div>
          <Select
            label="Vehicle Type"
            options={["Jeepney", "Tricycle"]}
            placeholder="Select type"
          />
        </div>
      </Modal>

      {/* Details Modal */}
      <Modal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        title={`Vehicle Details: ${selectedVehicle?.plate_number}`}
        icon={Info}
      >
        {selectedVehicle && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 transition-colors hover:border-primary/20">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">
                  Status
                </p>
                <p className="text-emerald-600 font-bold">Active</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 transition-colors hover:border-primary/20">
                <p className="text-xs text-slate-500 font-bold uppercase mb-1">
                  Type
                </p>
                <p className="text-slate-900 font-bold capitalize">
                  {selectedVehicle.type}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Assigned Driver</span>
                <span className="font-bold text-slate-900">
                  {selectedVehicle.driver.first_name}{" "}
                  {selectedVehicle.driver.middle_initial}{" "}
                  {selectedVehicle.driver.last_name}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Last Maintenance</span>
                <span className="font-bold text-slate-900">Dec 12, 2025</span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
