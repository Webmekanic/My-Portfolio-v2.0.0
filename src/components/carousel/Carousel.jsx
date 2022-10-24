/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import ProjectItem from "../shared/ProjectItem"
import Flickity from "react-flickity-component"
import { MySlider } from "./CarouselStyle"

const Carousel = (props) => {
  let flkty
  let [carouselIndex, setCarouselIndex] = useState(null)

  const [myProject, setMyproject] = useState([
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
    {
      id: "10",
    },
    {
      id: "11",
    },
    {
      id: "12",
    },
  ])

  const handleChange = (index) => {
    setCarouselIndex(index) // Not working
    console.log({ carouselIndex, index })
  }

  useEffect(() => {
    if (flkty) {
      console.log("this ran")
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`)
      })

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
          autoPlay: false,
          draggable: ">1",
          freeScroll: false,
          pageDots: true,
          prevNextButtons: true,
          resize: true,
          watchCSS: false,
          wrapAround: false,
        }}
      >
        {myProject.map((project) => {
          return <ProjectItem key={project.id} />
        })}
        {setMyproject}
      </Flickity>
    </MySlider>
  )
}

export default Carousel
