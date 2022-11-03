/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react"
import ProjectItem from "../shared/ProjectItem"
import Flickity from "react-flickity-component"
import { MySlider } from "./CarouselStyle"
import PortfolioContext from "../../context/portfolio/PortfolioContext"

const Carousel = (props) => {
  let flkty
  let [carouselIndex, setCarouselIndex] = useState(null)

  const { projects } = useContext(PortfolioContext)

  console.log(projects)

  const handleChange = (index) => {
    setCarouselIndex(index) // Not working
  }

  useEffect(() => {
    if (flkty) {
      console.log("this ran")
      flkty.on("settle", () => {})

      flkty.on("change", (index) => {
        handleChange(index)
      })
    }
  }, [carouselIndex])

  return (
    <MySlider>
      <Flickity
        flickityRef={(c) => (flkty = c)}
        options={{
          initialIndex: props.initialIndex,
          cellAlign: "left",
          contain: true,
          autoPlay: true,
          draggable: ">1",
          freeScroll: false,
          pageDots: true,
          prevNextButtons: true,
          resize: true,
          watchCSS: false,
          wrapAround: false,
        }}
      >
        {projects.map((project, index) => {
          return (
            <ProjectItem
              key={project.id}
              project={project.fields}
              projectImg={project.fields.avatar}
              title={project.fields.title}
              description={project.fields.description}
            />
          )
        })}
      </Flickity>
    </MySlider>
  )
}

export default Carousel
