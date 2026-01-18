import styles from './ProjectsStyles.module.css'
import ML from '../../assets/logo1.png'
import ChatBot from '../../assets/logo2.png'
import DeepFake from '../../assets/logo3.png'



import ProjectCard from '../../common/ProjectCard';

function Projects(){
    return(
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={ML} 
                link="https://github.com/ChinFromMY/flood-prediction-ml-system.git"
                demo="https://flood-frontend-app.onrender.com"
                h3="Flood Prediction Machine Learning System"
                p="ML-powered flood risk prediction web app"
                />
                <ProjectCard src={ChatBot} 
                link="https://github.com/ChinFromMY/React-AI-Chatbot.git"
                h3="React AI ChatBot"
                p="AI ChatBot powered by Hugging Face"
                />
                <ProjectCard src={DeepFake} 
                link="https://github.com/ChinFromMY/Interactive-Learning-Quiz-Application.git"
                h3="DeepFake Learning Quiz Applidation"
                p="Interactive Learning Quiz Application"
                />
            </div>

        </section>
    )

}

export default Projects;