import styles from './SkillsStyles.module.css';
// import SkillList from '../../common/SkillList';

function Skills(){
    return(
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                {/* <SkillList src={} skill="HTML"/> */}
                {/* <SkillList src={} skill="CSS"/> */}
                {/* <SkillList src={} skill="JavaScript"/> */}
                {/* <SkillList src={} skill="Node.js"/> */}
            </div>
            <hr/>
            <div className={styles.skillList}>
                {/* <SkillList src={} skill="React"/>
                <SkillList src={} skill="Node.js"/> */}
            </div>
            <div className={styles.skillList}>
                {/* <SkillList src={} skill="React"/>
                <SkillList src={} skill="Git"/> */}
            </div>
        </section>
    )
}

export default Skills;