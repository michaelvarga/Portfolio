import { useState, useEffects } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import About from "../About"
import Logo from '../Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const introArray = "Hi! I'm Mike".split('')
  // const nameArray = 'Mike Varga,'.split('')
  // const jobArray = 'software developer'.split('')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={introArray}
              idx={5}
            />
            <span role="img">{String.fromCodePoint(0x1f44b)}</span>
            {/* <br /> */}
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            /> */}
          </h1>
          <p>
            A passionate Full Stack Software Developer with experience building
            web and mobile apps with JavaScript / React.js / Node.js / React
            Native and more.
          </p>
          <div>Github, LinkedIn, Email Icons with Links Here</div>
          {/* Change the contact route */}
          <Link to="/contact" className="flat-button">
            Resume
          </Link>
          <div>What I Do</div>
          <div>Projects</div>
          <div>Education</div>
          <div>Experience</div>
          <div>Contact Me</div>
        </div>
        {/* <About /> */}
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
