import React, { useState } from "react"
import "../assets/styles/global.css"
import "../../public/static/fonts/fonts.css"

const Contact = () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-8">
        <div className="font-semibold">
          <span className="font-header text-4xl pt-10">Contact</span>
        </div>
        <div>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="block text-gray-600 hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            {open ? (
              "X"
            ) : (
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect width="100" height="10" rx="8"></rect>
                <rect y="30" width="100" height="10" rx="8"></rect>
                <rect y="60" width="100" height="10" rx="8"></rect>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${open ? "" : "hidden"} px-6 pt-3 pb-5 mobile-drawer-bg`}
      >
        <a href="#" className="mt-2 block hover:text-white">
          home
        </a>
        <a href="#" className="mt-2 block hover:text-white">
          about
        </a>
        <a href="#" className="mt-2 block hover:text-white">
          blog
        </a>
        <a href="#" className="mt-2 block hover:text-white">
          contact
        </a>
      </div>
    </header>
  )
}

export default Contact
