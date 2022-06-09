import React from "react";

class Navigation extends React.Component {
    render() {
        return (
          <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
              <div className="pt-2">
                <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
              </div>
              <div className="hidden md:flex space-x-6">
                <a className="hover:red" href="">Pricing</a>
                <a className="hover:red" href="">Pricing</a>
                <a className="hover:red" href="">Pricing</a>
                <a className="hover:red" href="">Pricing</a>
                <a className="hover:red" href="">Pricing</a>
              </div>
              <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-100 rounded-full baseline hover:bg-orange-100">Get Started</a>
            </div>
          </nav>
       )
    }
}

export default Navigation;
