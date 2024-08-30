import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg'
function Hero() {
  return (
    <div>
      <section id='hero'>
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
      </section>
    </div>
  )
}

export default Hero
