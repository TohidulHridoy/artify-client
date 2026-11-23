import { Link } from "react-router";
import { FaFacebookF, FaInstagram, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Logo from "./Logo";

const socials = [
  { href: "https://facebook.com", label: "Facebook", icon: <FaFacebookF /> },
  { href: "https://x.com", label: "X", icon: <FaXTwitter /> },
  { href: "https://instagram.com", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://pinterest.com", label: "Pinterest", icon: <FaPinterestP /> },
];

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-neutral-content/70 leading-relaxed">
            A home for artists to share their work, find inspiration in other galleries and build a
            community around creativity.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="btn btn-circle btn-sm bg-neutral-content/10 border-0 text-neutral-content hover:bg-primary hover:text-primary-content"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-neutral-content/70">
            <li><Link to="/explore" className="hover:text-primary">All Artworks</Link></li>
            <li><Link to="/add-artwork" className="hover:text-primary">Share Your Art</Link></li>
            <li><Link to="/my-gallery" className="hover:text-primary">My Gallery</Link></li>
            <li><Link to="/my-favorites" className="hover:text-primary">My Favorites</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-neutral-content/70">
            <li className="flex items-center gap-2"><FiMail /> hello@artify.com</li>
            <li className="flex items-center gap-2"><FiPhone /> +880 1700-000000</li>
            <li className="flex items-center gap-2"><FiMapPin /> Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-content/10 py-5 text-center text-sm text-neutral-content/60">
        © {new Date().getFullYear()} Artify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
