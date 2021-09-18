import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


export default function NavBar() {
    return (
        <header style={{backgroundColor: "#d6d3d1"}}>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-black"
                        className="inline-flex items-center py-6 px-3 mr-4 text-gray-900 hover:text-gray-500 text-4xl font-bold cursive tracking-widest">
                        Tenzin
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-black-900 bg-gray-200"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-black-900 bg-gray-200"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-500"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/tenzin-tashi-bb520510a/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />
                    <SocialIcon
                        url="https://www.instagram.com/tenz1308/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />
                    <SocialIcon
                        url="https://github.com/tenzin1308"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}
