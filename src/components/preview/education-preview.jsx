function EducationPreview({ education }) {

    const educationList = education.map(school => {
        return(
        <Institution
            key={school.id}
            degree={school.degree}
            start={school.start}
            end={school.end}
            school={school.school}
            location={school.location}
            GPA={school.gpa}
        />)
    })

    return (
        <section id="section">
            <h1>Education</h1>
            <ul>
                {educationList}
            </ul>
        </section>
    )
}

function Institution({degree, start, end, school, location, GPA}) {
    return (
        <div>
            <p>{degree} | {start} to {end}</p>
            <p>{school}</p>
            <span>{location}</span> <span>{GPA}</span>
        </div>
    )
}

export default EducationPreview