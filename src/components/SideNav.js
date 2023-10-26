import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#" className="brand-link">
        <img
          src="dist/img/brandm3dia-logo.jpg"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Brand M3dia</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div> */}
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
         <NavLink to="/home">
            <li className="nav-item has-treeview menu-open">
              <a href="/home" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-down" />
                </p>
              </a>
            </li>
        </NavLink>

            
            <NavLink to={"/order"} className="nav-item">
            <li>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Orders
                </p>
              </a>
            </li>
            </NavLink>

            <NavLink to={"/category"} className="nav-item">
            <li>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Category
                </p>
              </a>
            </li>
            </NavLink>

            <NavLink to={"/product"} className="nav-item">
            <li>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-th" />
                <p>
                  Products
                </p>
              </a>
            </li>
            </NavLink>


            
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default SideNav;
