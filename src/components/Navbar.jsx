import React, { useState } from "react";

const colors = [
  "text-red-400",
  "text-orange-400",
  "text-yellow-400",
  "text-green-400",
  "text-emerald-400",
  "text-cyan-400",
  "text-blue-400",
  "text-indigo-400",
  "text-purple-400",
  "text-pink-400",
];

const colorMap = {
  "text-red-400": "#f87171",
  "text-orange-400": "#fb923c",
  "text-yellow-400": "#facc15",
  "text-green-400": "#4ade80",
  "text-emerald-400": "#34d399",
  "text-cyan-400": "#22d3ee",
  "text-blue-400": "#60a5fa",
  "text-indigo-400": "#818cf8",
  "text-purple-400": "#a78bfa",
  "text-pink-400": "#f472b6",
};

const NavItem = ({ children, underlineThin = false }) => {
  const [colorClass, setColorClass] = useState("");
  const [underlineColor, setUnderlineColor] = useState("");

  const handleHover = () => {
    const random = Math.floor(Math.random() * colors.length);
    const color = colors[random];
    setColorClass(color);
    setUnderlineColor(colorMap[color]);
  };

  return (
    <span
      onMouseEnter={handleHover}
      onMouseLeave={() => {
        setColorClass("");
        setUnderlineColor("");
      }}
      className={`relative cursor-pointer transition-colors duration-200 ${colorClass}`}
    >
      {children}
      <span
        className="absolute left-0 -bottom-1"
        style={{
          height: underlineThin ? "1px" : "2px", // 👈 thin if prop passed
          width: underlineColor ? "100%" : "0%",
          backgroundColor: underlineColor,
          transition: "width 0.3s ease-in-out",
        }}
      />
    </span>
  );
};

const dropdownItems = {
  features: [
    { name: "Meeting Notes", icon: "📝", badge: "NEW" },
    { name: "Voice AI", icon: "🎙️" },
    { name: "Lists", icon: "📋" },
  ],
  useCases: [
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Project Planning", icon: "🗂️" },
    { name: "Personal Productivity", icon: "🧠" },
  ],
  download: [
    { name: "MacOS App", icon: "🍎" },
    { name: "Windows App", icon: "🪟" },
    { name: "iOS App", icon: "📱" },
  ],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const renderDropdown = (menu) => (
    <div className="absolute top-full  w-56 bg-[#1e1e2f] text-white rounded-xl shadow-xl py-3 px-2 backdrop-blur-md transition-all duration-300 z-50">
      {dropdownItems[menu].map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between hover:bg-[#2a2a3f] px-4 py-2 rounded-md cursor-pointer transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
          {item.badge && (
            <span className="text-[10px] px-2 py-[2px] font-bold rounded-full bg-[#867bff] text-black">
              {item.badge}
            </span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <nav className="w-full px-10 py-6 flex items-center justify-between bg-transparent text-white relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center">
          <img
            className="w-8 h-8"
            src="https://framerusercontent.com/images/X0Ni5UhSBoyE6b7Uf14uIMriLw.png"
            alt=""
          />
        </div>
        <span className="text-2xl font-bold font-[sans-serif]">Superlist</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 h-full items-center text-md font-['Haffer'] font-semibold relative">
        {/* Features */}
        {/* Features Dropdown (fixed) */}
        <div
          className="relative py-2"
          onMouseEnter={() => handleMouseEnter("features")}
          onMouseLeave={handleMouseLeave}
        >
          <NavItem underlineThin>
            <span className="flex items-center gap-1">
              Features
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </NavItem>

          {activeDropdown === "features" && renderDropdown("features")}
        </div>

        {/* Use Cases */}
        <div
          className="relative py-2"
          onMouseEnter={() => handleMouseEnter("useCases")}
          onMouseLeave={handleMouseLeave}
        >
          <NavItem underlineThin>
            <span className="flex items-center gap-1">
              Use Cases
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </NavItem>
          {activeDropdown === "useCases" && renderDropdown("useCases")}
        </div>

        {/* Static Links */}
        <NavItem>
          <a href="#">Updates</a>
        </NavItem>
        <NavItem>
          <a href="#">Pricing</a>
        </NavItem>
        <NavItem>
          <a href="#">Blog</a>
        </NavItem>

        {/* Download */}
        <div
          className="relative py-2"
          onMouseEnter={() => handleMouseEnter("download")}
          onMouseLeave={handleMouseLeave}
        >
          <NavItem>
            <span className="flex items-center gap-1">
              Download
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </NavItem>
          {activeDropdown === "download" && renderDropdown("download")}
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4 text-md font-[Haffer] font-semibold">
        <NavItem underlineThin>
          <button className="bg-transparent">Sign in</button>
        </NavItem>
        <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:opacity-90 transition">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
