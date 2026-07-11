import { ArrowUpRight, Users, UserRound } from "lucide-react";
import PunchGrid from "./PunchGrid";
import { attendancePercent } from "../../data/dummyData";
import "./SubjectCard.css";

// role: "teacher" | "student" — swaps the meta line + CTA copy
const SubjectCard = ({ subject, role = "teacher", onOpen }) => {
  const pct = attendancePercent(subject.sessions);

  return (
    <div className={`subject-card card subject-card--${subject.color}`}>
      <div className="subject-card__top">
        <span className="badge badge-violet">{subject.code}</span>
        <span className="subject-card__pct">{pct}%</span>
      </div>

      <h3 className="subject-card__name">{subject.name}</h3>

      <p className="subject-card__meta">
        {role === "teacher" ? (
          <>
            <Users size={15} /> {subject.studentsEnrolled} students enrolled
          </>
        ) : (
          <>
            <UserRound size={15} /> {subject.teacher}
          </>
        )}
      </p>

      <PunchGrid sessions={subject.sessions.slice(-14)} size="sm" />

      <button className="subject-card__cta" onClick={onOpen}>
        {role === "teacher" ? "View attendance" : "View details"}
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

export default SubjectCard;
