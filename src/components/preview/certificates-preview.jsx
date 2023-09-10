import { createElement } from "react";
import {v4} from 'uuid'

function CertificatePreview({ certificates }) {
    let certList = []
    let tempList = []
    let newList = null

    certificates.map((cert, index) => {
        if (index === 0) {
            newList = createElement('ul', { key: v4()}, tempList)
            tempList.push(<li key={cert.id}>{cert.cert}</li>)
            certList.push(newList)
        } else if (index % 4 === 0 && index !== 0) {
            tempList = []
            tempList.push(<li key={cert.id}>{cert.cert}</li>)
            newList = createElement('ul', { key: v4() }, tempList);
            certList.push(newList)
        } else {
            tempList.push(<li key={cert.id}>{cert.cert}</li>)
        }
    })
   
    return (
        <p>
            <h1>Certificates</h1>
            <div className="previewContent skillCert">
                {certList}
            </div>
        </p>
    )
}

export default CertificatePreview