import Link from "next/link";
import { appName } from "../lib/constants";

export default function Navbar() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "rgb(42, 46 ,58)" }}
    >
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/logo.png" width="32px" className="me-2" alt="" />
            {appName}
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product">
                <a className="nav-link">Product</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
