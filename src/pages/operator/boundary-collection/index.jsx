import { useState } from "react";
import data from "../../../data.json";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import { Wallet, CheckCircle2, XCircle, Search } from "lucide-react";

export default function BoundaryCollection() {
  const [boundaries] = useState(data.fleet_management.boundary_collection);
  const [selectedBoundary, setSelectedBoundary] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // all, paid, pending

  const filteredBoundaries = boundaries.filter((boundary) => {
    const fullName = `${boundary.driver.first_name} ${boundary.driver.last_name}`;
    const matchesSearch = fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      statusFilter === "all"
        ? true
        : statusFilter === "paid"
        ? boundary.paid
        : !boundary.paid;

    return matchesSearch && matchesFilter;
  });

  const filterOptions = [
    { value: "all", label: "All Status" },
    { value: "paid", label: "Paid Only" },
    { value: "pending", label: "Pending Only" },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Boundary Collection
          </h2>
          <p className="text-sm lg:text-base text-slate-500 mt-1">
            Track and manage daily payments from drivers.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search drivers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            options={filterOptions}
            className="sm:w-48"
          />
        </div>
      </div>

      <div className="dashboard-card overflow-hidden !p-0">
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Driver Name
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredBoundaries.length > 0 ? (
                filteredBoundaries.map((boundary, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">
                          {boundary.driver.first_name[0]}
                          {boundary.driver.last_name[0]}
                        </div>
                        <span className="font-semibold text-slate-900 truncate max-w-[150px]">
                          {boundary.driver.first_name}{" "}
                          {boundary.driver.last_name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Wallet size={14} className="flex-shrink-0" />
                        <span className="text-sm">
                          {boundary.paid ? boundary.payment_method : "—"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {boundary.paid ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                          <CheckCircle2 size={12} />
                          Paid
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                          <XCircle size={12} />
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                      Dec 18, 2025
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedBoundary(boundary)}
                        className="text-sm font-bold text-primary hover:underline transition-transform inline-flex items-center gap-1"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-20 text-center text-slate-400 font-medium"
                  >
                    <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center text-slate-200 mb-6">
                        <Search size={40} strokeWidth={1} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        No transactions found
                      </h4>
                      <p className="text-slate-500 text-sm max-w-[280px] mx-auto font-medium mb-6">
                        We couldn't find any results matching your current
                        search or filter criteria.
                      </p>
                      <button
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("all");
                        }}
                        className="text-sm font-bold text-primary hover:underline transition-all"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Details Modal */}
      <Modal
        isOpen={!!selectedBoundary}
        onClose={() => setSelectedBoundary(null)}
        title="Transaction Details"
        icon={Wallet}
      >
        {selectedBoundary && (
          <div className="space-y-6">
            <div className="text-center p-8 bg-white rounded-[2rem] border border-slate-200 group hover:border-primary/20 transition-all duration-300">
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-2">
                Total Amount
              </p>
              <h4 className="text-5xl font-black text-slate-900 tracking-tight">
                ₱500.00
              </h4>
              <div className="mt-4 flex justify-center">
                {selectedBoundary.paid ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-black rounded-full uppercase tracking-wider">
                    <CheckCircle2 size={12} strokeWidth={3} />
                    Confirmed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 text-xs font-black rounded-full uppercase tracking-wider">
                    <XCircle size={12} strokeWidth={3} />
                    Pending
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-slate-100 bg-white">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">
                  Driver
                </p>
                <p className="text-sm font-bold text-slate-900 truncate">
                  {selectedBoundary.driver.first_name}{" "}
                  {selectedBoundary.driver.middle_initial}{" "}
                  {selectedBoundary.driver.last_name}
                </p>
              </div>
              <div className="p-4 rounded-2xl border border-slate-100 bg-white">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1.5">
                  Method
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                    <Wallet size={12} className="text-primary" />
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {selectedBoundary.payment_method || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center justify-between text-xs py-3 border-t border-dashed border-slate-200">
                <span className="text-slate-400 font-medium">
                  Transaction Date
                </span>
                <span className="text-slate-600 font-bold font-mono">
                  2025-12-18 16:02
                </span>
              </div>
              <div className="flex items-center justify-between text-xs py-3 border-t border-dashed border-slate-200">
                <span className="text-slate-400 font-medium">Ref Number</span>
                <span className="text-slate-600 font-bold font-mono uppercase tracking-widest">
                  TXN-7721-BC
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
