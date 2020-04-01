import React from "react"
import "../assets/styles/global.css"
import Image from "../components/image"
import "../assets/about.css"

const About = () => {
  return (
    <div>
      <header class="flex justify-around">
        <div class="title">About me</div>
        <div class="tabl flex items-end">
          <a href="/home">home</a>|<a href="/about">about</a>|
          <a href="/blog">blog</a>|<a href="/contact">contact</a>
        </div>
      </header>
      {/* <nav class="flex items-center justify-around flex-wrap bg-white-500 p-6">
        <div class="flex items-center justify-center flex-grow text-black mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-cursive text-xl tracking-tight">About Me</span>
        </div>
         <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-bold hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div> 
        <div class="w-full block flex-grow lg:flex lg:items-end lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-semibold">
              Docs 
            </a>|
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-semibold">
              Examples 
            </a>|
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-semibold">
              Blog
            </a>
          </div>
          <div>
            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div>
        </div>
      </nav> */}
      <div class="main">
        <div class="text">
          <h3>Hey! I’m Kristina.</h3>
          <br />
          <p>
            Hi and welcome to Kristina Maness Photography! I am a Tampa-based
            photographer specializing in a crisp, clean, elegant style that
            highlights the beauty and uniqueness in your family or professional
            photo shoots. From engagement photos to shooting weddings, and every
            step of your life journey, we’ll work together to find the perfect
            touch and make your family shine. My work is also used by clients in
            their branding and marketing materials and more.
          </p>
          <br />
          <p>
            As a lifestyle and natural photographer, I love to work with the
            elegant light of day — especially in the early morning hours right
            after the sun comes up or during the golden hour just before dusk.
            That magic gold dust of the beginning and end of day makes for truly
            beautiful photos of you and your family or loved one. (Insert heart
            eyes!)
          </p>
          <br />
          <p>
            Your Tampa family or engagement photo shoot should be fun, fresh and
            enjoyable for everyone. Whether booking a newborn session or fresh
            48, annual family photos, or doing a holiday session, I want to
            capture you being you. That’s what makes each project special. My
            wedding photography makes your destination wedding or local Tampa
            event so idyllic and unique to the couple. We sit down beforehand to
            go over your style and must-haves to ensure perfection from start to
            finish on your special day.
          </p>
          <br />
          <p>
            I also am known for my work with professionals — turning head shots
            into editorial quality shoots and making your business sparkle with
            my creative touch behind the lens. My marketing and branding
            photography is done in the same fresh and light style as the rest of
            my work, bringing an ethereal and gorgeous glow to every project you
            need.
          </p>
          <br />
          <p>
            When I’m not photographing clients and editing their favorites to
            perfection, my hobbies include hanging out with my boyfriend and
            cat, mixing up cocktails, scouting cool photo shoot locations in and
            around Tampa, sipping on bourbon and guzzling coffee. Whether
            booking a family beach vacation photo shoot in Tampa, looking for
            someone local to become your go-to photographer, or bringing your
            wedding and engagement pictures to the next level, contact me today
            and let’s make some memories together that will never go out of
            style.
          </p>
        </div>
        <div class="pic">
          <Image class="h-200 w-200" />
        </div>
      </div>
    </div>
  )
}

export default About
