import '../../styles/certificates.css'

function Certificate({ onCertificate, updateCertificate, removeCertificate, certificates }) {
    const certList = certificates.map(cert => <CertificateForm key={cert.id} onSubmit={(e) => {updateCertificate(e, cert.id)}} removeCertificate={(e) => {removeCertificate(e, cert.id)}} certificates={cert.cert} />)

    return (
        <section>
            <h1>Certificates</h1>
            <CertificateForm onSubmit={onCertificate} />
            {certList}
        </section>
    )
}

function CertificateForm( {onSubmit, removeCertificate, certificates} ) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Certificate" defaultValue={certificates} />
            <span><button>Save</button> <button type="button" onClick={removeCertificate}>Remove</button></span>
        </form>
    )
}

export default Certificate