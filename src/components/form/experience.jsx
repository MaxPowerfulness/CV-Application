import '../../styles/experience.css'

function Experience({ onSubmit }) {
    return (
        <form action="" onSubmit={onSubmit}>
            <h1>Experience</h1>
            <p className="formInput">
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" />
            </p>
            <p className="formInput">
                <label htmlFor="company">Company: </label>
                <input type="text" id="company" />
            </p>
            <p className="formInput">
                <label htmlFor="start">Start: </label>
                <input type="date" id="start" />
                <label htmlFor="end">End: </label>
                <input type="date" id="end" />
            </p>
            <p className="formInput">
                <label htmlFor="duties">Description: </label>
                <textarea type="text" id="description"></textarea>
            </p>
            <div className="btnCont">
                <button>Add</button>
                <button type="button">Remove</button>
            </div>
        </form>
    )
}

export default Experience