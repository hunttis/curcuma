import React, { useState } from "react"
import { Link } from "react-router-dom"

export const TopMenu = ({}: {}) => {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Link className="navbar-item" to="/today">
            Today
          </Link>
          <Link className="navbar-item" to="/events">
            Events
          </Link>
          <Link className="navbar-item" to="/contactinfo">
            Contact Info
          </Link>
          <Link className="navbar-item" to="/companyinfo">
            Company Info
          </Link>
          <Link className="navbar-item" to="/articles">
            Articles
          </Link>
          <Link className="navbar-item" to="/admin">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}
