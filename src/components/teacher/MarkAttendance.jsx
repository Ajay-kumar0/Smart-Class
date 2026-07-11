import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, X, Clock3, Save, CalendarDays } from "lucide-react";
import DashboardLayout from "../common/DashboardLayout";
import { teacherSubjects, classRoster } from "../../data/dummyData";
import "./MarkAttendance.css";

const statusMeta = {
  present: { label: "Present", icon: Check, className: "present" },
  late: { label: "Late", icon: Clock3, className: "late" },
  absent: { label: "Absent", icon: X, className: "absent" },
};

const MarkAttendance = () => {
  const location = useLocation();
  const initialSubjectId = location.state?.subjectId || teacherSubjects[0].id;

  const [activeSubject, setActiveSubject] = useState(initialSubjectId);
  const [roster, setRoster] = useState(classRoster);

  const setStatus = (studentId, status) =>
    setRoster((prev) => prev.map((s) => (s.id === studentId ? { ...s, status } : s)));

  const presentCount = roster.filter((s) => s.status === "present").length;
  const lateCount = roster.filter((s) => s.status === "late").length;
  const absentCount = roster.filter((s) => s.status === "absent").length;

  return (
    <DashboardLayout role="teacher" name="Dr. Ravi Sharma" subtitle="Mark attendance">
      <div className="mark-toolbar">
        <div className="mark-toolbar__subjects">
          {teacherSubjects.map((subj) => (
            <button
              key={subj.id}
              className={`mark-tab${activeSubject === subj.id ? " is-active" : ""}`}
              onClick={() => setActiveSubject(subj.id)}
            >
              {subj.code}
            </button>
          ))}
        </div>

        <div className="mark-toolbar__date">
          <CalendarDays size={16} />
          <span>Today &middot; Session 1</span>
        </div>
      </div>

      <div className="mark-summary">
        <span className="badge badge-aqua">{presentCount} present</span>
        <span className="badge badge-amber">{lateCount} late</span>
        <span className="badge badge-coral">{absentCount} absent</span>
        <span className="badge badge-violet">{roster.length} total</span>
      </div>

      <div className="roster card">
        <div className="roster__head">
          <span>Roll No.</span>
          <span>Student</span>
          <span>Status</span>
        </div>

        {roster.map((student) => (
          <div className="roster__row" key={student.id}>
            <span className="roster__roll">{student.rollNo}</span>
            <span className="roster__name">{student.name}</span>
            <span className="roster__toggle">
              {Object.entries(statusMeta).map(([key, meta]) => (
                <button
                  key={key}
                  className={`toggle-btn toggle-btn--${meta.className}${
                    student.status === key ? " is-active" : ""
                  }`}
                  onClick={() => setStatus(student.id, key)}
                  aria-label={`Mark ${student.name} ${meta.label}`}
                >
                  <meta.icon size={15} />
                </button>
              ))}
            </span>
          </div>
        ))}
      </div>

      <button className="btn btn-violet mark-save">
        <Save size={17} /> Save attendance
      </button>
    </DashboardLayout>
  );
};

export default MarkAttendance;
