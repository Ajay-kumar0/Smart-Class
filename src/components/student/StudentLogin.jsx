import { Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import AuthLayout from "../common/AuthLayout";

const StudentLogin = () => {
  return (
    <AuthLayout
      tone="aqua"
      eyebrow="Student Portal"
      title="Welcome back"
      blurb="Log in to check your attendance across every subject you're enrolled in."
    >
      <form className="auth__form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="s-email">Email</label>
          <div className="input-wrap">
            <Mail />
            <input id="s-email" type="email" placeholder="you@student.edu" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="s-password">Password</label>
          <div className="input-wrap">
            <Lock />
            <input id="s-password" type="password" placeholder="Enter your password" />
          </div>
        </div>

        <button type="submit" className="btn btn-aqua btn-block">
          Log in <LogIn size={17} />
        </button>
      </form>

      <p className="auth__switch">
        New here? <Link to="/student/register">Register as a student</Link>
      </p>
      <p className="auth__switch-alt">
        Not a student? <Link to="/teacher/login">Go to teacher login</Link>
      </p>
    </AuthLayout>
  );
};

export default StudentLogin;
