import styles from './HeroStyles.module.css';
import heroImg from '../../assets/cx.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import Resume from '../../assets/ChinXuan_Resume.pdf';
import {useTheme} from '../../common/ThemeContext';


function Hero(){
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return(
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile Picture of Chin Xuan"/>
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
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
                <p className={styles.description}>Welcome to my portfolio website, nice to meet you!
                    I'm a Year 3 Computational Science student from UNIMAS. 
                    Let's dive into my project!
                    Press "Resume" to download my resume!
                </p>
                <a href={Resume} download> 
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;