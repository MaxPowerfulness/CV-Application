import { useState } from "react";
import "../styles/education.css"

function Education() {
    return (
        <section id="section">
            <div className="educationHeader">
                <h1>Education</h1>
                <button className="addEducation">+</button>
            </div>
            <Institution />
        </section>
    )
}

function Institution() {


    return (
        <div className="institution">
            <p><input placeholder="Degree" /> | <input type="date" name="starDate" /> to <input type="date" name="endDate" /></p>
            <p><input placeholder="School" /></p>
            <input placeholder="Location" /> <input placeholder="GPA" />
        </div>
    )
}

export default Education
