import './Styles.Hero.css';
import heroImg from '../../assets/hero-img.png';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
// import { useTheme } from '../../common/ThemeContext';
function Hero() {
  return (
      <section name="home" className='style-hero content-center mr-32'>
        <div className='flex'>
          <img className='img-hero mx-20'
            src={heroImg} 
            alt="Profile Picture Muh Amirul Rizal" 
            />
        <div className='style-bio'>
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
        </div>
      </section>
  )
}

export default Hero
