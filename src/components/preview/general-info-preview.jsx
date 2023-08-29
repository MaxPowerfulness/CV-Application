import phoneIcon from '../../assets/telephone.png'
import emailIcon from '../../assets/mail.png'
import locationIcon from '../../assets/location.png'
import websiteIcon from '../../assets/world-wide-web.png'
import pfp from '../../assets/Default_pfp.svg.png'


function GerneralInfoPreview({ fullName, position, phoneNum, email, location, website }) {
    return (
        <form id="personalInfo">
            <div className='infoCont'>
                <input type="text" name='name' value={fullName} placeholder="Name" />
                <input type="text" name='position' value={position} placeholder="Position" />
                <div className='personalInfoCont'>
                    <ul className='infoList'>
                        <li>
                            <img src={phoneIcon} alt="phone" /> <input type="text" value={phoneNum} placeholder="Phone" />
                        </li>
                        <li>
                            <img src={emailIcon} alt="email" /> <input type="text" value={email} placeholder="Email" />
                        </li>
                    </ul>
                    <ul className='infoList'>
                        <li>
                            <img src={locationIcon} alt="location" /> <input type="text" value={location} placeholder="Location" />
                        </li>
                        <li>
                            <img src={websiteIcon} alt="website" /> <input type="text" value={website} placeholder="Website" />
                        </li>
                    </ul>
                </div>
            </div>
            <img src={pfp} alt="profilePicture" className="profilePic" />
         </form>
    )
}

export default GerneralInfoPreview