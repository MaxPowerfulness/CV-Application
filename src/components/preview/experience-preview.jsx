function ExperiencePreview({ experience }) {
    
    const jobList = experience.map(job => <Job key={job.id} title={job.title} start={job.start} end={job.end} company={job.company} description={job.description} />)
    
    return (
        <section>
            <h1>Experience</h1>
            <ul className="previewContent">
                {jobList}
            </ul>
        </section>
    )
}

function Job({title, start, end, company, description}) {
    return (
        <li className="job">
            <p><span>{title}</span> | <span>{start}</span> to <span>{end}</span></p>
            <p>{company}</p>
            <p>{description}</p>
        </li>
    )
}

export default ExperiencePreview