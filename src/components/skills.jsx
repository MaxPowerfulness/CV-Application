import { useState } from "react";
import '../styles/skills.css'

function Skills() {
    return (
        <section id="skills">
            <div className="skillsHeader">
                <h1>Skills</h1>
                <button className="addSkills">+</button>
            </div>
            <ul className="skillList">
                <Skill />
            </ul>
        </section>
    )
}

function Skill() {
    const [skill, setSkill] = useState('')

    return (
        <li><input placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} /></li>
    )
}

export default Skills