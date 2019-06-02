import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <header className="bg-white h-20 flex items-center">
          <div className="container mx-auto flex items-center">
              <div className="brand text-left lg:w-1/4">
                  <h1 className="text-black font-bold text-xl">&#60;DarrenTaylor /></h1>
              </div>

              <div className="lg:w-3/4 flex justify-between items-center">
                  <nav className="shift">
                      <ul className="flex text-black font-bold">
                          <li className="mr-6">
                              <NavLink exact activeClassName="active" to="/"><i className="fas fa-home"></i></NavLink>
                          </li>
                          <li className="mr-6">
                              <NavLink to="/skills">skills</NavLink>
                          </li>
                          <li className="mr-6"><a href="">work</a></li>
                          <li className="mr-6">
                              <NavLink to="/about">about</NavLink>
                          </li>
                          <li className="mr-6"><a href="">blog</a></li>
                      </ul>
                  </nav>

                  <nav className="shift">
                      <ul className="flex text-black text-2xl">
                          <li className="mr-6"><a href=""><i className="fab fa-github"></i></a></li>
                          <li className="mr-6"><a href=""><i className="fab fa-stack-overflow"></i></a></li>
                      </ul>
                  </nav>
              </div>
          </div>
      </header>
  )
}

export default Header;