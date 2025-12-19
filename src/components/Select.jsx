import { ChevronDown } from "lucide-react";

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="block text-sm font-bold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative group">
        <select
          value={value}
          onChange={onChange}
          className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer group-hover:border-slate-300"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value || option} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400 group-hover:text-slate-500 transition-colors">
          <ChevronDown size={16} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
