import React from "react";
import { NavLink, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link className="brand-link">
        <img
          src="dist/img/brandm3dia-logo.jpg"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Brand M3dia</span>
      </Link>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <NavLink to="/">
              <li className="nav-item has-treeview menu-open">
                <Link to="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-down" />
                  </p>
                </Link>
              </li>
            </NavLink>

            <NavLink to={"/order"} className="nav-item">
              <li>
                <Link to={"/order"} className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Orders</p>
                </Link>
              </li>
            </NavLink>

            <NavLink to={"/categorylist"} className="nav-item">
              <li>
                <Link to={"/categorylist"} className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Category</p>
                </Link>
              </li>
            </NavLink>

            <NavLink to={"/product"} className="nav-item">
              <li>
                <Link to={"/productlist"} className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Products</p>
                </Link>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
