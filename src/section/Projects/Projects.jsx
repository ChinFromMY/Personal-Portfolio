import React from 'react';
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
                link="https://github.com/ChinFromMY/Flood-Prediction-Machine-Learning-Model.git"
                h3="Bangladesh Flood Predictor"
                p="Flood Prediction Machine Learning Model"
                />
                <ProjectCard src={ChatBot} 
                //remember to add the link   
                link="https://github.com/ChinFromMY/Flood-Prediction-Machine-Learning-Model.git"
                h3="AI ChatBot"
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