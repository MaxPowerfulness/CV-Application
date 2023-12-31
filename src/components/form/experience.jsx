import '../../styles/experience.css'

function Experience({ onExperienceSubmit, removeExperience, updateExperience, experiences, toggleCollapsibility }) {
    
    const experienceForms = experiences.map(experience => {
        return(
        <div key={experience.id} className="collapsedItem">
            <div className="titleCont">
                <p>{experience.title}</p>
                <p onClick={toggleCollapsibility} className="downArrow">v</p>
            </div>
            <div className='content'>
                <ExperienceForm
                    onExperienceSubmit={(e) => updateExperience(e, experience.id)}
                    removeExperience={(e) => removeExperience(e, experience.id)}
                    title={experience.title}
                    company={experience.company}
                    start={experience.start}
                    end={experience.end}
                    description={experience.description} 
                />
            </div>
        </div>)
    })

    return (
        <section>
            <div className="headerCont">
                <h1>Experience</h1>
                <span onClick={toggleCollapsibility} className="downArrow">v</span>
            </div>
            <div className="content">
                <ExperienceForm onExperienceSubmit={onExperienceSubmit} />
                {experienceForms}
            </div>
        </section>
    )
}

function ExperienceForm({ onExperienceSubmit, removeExperience, title, company, start, end, description }) {
    return (
        <form action="" onSubmit={onExperienceSubmit}>
            <p className="formInput">
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" defaultValue={title} />
            </p>
            <p className="formInput">
                <label htmlFor="company">Company: </label>
                <input type="text" id="company" defaultValue={company} />
            </p>
            <p className="formInput">
                <label htmlFor="start">Start: </label>
                <input type="date" id="start" defaultValue={start} />
                <label htmlFor="end">End: </label>
                <input type="text" id="end" defaultValue={end} />
            </p>
            <p className="formInput">
                <label htmlFor="duties">Description: </label>
                <textarea type="text" id="description" defaultValue={description}></textarea>
            </p>
            <div className="btnCont">
                <button>Save</button>
                <button type="button" className='removeExperience' onClick={removeExperience}>Remove</button>
            </div>
        </form>
    )
}

export default Experience