import phoneIcon from '../../assets/telephone.png'
import emailIcon from '../../assets/mail.png'
import locationIcon from '../../assets/location.png'
import websiteIcon from '../../assets/world-wide-web.png'


function GerneralInfoPreview({ fullName, position, phoneNum, email, location, website }) {
    return (
        <section id="personalInfo">
            <div className='infoCont'>
                <p className='name'>{fullName}</p>
                <p className='position'>{position}</p>
            </div>
            <div className='personalInfoCont'>
                    <ul className='infoList'>
                        <li>
                            <img src={phoneIcon} alt="phone" /> <span>{phoneNum}</span>
                        </li>
                        <li>
                            <img src={emailIcon} alt="email" /> <span>{email}</span>
                        </li>
                        <li>
                            <img src={locationIcon} alt="location" /> <span>{location}</span>
                        </li>
                        <li>
                            <img src={websiteIcon} alt="website" /> <span>{website}</span>
                        </li>
                    </ul>
                </div>
         </section>
    )
}

export default GerneralInfoPreview