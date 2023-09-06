function SkillsPreview({skills}) {
    const skillsList = skills.map(skill => <li key={skill.id}>{skill.skill}</li>)

    return (
        <section>
            <h1>Skills</h1>
            <ul className="skillList">
                {skillsList}
            </ul>
        </section>
    )
}

export default SkillsPreview