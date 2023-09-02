import GerneralInfoPreview from './general-info-preview'
import SummaryPreview from './summary-preview'
import ExperiencePreview from './experience-preview'
import EducationPreview from './education-preview'
import '../../styles/preview.css'

function Preview({fullName, position, phoneNum, email, location, website, summary, experience, education}) {
    return (
        <div>
            <GerneralInfoPreview fullName={fullName} position={position} phoneNum={phoneNum} email={email} location={location} website={website} />
            <SummaryPreview summary={summary} />
            <ExperiencePreview experience={experience} />
            <EducationPreview education={education} />
        </div>

    )
}

export default Preview