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
    const [experience, setExperience] = useState(null)
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

    function onExperience(e) {
        e.preventDefault();
        console.log(e.target)
        const experience = {};
        experience.id = v4();
        experience.title = e.target[0].value
    }

    return (
        <main>
            <section id='enterInfo'>
                <GerneralInfo onName={onName} onPosition={onPosition} onPhoneNumber={onPhoneNumber} onEmail={onEmail} onLocation={onLocation} onWebsite={onWebsite} />
                <Summary onSummary={onSummary} /> 
                <Experience onSubmit={onExperience} />
            </section>
            <section id='preview'>
                <Preview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} summary={summary} />
            </section>
        </main>
        // nav bar to adjust settings/print
    )
}

export default App