import "../../styles/education.css"

function Education({onEducationSubmit, removeEducation, updateEducation, educations, toggleCollapsibility}) {
    
    const educationForms = educations.map(education => {
        return(
        <div key={education.id}>
            <div className="titleCont">
                <p>{education.degree}</p>
                <p onClick={toggleCollapsibility} className="downArrow">v</p>
            </div>
            <div style={{ display: 'none' }}>
                <EducationForm
                    onEducationSubmit={(e) => updateEducation(e, education.id)}
                    removeEducation={(e) => removeEducation(e, education.id)}
                    degree={education.degree}
                    start={education.start}
                    end={education.end}
                    school={education.school}
                    location={education.location}
                    gpa={education.gpa}
                />
            </div>
        </div>)
    })

    return (
        <section id="section">
            <div className="headerCont">
                <h1>Education</h1>
                <span onClick={toggleCollapsibility} className="downArrow">v</span>
            </div>
            <div className="content">
                <EducationForm onEducationSubmit={onEducationSubmit} />
                {educationForms}
            </div>
        </section>
    )
}

function EducationForm({onEducationSubmit, removeEducation, degree, start, end, school, location, gpa}) {

    return (
        <form onSubmit={onEducationSubmit}>
            <p>
                <label htmlFor="degree">Degree:</label>
                <input id="degree" type="text" defaultValue={degree} />
            </p>
            <p>
                <label htmlFor="start">Start:</label>
                <input type="date" id="start" defaultValue={start} />
                <label htmlFor="end">End:</label>
                <input type="date" id="end" defaultValue={end} />
                
            </p>
            <p>
                <label htmlFor="school">School:</label>
                <input id="school" defaultValue={school} />
            </p>
            <p>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" defaultValue={location} />
            </p>
            <p>
                <label htmlFor="gpa">GPA:</label>
                <input type="text" id="gpa" defaultValue={gpa} />
            </p>
            <div className="btnCont">
                <button>Save</button>
                <button type="button" onClick={removeEducation}>Remove</button>
            </div>
        </form>
    )
}

export default Education
