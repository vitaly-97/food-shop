import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food Shop
        </Link>
        <ul className="right">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
