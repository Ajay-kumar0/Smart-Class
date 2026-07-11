import { ScanLine } from "lucide-react";
import "./Logo.css";

const Logo = ({ size = "md" }) => {
  return (
    <div className={`logo logo--${size}`}>
      <span className="logo__mark">
        <ScanLine strokeWidth={2.4} />
      </span>
      <span className="logo__word">
        Smart<span className="logo__word--accent">Class</span>
      </span>
    </div>
  );
};

export default Logo;
