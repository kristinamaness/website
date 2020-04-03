import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    {/* <div class="title">Home</div> */}
    <div class="title">About me</div>
    {/* <div class="title">Blog</div>
    <div class="title">Contact</div> */}
    <div class="tabs">
      <a href="/home">home</a>|<a href="/about">about</a>|
      <a href="/blog">blog</a>|<a href="/contact">contact</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
