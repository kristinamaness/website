import React, { useState } from "react"
import "../assets/styles/global.css"
import "../../public/static/fonts/fonts.css"

const Contact = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sm:flex sm:justify-between sm:items-center ">
      <div className="flex items-center justify-between px-6 py-8">
        <div className="font-semibold">
          <span className="font-header text-4xl pt-10">Contact</span>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="block text-gray-600 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            {open ? (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav className={`${open ? "" : "hidden"} pt-3 pb-5 sm:flex`}>
        <a href="#" className="mt-2 px-6 block">
          home
        </a>
        <a href="#" className="mt-2 px-6 block">
          about
        </a>
        <a href="#" className="mt-2 px-6 block">
          blog
        </a>
        <a href="#" className="mt-2 px-6 block">
          contact
        </a>
      </nav>
    </header>
  )
}

export default Contact
