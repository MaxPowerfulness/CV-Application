import "../../styles/skills.css"

function Skill({ onSkill, updateSkill, removeSkill, skills, toggleCollapsibility }) {
    const skillList = skills.map(skill => <SkillsForm key={skill.id} onSubmit={(e) => {updateSkill(e, skill.id)}} removeSkill={(e) => {removeSkill(e, skill.id)}} skill={skill.skill} />)

    return (
        <section>
            <div className="headerCont">
                <h1>Skills</h1>
                <span onClick={toggleCollapsibility} className="downArrow">v</span>
            </div>
            <div className="content">
                <SkillsForm onSubmit={onSkill} removeSkill={null} />
                {skillList}
            </div>
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