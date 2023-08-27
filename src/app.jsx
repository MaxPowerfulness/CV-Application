import { useState } from 'react';
import GerneralInfo from './components/form/general-info';
import Preview from './components/preview/preview'
import './app.css'

function App() {
    // initialize all state variables here
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [summary, setSummary] = useState('');
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

    return (
        <main>
            <section id='enterInfo'>
                <GerneralInfo onName={onName} onPosition={onPosition} onPhoneNumber={onPhoneNumber} onEmail={onEmail} onLocation={onLocation} onWebsite={onWebsite} />

            </section>
            <section id='preview'>
                <Preview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} summary={summary} />
            </section>
        </main>
        // nav bar to adjust settings/print
    )
}

export default App