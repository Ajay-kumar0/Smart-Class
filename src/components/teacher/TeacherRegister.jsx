import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Building2, Plus, Trash2, BookPlus, UserPlus } from "lucide-react";
import AuthLayout from "../common/AuthLayout";
import "./TeacherRegister.css";

let uid = 2;

const TeacherRegister = () => {
  const [subjects, setSubjects] = useState([{ id: 1, name: "", code: "" }]);

  const addSubject = () => setSubjects((prev) => [...prev, { id: uid++, name: "", code: "" }]);

  const removeSubject = (id) =>
    setSubjects((prev) => (prev.length > 1 ? prev.filter((s) => s.id !== id) : prev));

  const updateSubject = (id, key, value) =>
    setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, [key]: value } : s)));

  return (
    <AuthLayout
      tone="violet"
      eyebrow="Teacher Portal"
      title="Create your teacher account"
      blurb="Register with at least one subject so students can find it and you can start tracking attendance."
    >
      <form className="auth__form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="t-name">Full name</label>
          <div className="input-wrap">
            <User />
            <input id="t-name" type="text" placeholder="Dr. Ravi Sharma" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="t-dept">Department</label>
          <div className="input-wrap">
            <Building2 />
            <input id="t-dept" type="text" placeholder="Computer Applications" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="t-email-r">Email</label>
          <div className="input-wrap">
            <Mail />
            <input id="t-email-r" type="email" placeholder="you@college.edu" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="t-password-r">Password</label>
          <div className="input-wrap">
            <Lock />
            <input id="t-password-r" type="password" placeholder="Create a password" />
          </div>
        </div>

        <div className="subject-builder">
          <div className="subject-builder__head">
            <p className="field-title">
              <BookPlus size={16} /> Your subjects
            </p>
            <span className="badge badge-violet">min. 1 required</span>
          </div>

          {subjects.map((subject) => (
            <div className="subject-builder__row" key={subject.id}>
              <input
                type="text"
                placeholder={`Subject name (e.g. Data Structures)`}
                value={subject.name}
                onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
              />
              <input
                type="text"
                className="subject-builder__code"
                placeholder="Code"
                value={subject.code}
                onChange={(e) => updateSubject(subject.id, "code", e.target.value)}
              />
              <button
                type="button"
                className="subject-builder__remove"
                onClick={() => removeSubject(subject.id)}
                disabled={subjects.length === 1}
                aria-label="Remove subject"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          <button type="button" className="subject-builder__add" onClick={addSubject}>
            <Plus size={16} /> Add another subject
          </button>
        </div>

        <button type="submit" className="btn btn-violet btn-block">
          Create account <UserPlus size={17} />
        </button>
      </form>

      <p className="auth__switch">
        Already registered? <Link to="/teacher/login">Log in instead</Link>
      </p>
      <p className="auth__switch-alt">
        Not a teacher? <Link to="/student/register">Go to student registration</Link>
      </p>
    </AuthLayout>
  );
};

export default TeacherRegister;
