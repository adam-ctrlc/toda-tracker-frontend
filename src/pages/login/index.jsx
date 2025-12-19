import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Car,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  KeyRound,
} from "lucide-react";
import Modal from "../../components/Modal";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/operator/fleet-management");
    }, 1500);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setIsForgotOpen(false);
    alert("Reset link sent to your email!");
  };

  const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      {/* Left Column: Form Section */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 relative z-10 bg-white">
        <div className="max-w-md w-full mx-auto space-y-10">
          {/* Logo & Header */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="text-white h-6 w-6" />
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-900">
                TodaTrack
              </span>
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-slate-500 font-medium">
                Access your TODA management dashboard.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@yourtoda.ph"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none font-bold transition-all"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Lock size={14} />
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotOpen(true)}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none font-bold transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-primary border-slate-200 rounded focus:ring-primary"
              />
              <label
                htmlFor="remember"
                className="text-sm font-bold text-slate-600 cursor-pointer"
              >
                Stay logged in for 30 days
              </label>
            </div>

            <button
              disabled={isLoading}
              className={`w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          {/* Trust Badge */}
          <div className="pt-8 border-t border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Securely managing over{" "}
              <span className="text-slate-900 font-bold">5,000+</span> tricycle
              units across Cagayan de Oro City.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Side (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-1 bg-slate-950 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-primary/20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col justify-end p-20 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-black text-white uppercase tracking-[0.2em]">
              Operator Portal v2.4
            </div>
            <h2 className="text-5xl font-black text-white leading-tight tracking-tight">
              Designed for the next <br />
              generation of <span className="text-primary italic">TODA</span>.
            </h2>
            <p className="text-slate-400 text-lg font-medium max-w-lg">
              "Switching to TodaTrack saved our association 15 hours of
              paperwork every single week."
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={url}
                    alt={`User ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-bold text-white/50 tracking-wide">
              JOIN 200+ OPERATORS IN CDO
            </span>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={isForgotOpen}
        onClose={() => setIsForgotOpen(false)}
        title="Reset Password"
        icon={KeyRound}
      >
        <form onSubmit={handleForgotSubmit} className="space-y-6">
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Mail size={14} />
              Recovery Email
            </label>
            <input
              type="email"
              required
              placeholder="admin@yourtoda.ph"
              className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold transition-all"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsForgotOpen(false)}
              className="flex-1 py-3.5 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all font-bold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-blue-600 transition-all font-bold"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
