import { useState } from 'react';
import {v4} from 'uuid'
import GerneralInfo from './form/general-info'; 
import Summary from './form/summary'
import Experience from './form/experience';
import Education from './form/education';
import Skill from './form/skills';
import Certificate from './form/certificates';
import Preview from './preview/preview'
import '../styles/app.css'


function App() {
    // State variables
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [summary, setSummary] = useState('');
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([])
    
    // Personal info and Summary
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

    // Skills
    function onSkill(e) {
        e.preventDefault();
        let skill = {};
        skill.id = v4();
        skill.skill = e.target[0].value;
        setSkills([...skills, skill]);
        e.target[0].value = '';
    }

    function updateSkill(e, id) {
        e.preventDefault();
        let updatedSkill = {}
        updatedSkill.skill = e.target[0].value;

        setSkills(skills.map(skill => {
            if (skill.id === id) return { ...skill, ...updatedSkill }
            else return skill
        }))
    }

    function removeSkill(e, id) {
        e.preventDefault();
        setSkills(
            skills.filter(skill => skill.id !== id)
        )
    }

    // Certificates
    function onCertificate(e) {
        e.preventDefault();
        let cert = {}
        cert.id = v4();
        cert.cert = e.target[0].value;
        setCertificates([...certificates, cert])
        e.target[0].value = ''
    }

    function updateCertificate(e, id) {
        e.preventDefault();
        let updatedCert = {}
        updatedCert.cert = e.target[0].value;

        setCertificates(certificates.map(cert => {
            if (cert.id === id) return { ...cert, ...updatedCert }
            else return cert
        }))
    }

    function removeCertificate(e, id) {
        e.preventDefault();
        setCertificates(
            certificates.filter(cert => cert.id !== id)
        )
    }

    // Functional functions
    function toggleCollapsibility(e) {
        const content = e.target.parentNode.nextElementSibling
        content.classList.toggle('show');
    }

    return (
        <main>
            <section id='enterInfo'>    
                <GerneralInfo onName={onName} onPosition={onPosition} onPhoneNumber={onPhoneNumber} onEmail={onEmail} onLocation={onLocation} onWebsite={onWebsite} toggleCollapsibility={toggleCollapsibility} />
                <Summary onSummary={onSummary} toggleCollapsibility={toggleCollapsibility} /> 
                <Experience onExperienceSubmit={onExperienceSubmit} removeExperience={removeExperience} updateExperience={updateExperience} experiences={experience} toggleCollapsibility={toggleCollapsibility} />
                <Education onEducationSubmit={onEducationSubmit} removeEducation={removeEducation} updateEducation={updateEducation} educations={education} toggleCollapsibility={toggleCollapsibility} />
                <Skill onSkill={onSkill} updateSkill={updateSkill} removeSkill={removeSkill} skills={skills} toggleCollapsibility={toggleCollapsibility} />
                <Certificate onCertificate={onCertificate} updateCertificate={updateCertificate} removeCertificate={removeCertificate} certificates={certificates} toggleCollapsibility={toggleCollapsibility} />
            </section>
            <section id='preview'>
                <Preview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} summary={summary} experience={experience} education={education} skills={skills} certificates={certificates} />
            </section>
        </main>
        // nav bar to adjust settings/print
    )
}

export default App