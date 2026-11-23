import { Link } from "react-router";

// Same logo style in navbar, footer and auth pages
const Logo = ({ className = "" }) => (
  <Link to="/" className={`flex items-center gap-2 ${className}`}>
    <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-content font-display text-xl font-bold">
      A
    </span>
    <span className="font-display text-2xl font-bold tracking-tight">
      Arti<span className="text-primary">fy</span>
    </span>
  </Link>
);

export default Logo;
