import { createElement } from "react";
import {v4} from 'uuid'

function SkillsPreview({ skills }) {
    let skillList = []
    let regList = []
    let newList = null

    skills.map((skill, index) => {
        if (index === 0) {
            newList = createElement('ul', { key: v4()}, regList)
            regList.push(<li key={skill.id}>{skill.skill}</li>)
            skillList.push(newList)
        } else if (index % 4 === 0 && index !== 0) {
            regList = []
            regList.push(<li key={skill.id}>{skill.skill}</li>)
            newList = createElement('ul', { key: v4() }, regList);
            skillList.push(newList)
        } else {
            regList.push(<li key={skill.id}>{skill.skill}</li>)
        }
    })

    return (
        <section>
            <h1>Skills</h1>
            <div>
                {skillList}
            </div>
        </section>
    )
}

export default SkillsPreview