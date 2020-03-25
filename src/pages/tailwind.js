import React from "react"

import "../assets/styles/global.css"
import Image from "../components/image"

const Home = () => {
  return (
    <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
      <div className="flex-shrink-0">
        <Image className="h-12 w-12" />
      </div>
      <div className="ml-6 pt-1">
        <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
        <p className="text-base text-gray-600 leading-normal">
          You have a new message!
        </p>
      </div>
    </div>
  )
}

export default Home
