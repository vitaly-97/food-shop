import React from "react";

function Footer() {
  return (
    <footer className="page-footer blue darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export { Footer };
