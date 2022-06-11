import React from "react";

const Navigation: React.FC = () => {
    return (
        <nav className="relative mx-auto p-6 sticky top-0 z-20 bg-red-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex container items-center align-center justify-between">
                <div className="h-10 w-10">
                    <img
                        className="inline-block"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                    />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a className="hover:red" href="">
                        About
                    </a>
                    <a className="hover:red" href="">
                        Content
                    </a>
                    <a className="hover:red" href="">
                        Contact
                    </a>
                </div>
                <a
                    href="#"
                    className="hidden md:block p-3 px-6 pt-2 text-white bg-red-900 rounded-full baseline hover:bg-blue-900"
                >
                    Mark Sorce
                </a>
            </div>
        </nav>
    );
};

export default Navigation;
