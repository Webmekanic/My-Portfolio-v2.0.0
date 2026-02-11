/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react"
import ProjectItem from "../shared/ProjectItem"
import PortfolioContext from "../../context/portfolio/PortfolioContext"
import CardSkeleton from "../shared/CardSkeleton"
import { MySlider } from "./CarouselStyle"

const Carousel = (props) => {
  let [carouselIndex, setCarouselIndex] = useState(null)

  const { projects } = useContext(PortfolioContext)
  console.log(projects)

  const handleChange = (index) => {
    setCarouselIndex(index)
  }

  return (
    <MySlider>
        {projects.length === undefined ? (
          <CardSkeleton cards={4} cardWidth="340px" />
        ) : (
          projects.map((project, index) => {
            return (
              <ProjectItem
                key={index}
                i={index}
                project={project.fields}
                projectImg={project.fields.avatar.fields.file.url}
                title={project.fields.title}
                description={project.fields.description}
                projectRepo={project.fields.repoLink}
                projectDemo={project.fields.liveLink}
                cardWidth="100%"
              />
            )
          })
        )}
    </MySlider>
  )
}

export default Carousel
