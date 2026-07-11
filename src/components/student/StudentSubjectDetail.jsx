import { useParams, Link } from "react-router-dom";
import { ArrowLeft, UserRound, TrendingUp } from "lucide-react";
import DashboardLayout from "../common/DashboardLayout";
import PunchGrid from "../common/PunchGrid";
import { studentSubjects, attendancePercent } from "../../data/dummyData";
import "./StudentSubjectDetail.css";


const statusLabel = { present: "Present", late: "Late", absent: "Absent", none: "No class" };

const StudentSubjectDetail = () => {
  const { subjectId } = useParams();
  const subject = studentSubjects.find((s) => s.id === subjectId) || studentSubjects[0];
  const pct = attendancePercent(subject.sessions);
  const recent = [...subject.sessions].reverse().slice(0, 10);

  return (
    <DashboardLayout role="student" name="Aarav Mehta" subtitle={subject.name}>
      <Link to="/student/dashboard" className="detail-back">
        <ArrowLeft size={16} /> Back to dashboard
      </Link>

      <div className={`detail-hero card detail-hero--${subject.color}`}>
        <div>
          <span className="badge badge-violet">{subject.code}</span>
          <h2>{subject.name}</h2>
          <p className="detail-hero__teacher">
            <UserRound size={15} /> {subject.teacher}
          </p>
        </div>
        <div className="detail-hero__pct">
          <TrendingUp size={18} />
          <span>{pct}%</span>
          <small>attendance</small>
        </div>
      </div>

      <div className="detail-grid-card card">
        <div className="detail-grid-card__head">
          <h3>Full session history</h3>
          <div className="auth__legend">
            <span><i className="dot dot--present" /> Present</span>
            <span><i className="dot dot--late" /> Late</span>
            <span><i className="dot dot--absent" /> Absent</span>
            <span><i className="dot dot--none" /> No class</span>
          </div>
        </div>
        <PunchGrid sessions={subject.sessions} size="lg" />
      </div>

      <div className="detail-list card">
        <h3>Recent sessions</h3>
        {recent.map((s) => (
          <div className="detail-list__row" key={s.day}>
            <span>Session {s.day}</span>
            <span className={`badge badge-${s.status === "present" ? "aqua" : s.status === "late" ? "amber" : s.status === "absent" ? "coral" : "violet"}`}>
              {statusLabel[s.status]}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default StudentSubjectDetail;
