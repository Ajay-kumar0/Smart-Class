import { Link } from "react-router-dom";
import {
  GraduationCap,
  UserRound,
  ArrowRight,
  CalendarCheck2,
  BarChart3,
  BookOpenCheck,
  ScanLine,
} from "lucide-react";
import Logo from "../common/Logo";
import PunchGrid from "../common/PunchGrid";
import { generateSessions } from "../../data/dummyData";
import "./LandingPage.css";

const heroSessions = generateSessions(140, 11);

const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing__nav">
        <Logo />
        <div className="landing__nav-links">
          <a href="#roles">Get started</a>
          <a href="#how">How it works</a>
        </div>
      </header>

      <section className="landing__hero">
        <div className="landing__hero-copy">
          <p className="eyebrow">
            <ScanLine size={14} /> Attendance, punched in
          </p>
          <h1>
            Attendance that reads
            <br />
            like a <span className="landing__accent">ledger</span>, not a spreadsheet.
          </h1>
          <p className="landing__lead">
            SmartClass gives teachers a fast way to take roll call and gives
            students a clear, always-visible record of where they stand —
            subject by subject, session by session.
          </p>
          <div className="landing__hero-actions">
            <a href="#roles" className="btn btn-violet">
              Choose your portal <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="landing__hero-visual">
          <div className="landing__hero-card">
            <div className="landing__hero-card-head">
              <span className="badge badge-aqua">CS505 · Machine Learning</span>
              <span className="landing__hero-pct">92%</span>
            </div>
            <PunchGrid sessions={heroSessions} />
          </div>
        </div>
      </section>

      <section id="roles" className="landing__roles">
        <div className="landing__role-card landing__role-card--teacher">
          <span className="landing__role-icon">
            <GraduationCap />
          </span>
          <h3>I'm a Teacher</h3>
          <p>Register your subjects, take attendance in seconds, and track class-wide trends.</p>
          <ul className="landing__role-list">
            <li>Register with your subjects</li>
            <li>Mark attendance per session</li>
            <li>View per-subject reports</li>
          </ul>
          <div className="landing__role-actions">
            <Link to="/teacher/login" className="btn btn-violet btn-block">
              Teacher Login <ArrowRight size={16} />
            </Link>
            <Link to="/teacher/register" className="btn btn-outline btn-block">
              Register as Teacher
            </Link>
          </div>
        </div>

        <div className="landing__role-card landing__role-card--student">
          <span className="landing__role-icon">
            <UserRound />
          </span>
          <h3>I'm a Student</h3>
          <p>Pick your subjects at signup and keep an eye on your attendance all semester.</p>
          <ul className="landing__role-list">
            <li>Register & select subjects</li>
            <li>Track attendance live</li>
            <li>Spot low-attendance subjects early</li>
          </ul>
          <div className="landing__role-actions">
            <Link to="/student/login" className="btn btn-aqua btn-block">
              Student Login <ArrowRight size={16} />
            </Link>
            <Link to="/student/register" className="btn btn-outline btn-block">
              Register as Student
            </Link>
          </div>
        </div>
      </section>

      <section id="how" className="landing__how">
        <p className="eyebrow">How it works</p>
        <h2>Three steps, every subject</h2>
        <div className="landing__how-grid">
          <div className="landing__how-card">
            <BookOpenCheck />
            <h4>1. Register a subject</h4>
            <p>Teachers add at least one subject at signup; students pick which ones to join.</p>
          </div>
          <div className="landing__how-card">
            <CalendarCheck2 />
            <h4>2. Take the roll call</h4>
            <p>Mark each student present, late, or absent for the day's session.</p>
          </div>
          <div className="landing__how-card">
            <BarChart3 />
            <h4>3. Track the record</h4>
            <p>Attendance rolls up into clear per-subject percentages for everyone involved.</p>
          </div>
        </div>
      </section>

      <footer className="landing__footer">
        <Logo size="sm" />
        <p>Built for classrooms that like their records tidy.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
