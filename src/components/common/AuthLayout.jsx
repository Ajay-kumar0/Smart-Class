import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "./Logo";
import PunchGrid from "./PunchGrid";
import { generateSessions } from "../../data/dummyData";
import "./AuthLayout.css";

const decorSessions = generateSessions(80, 42);

// tone: "violet" (teacher) | "aqua" (student)
const AuthLayout = ({ tone = "violet", eyebrow, title, blurb, children }) => {
  return (
    <div className={`auth auth--${tone}`}>
      <div className="auth__panel">
        <Link to="/" className="auth__back">
          <ArrowLeft size={16} /> Back home
        </Link>

        <div className="auth__form-wrap">
          <Logo />
          <p className="eyebrow auth__eyebrow">{eyebrow}</p>
          <h1 className="auth__title">{title}</h1>
          <p className="auth__blurb">{blurb}</p>
          {children}
        </div>
      </div>

      <div className="auth__showcase">
        <div className="auth__showcase-inner">
          <p className="auth__showcase-tag">Attendance ledger</p>
          <h3 className="auth__showcase-heading">
            Every class, <br /> logged like a punch card.
          </h3>
          <div className="auth__showcase-grid">
            <PunchGrid sessions={decorSessions} size="lg" />
          </div>
          <div className="auth__legend">
            <span><i className="dot dot--present" /> Present</span>
            <span><i className="dot dot--late" /> Late</span>
            <span><i className="dot dot--absent" /> Absent</span>
            <span><i className="dot dot--none" /> No class</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
