import "../../styles/education.css"

function Education({onEducationSubmit, removeEducation, updateEducation, educations}) {
    
    const educationForms = educations.map(education => {
        return(
        <EducationForm
            key={education.id}
            onEducationSubmit={(e) => updateEducation(e, education.id)}
            removeEducation={(e) => removeEducation(e, education.id)}
            degree={education.degree} 
            start={education.start}
            end={education.end}
            school={education.school}
            location={education.location} 
            gpa={education.gpa}
            />)
    })

    return (
        <section id="section">
            <h1>Education</h1>
            <EducationForm onEducationSubmit={onEducationSubmit} />
            {educationForms}
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
