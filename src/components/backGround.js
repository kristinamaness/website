import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image-es5"

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(
          relativePath: { eq: "evie-s-_IpKsTK9gcE-unsplash.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              aspectRatio
              base64
              originalImg
              srcSetWebp
              srcWebp
              tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.background.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className="w-screen h-screen bg-cover bg-center"
          fluid={imageData}
          backgroundColor={`#ffffff`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default BackgroundSection
