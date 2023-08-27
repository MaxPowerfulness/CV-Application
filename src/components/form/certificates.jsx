import { useState } from "react";
import '../styles/certificates.css'

function Certificates() {
    return (
        <section id="certificates">
            <div className="certificatesHeader">
                <h1>Certificates</h1>
                <button className="addCertificates">+</button>
            </div>
            <ul className="certificateList">
                <Certificate />
            </ul>
        </section>
    )
}

function Certificate() {
    const [certificate, setCertificate] = useState('')

    return (
        <li><input placeholder="Certificate" value={certificate} onChange={(e) => setCertificate(e.target.value)} /></li>
    )
}

export default Certificates