import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf';
function Hero() {
  return (
      <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile Picture Muh Amirul Rizal" 
            />
            <img className={styles.colorMode} 
            src={themeIcon}
            alt='Color Mode'
            />
        </div>
        <div className={styles.info}>
          <h1>
            Muh<br />
            Amirul<br />
            Rizal
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
              <button className='hover'>
                Resume
              </button>
            </a>
        </div>
      </section>
  )
}

export default Hero
