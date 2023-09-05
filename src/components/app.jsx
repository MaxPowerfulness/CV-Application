import { useState } from 'react';
import {v4} from 'uuid'
import GerneralInfo from './form/general-info'; 
import Summary from './form/summary'
import Experience from './form/experience';
import Education from './form/education';
import Preview from './preview/preview'
import '../styles/app.css'


function App() {
    // initialize all state variables here
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [summary, setSummary] = useState('');
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    // define setState functions here
    function onName(e) {
        setFullName(e.target.value)
    }

    function onPosition(e) {
        setPosition(e.target.value)
    }

    function onPhoneNumber(e) {
        setPhoneNum(e.target.value)
    }

    function onEmail(e) {
        setEmail(e.target.value)
    }

    function onLocation(e) {
        setLocation(e.target.value)
    }

    function onWebsite(e) {
        setWebsite(e.target.value)
    }

    function onSummary(e) {
        setSummary(e.target.value)
    }

    // Experience
    function onExperienceSubmit(e) {
        e.preventDefault();
        let experienceData = {};
        experienceData.id = v4();
        experienceData.title = e.target[0].value;
        experienceData.company = e.target[1].value;
        experienceData.start = e.target[2].value;
        experienceData.end = e.target[3].value;
        experienceData.description = e.target[4].value;
        setExperience([...experience, experienceData]);
        clearExperienceForm(e)
    }

    function removeExperience(e, id) {
        e.preventDefault();
        setExperience(
            experience.filter(job => job.id !== id)
        )
    }

    function updateExperience(e, id) {
        e.preventDefault();
        let updatedExperience = {}
        updatedExperience.title = e.target[0].value;
        updatedExperience.company = e.target[1].value;
        updatedExperience.start = e.target[2].value;
        updatedExperience.end = e.target[3].value;
        updatedExperience.description = e.target[4].value;
        setExperience(
            experience.map(job => {
                if (job.id === id) return {...job, ...updatedExperience}
                else return job
            })
        )
    }

    function clearExperienceForm(e) {
        for (let i = 0; i < 5; i++) e.target[i].value = ''
    }

    // Education
    function onEducationSubmit(e) {
        e.preventDefault();
        let educationData = {}
        educationData.id = v4();
        educationData.degree = e.target[0].value;
        educationData.start = e.target[1].value;
        educationData.end = e.target[2].value;
        educationData.school = e.target[3].value;
        educationData.location = e.target[4].value;
        educationData.gpa = e.target[5].value;
        setEducation([...education, educationData])
        clearEducationForm(e)
    }

    function removeEducation(e, id) {
        e.preventDefault();
        setEducation(
            education.filter(school => school.id !== id)
        )
    }

    function updateEducation(e, id) {
        e.preventDefault();
        let updatedEducation = {}
        updatedEducation.degree = e.target[0].value;
        updatedEducation.start = e.target[1].value;
        updatedEducation.end = e.target[2].value;
        updatedEducation.school = e.target[3].value;
        updatedEducation.location = e.target[4].value;
        updatedEducation.gpa = e.target[5].value;

        setEducation(
            education.map(study => {
                if (study.id === id) return { ...study, ...updatedEducation }
                else return study
            })
        )
    }

    function clearEducationForm(e) {
        for (let i = 0; i < 6; i++) e.target[i].value = ''
    }

    return (
        <main>
            <section id='enterInfo'>    
                <GerneralInfo onName={onName} onPosition={onPosition} onPhoneNumber={onPhoneNumber} onEmail={onEmail} onLocation={onLocation} onWebsite={onWebsite} />
                <Summary onSummary={onSummary} /> 
                <Experience onExperienceSubmit={onExperienceSubmit} removeExperience={removeExperience} updateExperience={updateExperience} experiences={experience} />
                <Education onEducationSubmit={onEducationSubmit} removeEducation={removeEducation} updateEducation={updateEducation} educations={education} />
            </section>
            <section id='preview'>
                <Preview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} summary={summary} experience={experience} education={education} />
            </section>
        </main>
        // nav bar to adjust settings/print
    )
}

export default App