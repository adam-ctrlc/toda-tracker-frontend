import { useState, useRef } from "react";
import {
  User,
  Mail,
  Shield,
  Phone,
  MapPin,
  Camera,
  Lock,
  Save,
} from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "Adam",
    lastName: "Smith",
    middleInitial: "J.",
    role: "TODA Operator",
    email: "adam.smith@todatrack.ph",
    phone: "917 123 4567",
    city: "Cagayan de Oro City",
    province: "Misamis Oriental",
    joined: "October 2024",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6 lg:space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Account Profile
          </h2>
          <p className="text-sm lg:text-base text-slate-500 mt-1">
            Manage your personal information and security settings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left Column: Avatar & Basic Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="dashboard-card text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
            <div className="relative pt-8 pb-4">
              <div className="relative inline-block">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white flex items-center justify-center text-3xl font-bold text-primary mx-auto overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {userData.firstName[0]}
                      {userData.lastName[0]}
                    </>
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-0 right-0 p-1.5 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-primary transition-colors hover:border-primary"
                >
                  <Camera size={14} />
                </button>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-4">
                {userData.firstName} {userData.middleInitial}{" "}
                {userData.lastName}
              </h3>
              <p className="text-sm font-medium text-primary bg-primary/5 inline-block px-3 py-1 rounded-full mt-1">
                {userData.role}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-50 grid grid-cols-2 gap-4">
              <div className="p-3">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">
                  Fleet size
                </p>
                <p className="text-lg font-black text-slate-900">12</p>
              </div>
              <div className="p-3">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">
                  Trust Score
                </p>
                <p className="text-lg font-black text-emerald-600">4.9</p>
              </div>
            </div>
          </div>

          <div className="dashboard-card space-y-4">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Shield size={16} className="text-primary" />
              Account Verification
            </h4>
            <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <User size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-900">
                  Identity Verified
                </p>
                <p className="text-[10px] text-emerald-600 font-medium tracking-tight">
                  Level 3 Verification Complete
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Forms */}
        <div className="lg:col-span-2 space-y-6">
          <div className="dashboard-card">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50">
              <h4 className="font-bold text-slate-900 text-lg">
                Personal Information
              </h4>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isEditing
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {isEditing ? (
                  <>
                    <Save size={16} />
                    Save Changes
                  </>
                ) : (
                  <>
                    <User size={16} />
                    Edit Info
                  </>
                )}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <User size={12} />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <User size={12} />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <User size={12} />
                  Middle Initial
                </label>
                <input
                  type="text"
                  name="middleInitial"
                  value={userData.middleInitial}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Mail size={12} />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Phone size={12} />
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">
                    +63
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full text-sm font-bold text-slate-900 pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={12} />
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={userData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={12} />
                  Province
                </label>
                <input
                  type="text"
                  name="province"
                  value={userData.province}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50">
              <h4 className="font-bold text-slate-900 text-lg">
                Security & Password
              </h4>
              <button
                onClick={() => setIsEditingPassword(!isEditingPassword)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isEditingPassword
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {isEditingPassword ? (
                  <>
                    <Save size={16} />
                    Save Password
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    Edit Password
                  </>
                )}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Lock size={12} />
                  Current Password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  placeholder="••••••••"
                  value={passwords.oldPassword}
                  onChange={handlePasswordChange}
                  disabled={!isEditingPassword}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="hidden md:block"></div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Lock size={12} />
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  disabled={!isEditingPassword}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Lock size={12} />
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  disabled={!isEditingPassword}
                  className="w-full text-sm font-bold text-slate-900 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
