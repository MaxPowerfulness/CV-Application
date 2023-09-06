import "../../styles/skills.css"

function Skill({ onSkill, updateSkill, removeSkill, skills }) {
    const skillList = skills.map(skill => <SkillsForm key={skill.id} onSubmit={(e) => {updateSkill(e, skill.id)}} removeSkill={(e) => {removeSkill(e, skill.id)}} skill={skill.skill} />)

    return (
        <section>
            <h1>Skills</h1>
            <SkillsForm onSubmit={onSkill} removeSkill={null} />
            {skillList}
        </section>
    )
}

function SkillsForm( {onSubmit, removeSkill, skill}) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Skill" defaultValue={skill} />
            <span><button>Save</button> <button type="button" onClick={removeSkill}>Remove</button></span>
        </form>
    )
}

export default Skill