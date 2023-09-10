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
        <section id="nonHeader">
            <h1>Education</h1>
            <ul className="previewContent">
                {educationList}
            </ul>
        </section>
    )
}

function Institution({degree, start, end, school, location, GPA}) {
    return (
        <li className="school">
            <p>{degree} | {start} to {end}</p>
            <p>{school}</p>
            <span>{location}</span> <span>{GPA}</span>
        </li>
    )
}

export default EducationPreview