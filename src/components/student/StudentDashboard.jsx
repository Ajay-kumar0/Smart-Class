import { useNavigate } from "react-router-dom";
import { BookOpen, TrendingUp, CalendarX2, CalendarCheck2 } from "lucide-react";
import DashboardLayout from "../common/DashboardLayout";
import StatCard from "../common/StatCard";
import SubjectCard from "../common/SubjectCard";
import { studentSubjects, attendancePercent } from "../../data/dummyData";
import "../teacher/TeacherDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const overall = Math.round(
    studentSubjects.reduce((sum, s) => sum + attendancePercent(s.sessions), 0) / studentSubjects.length
  );
  const attended = studentSubjects.reduce(
    (sum, s) => sum + s.sessions.filter((x) => x.status === "present" || x.status === "late").length,
    0
  );
  const missed = studentSubjects.reduce(
    (sum, s) => sum + s.sessions.filter((x) => x.status === "absent").length,
    0
  );

  return (
    <DashboardLayout role="student" name="Aarav Mehta" subtitle="Here's where you stand">
      <div className="dash-stats">
        <StatCard icon={TrendingUp} label="Overall attendance" value={`${overall}%`} tone="aqua" />
        <StatCard icon={BookOpen} label="Subjects enrolled" value={studentSubjects.length} tone="violet" />
        <StatCard icon={CalendarCheck2} label="Classes attended" value={attended} tone="amber" />
        <StatCard icon={CalendarX2} label="Classes missed" value={missed} tone="coral" />
      </div>

      <div className="dash-section-head">
        <h3>Your subjects</h3>
      </div>

      <div className="dash-grid">
        {studentSubjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            role="student"
            onOpen={() => navigate(`/student/subject/${subject.id}`)}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
