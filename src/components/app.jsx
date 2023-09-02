import { useState } from 'react';
import {v4} from 'uuid'
import GerneralInfo from './form/general-info'; 
import Summary from './form/summary'
import Experience from './form/experience';
import Preview from './preview/preview'
import '../styles/app.css'


function App() {
    // initialize all state variables here
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [summary, setSummary] = useState('');
    const [experience, setExperience] = useState([])
    // define setState functions here
    function onName(e) {
        setFullName(e.target.value)
    }

    function onPosition(e) {
        setPosition(e.target.value)
    }

    function onPhoneNumber(e) {
        setPhoneNum(e.target.value)
    }

    function onEmail(e) {
        setEmail(e.target.value)
    }

    function onLocation(e) {
        setLocation(e.target.value)
    }

    function onWebsite(e) {
        setWebsite(e.target.value)
    }

    function onSummary(e) {
        setSummary(e.target.value)
    }

    function onExperienceSubmit(e) {
        e.preventDefault();
        const experienceData = {};
        experienceData.id = v4();
        experienceData.title = e.target[0].value;
        experienceData.company = e.target[1].value;
        experienceData.start = e.target[2].value;
        experienceData.end = e.target[3].value;
        experienceData.description = e.target[4].value;
        setExperience([...experience, experienceData]);
        clearForm(e)
    }

    function updateForm(e, id) {
        e.preventDefault();
        setExperience(
            experience.map(job => {
                if (job.id === id) {
                    const updatedExperience = {}
                    updatedExperience.id = id;
                    updatedExperience.title = e.target[0].value;
                    updatedExperience.company = e.target[1].value;
                    updatedExperience.start = e.target[2].value;
                    updatedExperience.end = e.target[3].value;
                    updatedExperience.description = e.target[4].value;
                    return updatedExperience
                }
            })
        )
        console.log('experience', experience)
    }

    function clearForm(e) {
        for (let i = 0; i < 5; i++) e.target[i].value = ''
    }


    return (
        <main>
            <section id='enterInfo'>    
                <GerneralInfo onName={onName} onPosition={onPosition} onPhoneNumber={onPhoneNumber} onEmail={onEmail} onLocation={onLocation} onWebsite={onWebsite} />
                <Summary onSummary={onSummary} /> 
                <Experience onExperienceSubmit={onExperienceSubmit} updateForm={updateForm} experiences={experience} />
            </section>
            <section id='preview'>
                <Preview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} summary={summary} experience={experience} />
            </section>
        </main>
        // nav bar to adjust settings/print
    )
}

export default App