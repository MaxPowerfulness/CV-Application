import { useState } from "react";
import '../styles/experience.css'

function Experience() {
    
    return (
        <section id="section">
            <div className="jobHeader">
                <h1>Experience</h1>
                <button className="addJob">+</button>
            </div>
            <Job />
        </section>
    )
}

function Job() {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    return (
        <div className="job">
            <p><input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> | <input type="date" name="startDate"/> to <input type="date" name="endDate"/></p>
            <input placeholder="Company" name="company" value={company} onChange={(e) => setCompany(e.target.value)} /> 
            <ul className="workExperienceList">
                <li><WorkExperience /></li>
                <li><WorkExperience /></li>
                <li><WorkExperience /></li>
                <li><button>+</button></li>
            </ul>
        </div>
    )
}

function WorkExperience() {
    const [experience, setExperience] = useState('')

    return (
        <>
            <input placeholder="Work Experience" value={experience} onChange={(e) => setExperience(e.target.value)}  />
        </>
    )
}

export default Experience