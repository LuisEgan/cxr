import React, { useRef, useEffect } from "react"
import Particles from "react-particles-js"
import LazyLinePainter from "lazy-painter"
import SEO from "../components/seo"
import particles from "json/particles.json"

import Isologo from "svg/isologo.svg"

import "scss/index.scss"

const IndexPage = () => {
  useEffect(() => {
    // TODO replace for TweenMax
    let el = document.querySelector("#eye")
    let myAnimation = new LazyLinePainter(el, {
      ease: "easeLinear",
      strokeWidth: 19.2,
      strokeOpacity: 1,
      strokeColor: "#f2f2f2",
      strokeCap: "square",
    })
    myAnimation.paint()
  }, [])

  return (
    <>
      <SEO title="Home" />
      <div id="home">
        <Particles params={particles} className="fullscreen-particles" />
        <Isologo id="eye" />
      </div>
    </>
  )
}

export default IndexPage
