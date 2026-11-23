import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiMoon, FiSun, FiLogOut } from "react-icons/fi";
import Logo from "./Logo";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";
import { FALLBACK_AVATAR, handleImageError } from "../utils/constants";

const links = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore Artworks" },
  { to: "/add-artwork", label: "Add Artwork" },
  { to: "/my-gallery", label: "My Gallery" },
  { to: "/my-favorites", label: "My Favorites" },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out. See you soon!");
      navigate("/");
    } catch {
      toast.error("Could not log out. Please try again.");
    }
  };

  const navItems = links.map((link) => (
    <li key={link.to}>
      <NavLink
        to={link.to}
        end={link.to === "/"}
        className={({ isActive }) =>
          `rounded-lg font-medium ${isActive ? "text-primary bg-primary/10" : ""}`
        }
      >
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur border-b border-base-300">
      <nav className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start gap-1">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-square" aria-label="Open menu">
              <HiOutlineMenuAlt3 size={24} />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-56 p-2 shadow-lg bg-base-100 rounded-box border border-base-300 z-50"
            >
              {navItems}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">{navItems}</ul>
        </div>

        <div className="navbar-end gap-2">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
            data-tooltip-id="nav-tip"
            data-tooltip-content={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {user ? (
            // Hover the photo to see name + logout
            <div className="dropdown dropdown-end dropdown-hover">
              <div tabIndex={0} role="button" className="avatar cursor-pointer">
                <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    src={user.photoURL || FALLBACK_AVATAR}
                    alt={user.displayName || "User"}
                    referrerPolicy="no-referrer"
                    onError={handleImageError(FALLBACK_AVATAR)}
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-50 w-60 pt-3"
              >
                <div className="p-4 shadow-lg bg-base-100 rounded-box border border-base-300">
                  <p className="font-display text-lg font-semibold">
                    {user.displayName || "Artify member"}
                  </p>
                  <p className="text-sm text-base-content/60 break-all">{user.email}</p>
                  <button onClick={handleLogout} className="btn btn-primary btn-sm w-full mt-4">
                    <FiLogOut /> Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-ghost btn-sm sm:btn-md">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-primary btn-sm sm:btn-md">
                Register
              </NavLink>
            </>
          )}
        </div>
      </nav>
      <Tooltip id="nav-tip" place="bottom" />
    </header>
  );
};

export default Navbar;
