import { useNavigate } from "react-router-dom";
import { BookOpen, Users, CalendarCheck2, TrendingUp, Plus } from "lucide-react";
import DashboardLayout from "../common/DashboardLayout";
import StatCard from "../common/StatCard";
import SubjectCard from "../common/SubjectCard";
import { teacherSubjects, attendancePercent } from "../../data/dummyData";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const totalStudents = teacherSubjects.reduce((sum, s) => sum + s.studentsEnrolled, 0);
  const avgAttendance = Math.round(
    teacherSubjects.reduce((sum, s) => sum + attendancePercent(s.sessions), 0) / teacherSubjects.length
  );

  return (
    <DashboardLayout role="teacher" name="Dr. Ravi Sharma" subtitle="Good to see you, Professor">
      <div className="dash-stats">
        <StatCard icon={BookOpen} label="Subjects taught" value={teacherSubjects.length} tone="violet" />
        <StatCard icon={Users} label="Students across subjects" value={totalStudents} tone="aqua" />
        <StatCard icon={TrendingUp} label="Average attendance" value={`${avgAttendance}%`} tone="amber" />
        <StatCard icon={CalendarCheck2} label="Sessions this month" value="24" tone="coral" />
      </div>

      <div className="dash-section-head">
        <h3>Your subjects</h3>
        <button className="btn btn-ghost btn-sm">
          <Plus size={16} /> Add subject
        </button>
      </div>

      <div className="dash-grid">
        {teacherSubjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            role="teacher"
            onOpen={() => navigate("/teacher/mark-attendance", { state: { subjectId: subject.id } })}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
