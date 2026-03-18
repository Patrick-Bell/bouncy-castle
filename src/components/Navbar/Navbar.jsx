import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { MdCastle, MdEmail, MdMenu, MdClose } from "react-icons/md";
import { FaSearch, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router";
import SearchBox from "./Search";
import Logo from '../../assets/logo.jpg'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <nav className="fixed w-full lg:sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-8 h-16">

          {/* Logo */}
          <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center justify-center w-15 h-15 rounded-xl">
              <img src={Logo} className="rounded-xl" />
            </div>
            <span className="font-extrabold text-lg primary-text tracking-tight">
              Haze <span>Events</span>
            </span>
          </div>

          {/* Nav Menu — hidden on mobile */}
          <div className="hidden md:block">
            <NavbarMenu />
          </div>

          {/* Right actions — hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            <SearchBox />

            <div className="w-px h-5 bg-gray-200 rounded-full mx-1" />

            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://www.instagram.com/haze_events26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-lg hover:border hover:border-gray-200 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 p-2"
                >
                  <FaInstagram size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-xs">Instagram</p>
              </TooltipContent>
            </Tooltip>

            <div className="w-px h-5 bg-gray-200 rounded-full mx-1" />

            <a
              href="mailto:test123@gmail.com"
              className="primary-bg text-primary p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:shadow-md"
            >
              <MdEmail size={20} />
              <p className="text-sm">Contact Us</p>
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg primary-bg primary-text cursor-pointer transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div
            className="md:hidden fixed inset-0 top-16 z-40 overflow-auto"
            style={{ animation: "slideDown 0.25s ease-out forwards" }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <div className="relative bg-white border-gray-100">

              {/* Quick Links */}
              <div className="px-4 pt-5 pb-3">
                <p className="primary-text uppercase text-[10px] font-extrabold tracking-widest mb-2 px-2">
                  Quick Links
                </p>
                <div className="flex flex-col gap-0.5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Castles", href: "/bouncy-castles" },
                    { label: "Gallery", href: "/gallery" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-[#f8f9f2] hover:primary-text transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100 mx-4" />

              {/* Information */}
              <div className="px-4 py-3">
                <p className="primary-text uppercase text-[10px] font-extrabold tracking-widest mb-2 px-2">
                  Information
                </p>
                <div className="flex flex-col gap-0.5">
                  {[
                    { label: "Risk Assessments", href: "/risk-assessments" },
                    { label: "Terms and Conditions", href: "/terms-and-conditions" },
                    { label: "Payment Information", href: "/payments" },
                    { label: "Weather Policy", href: "/bad-weather-policy" },
                    { label: "FAQ", href: "/frequently-asked-questions" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-[#f8f9f2] hover:text-gray-800 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100 mx-4" />

              {/* Social Media */}
              <div className="px-4 py-3">
                <p className="primary-text uppercase text-[10px] font-extrabold tracking-widest mb-2 px-2">
                  Social Media
                </p>
                <div className="flex flex-col gap-0.5">
                  {[
                    { icon: <FaInstagram size={16} />, label: "Instagram", href: "https://www.instagram.com/haze_events26/" },
                    { icon: <FaFacebook size={16} />, label: "Facebook", href: "https://facebook.com" },
                    { icon: <FaTwitter size={16} />, label: "Twitter", href: "https://twitter.com" },
                  ].map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-[#f8f9f2] hover:text-gray-800 transition-colors"
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="px-4 pb-5 pt-2">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="secondary-bg secondary-text px-4 py-3 rounded-xl flex items-center justify-center gap-2 w-full font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  <MdEmail size={18} />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;