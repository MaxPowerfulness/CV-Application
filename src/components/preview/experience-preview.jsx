function ExperiencePreview() {
    
    return (
        <section id="section">
            <h1>Experience</h1>
            <Job />
        </section>
    )
}

function Job() {
    return (
        <div className="job">
            <p><input placeholder="Title" id="title"/> | <input type="date" id="startDate"/> to <input type="date" id="endDate"/></p>
            <input placeholder="Company" id="company" /> 
            <ul className="workExperienceList">
                <li><WorkExperience /></li>
                <li><WorkExperience /></li>
                <li><WorkExperience /></li>
            </ul>
        </div>
    )
}

function WorkExperience() {
    return (
        <>
            <input placeholder="Work Experience" />
        </>
    )
}

export default ExperiencePreview