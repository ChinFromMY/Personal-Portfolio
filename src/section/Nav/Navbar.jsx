import styles from './NavbarStyles.module.css';
import {useTheme} from '../../common/ThemeContext';

function Navbar(){
    const {theme} = useTheme();

    return(        
            <nav id="navbar" className={styles.container} data-theme={theme}>
                <a className={styles.title} href="/">
                    Portfolio
                </a>

                <div className={styles.menu}>
                    <ul className={styles.menuItems} >
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

    )
}

export default Navbar;