import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #2ecc71, #3498db)",
        padding: "12px 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <h2 style={{ color: "#fff", margin: 0 }}>MyApp</h2>

        {/* Desktop Menu */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "25px",
            margin: 0,
            padding: 0,
          }}
          className="desktop-menu"
        >
          <NavItem text="Home" />
          <NavItem text="About" />
          <NavItem text="Features" />
        </ul>

        {/* Hamburger */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
          }}
          className="hamburger"
        >
          <span style={barStyle}></span>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul
          style={{
            listStyle: "none",
            padding: "15px 0",
            margin: 0,
            textAlign: "center",
          }}
          className="mobile-menu"
        >
          <NavItem text="Home" mobile />
          <NavItem text="About" mobile />
          <NavItem text="Features" mobile />
        </ul>
      )}

      {/* Inline media query */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-menu {
              display: none;
            }
            .hamburger {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
};

const NavItem = ({ text, mobile }) => (
  <li
    style={{
      padding: mobile ? "12px 0" : "0",
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "#fff",
        fontWeight: "600",
        letterSpacing: "1px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
      onMouseLeave={(e) => (e.target.style.opacity = "1")}
    >
      {text}
    </Link>
  </li>
);

const barStyle = {
  width: "25px",
  height: "3px",
  background: "#fff",
  margin: "4px 0",
};

export default Navbar;
