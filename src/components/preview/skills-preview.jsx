import { createElement } from "react";
import {v4} from 'uuid'

function SkillsPreview({ skills }) {
    let skillList = []
    let tempList = []
    let newList = null

    skills.map((skill, index) => {
        if (index === 0) {
            newList = createElement('ul', { key: v4()}, tempList)
            tempList.push(<li key={skill.id}>{skill.skill}</li>)
            skillList.push(newList)
        } else if (index % 4 === 0 && index !== 0) {
            tempList = []
            tempList.push(<li key={skill.id}>{skill.skill}</li>)
            newList = createElement('ul', { key: v4() }, tempList);
            skillList.push(newList)
        } else {
            tempList.push(<li key={skill.id}>{skill.skill}</li>)
        }
    })

    return (
        <p>
            <h1>Skills</h1>
            <div className="previewContent skillCert">
                {skillList}
            </div>
        </p>
    )
}

export default SkillsPreview