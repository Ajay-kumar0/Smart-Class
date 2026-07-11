import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Hash, Check, UserPlus, ListChecks } from "lucide-react";
import AuthLayout from "../common/AuthLayout";
import { allSubjects } from "../../data/dummyData";
import "./StudentRegister.css";

const StudentRegister = () => {
  const [selected, setSelected] = useState([]);

  const toggleSubject = (id) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  return (
    <AuthLayout
      tone="aqua"
      eyebrow="Student Portal"
      title="Create your student account"
      blurb="Select the subjects you're taking this semester — you can track attendance for each one."
    >
      <form className="auth__form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="s-name">Full name</label>
          <div className="input-wrap">
            <User />
            <input id="s-name" type="text" placeholder="Aarav Mehta" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="s-roll">Roll number</label>
          <div className="input-wrap">
            <Hash />
            <input id="s-roll" type="text" placeholder="MCA25001" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="s-email-r">Email</label>
          <div className="input-wrap">
            <Mail />
            <input id="s-email-r" type="email" placeholder="you@student.edu" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="s-password-r">Password</label>
          <div className="input-wrap">
            <Lock />
            <input id="s-password-r" type="password" placeholder="Create a password" />
          </div>
        </div>

        <div className="subject-picker">
          <div className="subject-picker__head">
            <p className="field-title">
              <ListChecks size={16} /> Select your subjects
            </p>
            <span className="badge badge-aqua">{selected.length} selected</span>
          </div>

          <div className="subject-picker__grid">
            {allSubjects.map((subject) => {
              const isActive = selected.includes(subject.id);
              return (
                <button
                  type="button"
                  key={subject.id}
                  className={`subject-pill subject-pill--${subject.color}${isActive ? " is-active" : ""}`}
                  onClick={() => toggleSubject(subject.id)}
                >
                  <span className="subject-pill__check">{isActive && <Check size={13} />}</span>
                  <span>
                    <strong>{subject.code}</strong>
                    <em>{subject.name}</em>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button type="submit" className="btn btn-aqua btn-block">
          Create account <UserPlus size={17} />
        </button>
      </form>

      <p className="auth__switch">
        Already registered? <Link to="/student/login">Log in instead</Link>
      </p>
      <p className="auth__switch-alt">
        Not a student? <Link to="/teacher/register">Go to teacher registration</Link>
      </p>
    </AuthLayout>
  );
};

export default StudentRegister;
