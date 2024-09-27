import './Styles.Hero.css';
import heroImg from '../../assets/hero-img.png';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
// import { useTheme } from '../../common/ThemeContext';
function Hero() {
  return (
      <section name="home">
        <div>
            <img
            src={heroImg} 
            alt="Profile Picture Muh Amirul Rizal" 
            />
        </div>
        <div >
          <h1>
            This is<br />
            My Name<br />
            Name
          </h1>
          <h2>
            Frontend Developer</h2>
            <span>
              <a href="#" target='_blank'>
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" target='_blank'>
                <img src={githubIcon} alt="Github" />
              </a>
              <a href="#" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </span>
            <p>
              this is going to be edited, so for the time being this is
              our text.
            </p>
            <a href={CV} target="_blank">
              <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
                Resume
              </button>
            </a>
        </div>
      </section>
  )
}

export default Hero
