import styles from './HeroStyles.module.css';
import heroImg from '../../assets/cx.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import Resume from '../../assets/ChinXuan_Resume.pdf';


function Hero(){
    return(
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className="styles.hero" src={heroImg} alt="Profile Picture of Chin Xuan"/>
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon"/>
            </div>

            <div className={styles.info}>
                <h1>Hello, I'm Chin Xuan</h1>
                <span>
                    <a href="https://github.com/ChinFromMY" target="_blank">
                        <img src={githubIcon} alt="GitHub Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/chinxuan16" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin Icon"/>
                    </a>

                </span>
                <p>Welcome to my portfolio website, nice to meet you!
                    I'm a Year 3 Computational Science student from UNIMAS. 
                    Let's dive into my project!
                </p>
                <a href={Resume} donwload>
                    <button className="hover" download>Resume</button>

                </a>

                    

            </div>
        </section>
    )
}

export default Hero;