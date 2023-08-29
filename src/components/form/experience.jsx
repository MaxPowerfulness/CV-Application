function Experience({onSubmit}) {
    return (
        <form action="">
            <h1>Experience</h1>
            <p>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" />
            </p>
            <p>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" />
            </p>
            <p>
                <label htmlFor="start">Start:</label>
                <input type="date" id="start" />
                <label htmlFor="end">End:</label>
                <input type="date" id="end" />
            </p>
            <p>
                <label htmlFor="duties">Duties</label>
                <input type="text" id="duties" />
            </p>
            <div className="btnCont">
                <button onSubmit={onSubmit}>Add</button>
                <button type="button">Remove</button>
            </div>
        </form>
    )
}

export default Experience