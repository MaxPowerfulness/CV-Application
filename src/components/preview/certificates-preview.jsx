function CertificatePreview({ certificates }) {
    const certList = certificates.map(cert => <li key={cert.id}>{cert.cert}</li>)
   
    return (
        <section>
            <h1>Certificates</h1>
            <ul className="certificateList">
                {certList}
            </ul>
        </section>
    )
}

export default CertificatePreview