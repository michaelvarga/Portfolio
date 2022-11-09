import { useState, useEffects } from 'react'
import { Link } from 'react-router-dom'
import Loader from "react-loaders"
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const introArray = "Hello! I'm".split('')
  const nameArray = 'Mike Varga,'.split('')
  const jobArray = 'software developer'.split('')

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
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Home
