import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const navLinks = [
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="text-[20px] font-bold tracking-[3px] text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            SBX
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="sms:+13058902051"
              className="text-white hover:text-accent transition-colors"
              aria-label="Text SBX"
            >
              <MessageCircle size={22} />
            </a>
            <button
              className="text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out drawer */}
      {createPortal(
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-72 bg-background border-l border-border z-[70] p-8 flex flex-col gap-6 shadow-2xl"
              >
                <button
                  onClick={() => setMobileOpen(false)}
                  className="self-end text-foreground"
                >
                  <X size={24} />
                </button>
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 text-center px-5 py-3 bg-foreground text-background font-semibold rounded-xl"
                >
                  Reserve Now
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
