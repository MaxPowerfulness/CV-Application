import phoneIcon from '../../assets/telephone.png'
import emailIcon from '../../assets/mail.png'
import locationIcon from '../../assets/location.png'
import websiteIcon from '../../assets/world-wide-web.png'
import pfp from '../../assets/Default_pfp.svg.png'


function GerneralInfoPreview({ fullName, position, phoneNum, email, location, website }) {
    return (
        <section id="personalInfo">
            <div className='infoCont'>
                <p>{fullName}</p>
                <p>{position}</p>
                <div className='personalInfoCont'>
                    <ul className='infoList'>
                        <li>
                            <img src={phoneIcon} alt="phone" /> <p>{phoneNum}</p>
                        </li>
                        <li>
                            <img src={emailIcon} alt="email" /> <p>{email}</p>
                        </li>
                    </ul>
                    <ul className='infoList'>
                        <li>
                            <img src={locationIcon} alt="location" /> <p>{location}</p>
                        </li>
                        <li>
                            <img src={websiteIcon} alt="website" /> <p>{website}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <img src={pfp} alt="profilePicture" className="profilePic" />
         </section>
    )
}

export default GerneralInfoPreview