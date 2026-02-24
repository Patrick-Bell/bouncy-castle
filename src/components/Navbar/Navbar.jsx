import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { MdCastle, MdEmail, MdMenu, MdClose } from "react-icons/md";
import { FaSearch, FaInstagram } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm`}>
        <div className="flex items-center justify-between px-4 sm:px-8 h-16">

          {/* Logo */}
          <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-md shadow-pink-200 transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110">
              <MdCastle size={22} />
            </div>
            <span className="font-extrabold text-lg text-gray-900 tracking-tight">
              Bouncy <span className="text-pink-500">Castle</span>
            </span>
          </div>

          {/* Nav Menu — hidden on mobile */}
          <div className="hidden md:block">
            <NavbarMenu />
          </div>

          {/* Right actions — hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger>
                <button className="flex items-center justify-center rounded-lg hover:border hover:border-gray-200 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 p-2 cursor-pointer">
                  <FaSearch size={17} />
                </button>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p className="text-xs">Search</p>
              </TooltipContent>
            </Tooltip>

            <div className="w-px h-5 bg-gray-200 rounded-full mx-1" />

            <Tooltip>
              <TooltipTrigger>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-lg hover:border hover:border-gray-200 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 p-2"
                >
                  <FaInstagram size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p className="text-xs">Instagram</p>
              </TooltipContent>
            </Tooltip>

            <div className="w-px h-5 bg-gray-200 rounded-full mx-1" />

            <button className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-2 rounded-lg flex items-center gap-2 cursor-pointer hover:shadow-sm">
              <MdEmail size={20} />
              <p className="text-sm">Contact Us</p>
            </button>
          </div>

          {/* Hamburger — visible on mobile only */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 cursor-pointer transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
            <div className="md:hidden fixed inset-0 top-16 bg-white px-4 pb-4 flex flex-col gap-1 z-40 overflow-y-auto">
            {/* Nav links */}
            {[
              { label: "Home", href: "/" },
              { label: "Castles", href: "/castles" },
              { label: "Packages", href: "/packages" },
              { label: "Gallery", href: "/gallery" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="w-full px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-500 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}

            <div className="h-px bg-gray-100 my-2" />

            {/* Search */}
            <button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors text-sm">
              <FaSearch size={16} />
              Search
            </button>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-2 py-2 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors text-sm"
            >
              <FaInstagram size={18} />
              Instagram
            </a>

            <div className="h-px bg-gray-100" />

            {/* Contact Us */}
            <button className="bg-gradient-to-br from-pink-400 to-pink-600 text-white px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 w-full cursor-pointer hover:shadow-md transition-shadow">
              <MdEmail size={20} />
              <span className="text-sm font-medium">Contact Us</span>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;