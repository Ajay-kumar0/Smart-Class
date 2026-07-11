import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck2,
  LogOut,
  GraduationCap,
  UserRound,
} from "lucide-react";
import Logo from "./Logo";
import "./DashboardLayout.css";

const teacherNav = [
  { to: "/teacher/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/teacher/mark-attendance", label: "Mark Attendance", icon: CalendarCheck2 },
];

const studentNav = [
  { to: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

const DashboardLayout = ({ role = "teacher", name = "", subtitle = "", children }) => {
  const navigate = useNavigate();
  const navItems = role === "teacher" ? teacherNav : studentNav;
  const RoleIcon = role === "teacher" ? GraduationCap : UserRound;

  return (
    <div className="shell">
      <aside className="shell__sidebar">
        <div className="shell__brand">
          <Logo size="sm" />
        </div>

        <nav className="shell__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `shell__nav-link${isActive ? " is-active" : ""}`}
            >
              <item.icon />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="shell__logout" onClick={() => navigate("/")}>
          <LogOut />
          <span>Log out</span>
        </button>
      </aside>

      <div className="shell__main">
        <header className="shell__topbar">
          <div>
            <p className="eyebrow">
              <RoleIcon size={14} /> {role === "teacher" ? "Teacher Portal" : "Student Portal"}
            </p>
            <h2>{subtitle}</h2>
          </div>
          <div className="shell__profile">
            <div className="shell__avatar">{name ? name.charAt(0) : "?"}</div>
            <div>
              <p className="shell__profile-name">{name}</p>
              <p className="shell__profile-role">{role === "teacher" ? "Faculty" : "Student"}</p>
            </div>
          </div>
        </header>

        <main className="shell__content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
