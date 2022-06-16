/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import mark from "../../assets/mark.jpeg"
const navigation = [
    {
        name: 'Product',
        href: '#'
    },
    {
        name: 'Features',
        href: '#'
    },
    {
        name: 'Marketplace',
        href: '#'
    },
    {
        name: 'Company',
        href: '#'
    },
];
const Hero: React.FC = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:block">Mark Sorce</span>
                                < span className="block text-indigo-600 xl:inline">Sr. Software Engineer</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Hi I'm Mark a Senior Software Engineer with an emphasis on the frontend, well versed in JavaScript and JavaScript technologies, such as React.js and Redux. I like to make videos on youtube about algorithms. I also like to play the guitar and game.
                            </p>
                        </div>
                    </main>
                </div>
            </div >
        </div >
    )
}

export default Hero;
