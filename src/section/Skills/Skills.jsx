import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.webp';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import c from '../../assets/c++.png';
import c1 from '../../assets/c.png';
import react from '../../assets/React.webp';
import nodejs from '../../assets/nodejs.png';
import git from '../../assets/git.png';
import r from '../../assets/r.png';
import mysql from '../../assets/mysql.png';
import supabase from '../../assets/supabase.png';
import githubDark from '../../assets/github-dark.svg'
import githubLight from '../../assets/github-light.svg';
import {useTheme} from '../../common/ThemeContext';


function Skills(){
    const {theme} = useTheme();
    const github = theme === 'light' ? githubLight : githubDark;
    
    return(
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={javascript} skill="JavaScript"/>
                <SkillList src={python} skill="Python"/>
                <SkillList src={java} skill="Java"/>
                <SkillList src={c} skill="C++"/>
                <SkillList src={r} skill="R"/>
                <SkillList src={c1} skill="C"/>
            </div>
            <br/>
            <br/>
            <div className={styles.skillList}>
                <SkillList src={html} skill="HTML5"/>
                <SkillList src={css} skill="CSS"/>
            </div>
            <br/>
            <br/>
            <div className={styles.skillList}>
                <SkillList src={mysql} skill="MySQL"/>
                <SkillList src={supabase} skill="Supabase"/>
            </div>
            <br/>
            <br/>
            <div className={styles.skillList}>
                <SkillList src={react} skill="React"/>
                <SkillList src={nodejs} skill="Node.js"/> 
            </div>
            <br/>
            <br/>
            <div className={styles.skillList}>
                <SkillList src={git} skill="Git"/>
                <SkillList src={github} skill="GitHub"/>
            </div>
        </section>
    )
}

export default Skills;