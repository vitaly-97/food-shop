import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food Shop
        </Link>
      </div>
    </nav>
  );
}

export { Header };
