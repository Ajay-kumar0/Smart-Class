import { Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import AuthLayout from "../common/AuthLayout";

const TeacherLogin = () => {
  return (
    <AuthLayout
      tone="violet"
      eyebrow="Teacher Portal"
      title="Welcome back, Professor"
      blurb="Log in to mark attendance and keep tabs on every subject you teach."
    >
      <form className="auth__form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="t-email">Email</label>
          <div className="input-wrap">
            <Mail />
            <input id="t-email" type="email" placeholder="you@college.edu" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="t-password">Password</label>
          <div className="input-wrap">
            <Lock />
            <input id="t-password" type="password" placeholder="Enter your password" />
          </div>
        </div>

        <button type="submit" className="btn btn-violet btn-block">
          Log in <LogIn size={17} />
        </button>
      </form>

      <p className="auth__switch">
        New here? <Link to="/teacher/register">Register as a teacher</Link>
      </p>
      <p className="auth__switch-alt">
        Not a teacher? <Link to="/student/login">Go to student login</Link>
      </p>
    </AuthLayout>
  );
};

export default TeacherLogin;
