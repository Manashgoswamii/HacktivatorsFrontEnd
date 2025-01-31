import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="mb-4">
      <div className="navbar rounded-2xl shadow-lg bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
           
          </div>
          <Link to="/" className="btn btn-ghos text-customBlue text-2xl">TechWise</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to="/login" className="bg-customBlue px-6 py-2 rounded-xl text-white text-lg cursor-pointer">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
