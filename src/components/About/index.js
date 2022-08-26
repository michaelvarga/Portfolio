import React, {useState, useEffect} from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faReact, faCss3, faJsSquare, faGitAlt, faPython } from "@fortawesome/free-brands-svg-icons"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  //   useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>INSERT PARAGRAPH ABOUT MYSELF HERE</p>
        <p>INSERT PARAGRAPH ABOUT MYSELF HERE</p>
        <p>INSERT PARAGRAPH ABOUT MYSELF HERE</p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#DD0031"/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#DD0031"/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#DD0031"/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#DD0031"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
