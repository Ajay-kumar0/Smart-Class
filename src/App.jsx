import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landing/LandingPage";

import TeacherLogin from "./components/teacher/TeacherLogin";
import TeacherRegister from "./components/teacher/TeacherRegister";
import TeacherDashboard from "./components/teacher/TeacherDashboard";
import MarkAttendance from "./components/teacher/MarkAttendance";

import StudentLogin from "./components/student/StudentLogin";
import StudentRegister from "./components/student/StudentRegister";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentSubjectDetail from "./components/student/StudentSubjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Teacher */}
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/register" element={<TeacherRegister />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/mark-attendance" element={<MarkAttendance />} />

        {/* Student */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/subject/:subjectId" element={<StudentSubjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
