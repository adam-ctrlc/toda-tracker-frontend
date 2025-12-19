import { useState } from "react";
import data from "../../../data.json";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import {
  Users,
  UserPlus,
  Phone,
  Calendar,
  ArrowRightLeft,
  Search,
  Filter,
  Car,
} from "lucide-react";

export default function DriverAssignment() {
  const [jeepneys] = useState(data.fleet_management.vehicles.jeepneys);
  const [tricycles] = useState(data.fleet_management.vehicles.tricycles);
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJeepneys = jeepneys.filter((j) => {
    const fullName = `${j.driver.first_name} ${j.driver.last_name}`;
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.plate_number.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredTricycles = tricycles.filter((t) => {
    const fullName = `${t.driver.first_name} ${t.driver.last_name}`;
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.plate_number.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const DriverCard = ({ vehicle, type }) => (
    <div className="dashboard-card group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Users size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">
              {vehicle.driver.first_name} {vehicle.driver.last_name}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Assigned Driver
            </p>
          </div>
        </div>
        <button
          onClick={() => setSelectedDriver(vehicle)}
          className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-primary transition-colors"
        >
          <ArrowRightLeft size={18} />
        </button>
      </div>

      <div className="space-y-3 pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-medium">Plate Number</span>
          <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs uppercase tracking-wider">
            {vehicle.plate_number}
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-medium">Contact</span>
          <span className="text-slate-700 font-semibold inline-flex items-center gap-1">
            <Phone size={12} className="text-slate-400" />
            +63 917 123 4567
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 font-medium">Shift</span>
          <span className="text-slate-700 font-semibold inline-flex items-center gap-1">
            <Calendar size={12} className="text-slate-400" />
            Day Shift
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 lg:space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Driver Assignment
          </h2>
          <p className="text-sm lg:text-base text-slate-500 mt-1">
            Assign and manage driver-vehicle relationships.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search driver or plate..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <button
            onClick={() => setIsAssignOpen(true)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white border border-transparent px-5 py-2.5 rounded-xl font-bold hover:bg-blue-600 transition-colors"
          >
            <UserPlus size={18} />
            Assign Driver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 flex items-center gap-2">
              Jeepney Fleet
              <span className="text-xs lg:text-sm font-medium text-slate-400">
                ({jeepneys.length})
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {filteredJeepneys.length > 0 ? (
              filteredJeepneys.map((jeepney) => (
                <DriverCard
                  key={jeepney.plate_number}
                  vehicle={jeepney}
                  type="jeepney"
                />
              ))
            ) : (
              <div className="py-12 text-center bg-white rounded-3xl border border-slate-100">
                <Search size={32} className="mx-auto text-slate-200 mb-3" />
                <p className="text-slate-400 font-medium">
                  No results matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 flex items-center gap-2">
              Tricycle Fleet
              <span className="text-xs lg:text-sm font-medium text-slate-400">
                ({tricycles.length})
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {filteredTricycles.length > 0 ? (
              filteredTricycles.map((tricycle) => (
                <DriverCard
                  key={tricycle.plate_number}
                  vehicle={tricycle}
                  type="tricycle"
                />
              ))
            ) : (
              <div className="py-12 text-center bg-white rounded-3xl border border-slate-100">
                <Search size={32} className="mx-auto text-slate-200 mb-3" />
                <p className="text-slate-400 font-medium">
                  No results matching "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Assignment/Reassignment Modal */}
      <Modal
        isOpen={!!selectedDriver || isAssignOpen}
        onClose={() => {
          setSelectedDriver(null);
          setIsAssignOpen(false);
        }}
        title={selectedDriver ? "Edit Driver Details" : "Register New Driver"}
        icon={Users}
        footer={
          <div className="flex gap-3 w-full">
            <button
              onClick={() => {
                setSelectedDriver(null);
                setIsAssignOpen(false);
              }}
              className="flex-1 py-2.5 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all font-bold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setSelectedDriver(null);
                setIsAssignOpen(false);
              }}
              className="flex-1 py-2.5 bg-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-all font-bold"
            >
              Save Changes
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          {selectedDriver && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl mb-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-0.5">
                  Current Assignment
                </p>
                <p className="text-sm text-blue-800 font-bold">
                  {selectedDriver.plate_number}
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <Car size={20} />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                defaultValue={selectedDriver?.driver.first_name || ""}
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
                defaultValue={selectedDriver?.driver.last_name || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                Middle Initial
              </label>
              <input
                type="text"
                placeholder="M.I."
                defaultValue={selectedDriver?.driver.middle_initial || ""}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5">
                Contact Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">
                  +63
                </span>
                <input
                  type="tel"
                  placeholder="917 000 0000"
                  defaultValue="917 123 4567"
                  className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 bg-slate-50/30 font-medium"
                />
              </div>
            </div>

            <Select
              label="Assigned Shift"
              placeholder="Select Shift"
              options={[
                { value: "day", label: "Day Shift (6 AM - 2 PM)" },
                { value: "afternoon", label: "Afternoon Shift (2 PM - 10 PM)" },
                { value: "night", label: "Night Shift (10 PM - 6 AM)" },
              ]}
              defaultValue="day"
            />
          </div>

          <Select
            label="Vehicle Assignment"
            placeholder="Search Plate Number"
            options={[
              ...jeepneys.map((j) => ({
                value: j.plate_number,
                label: `Jeepney - ${j.plate_number}`,
              })),
              ...tricycles.map((t) => ({
                value: t.plate_number,
                label: `Tricycle - ${t.plate_number}`,
              })),
            ]}
          />
        </div>
      </Modal>
    </div>
  );
}
