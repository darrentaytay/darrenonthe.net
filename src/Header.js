import React from "react";

function Header() {
  return (
      <header className="bg-white h-20 flex items-center">
          <div className="container mx-auto flex items-center">
              <div className="brand text-left lg:w-1/4">
                  <h1 className="text-black font-bold text-xl">&#60;darren taylor /></h1>
              </div>

              <div className="lg:w-3/4 flex justify-between items-center">
                  <nav class="shift">
                      <ul className="flex text-black font-bold">
                          <li className="mr-6 active"><a href=""><i className="fas fa-home"></i></a></li>
                          <li className="mr-6"><a href="">skills</a></li>
                          <li className="mr-6"><a href="">work</a></li>
                          <li className="mr-6"><a href="">about</a></li>
                          <li className="mr-6"><a href="">blog</a></li>
                      </ul>
                  </nav>

                  <nav class="shift">
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