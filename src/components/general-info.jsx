import { useState } from 'react';
import '../styles/general-info.css'

function GerneralInfo() {
  // State Variables
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  return (
    <section id="information">
      <div className='infoCont'>
        <input
          type="text"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
                  value={fullName}
                  placeholder="Name"
        />
        <input
          type=""
          onChange={(e) => {
            setPosition(e.target.value);
          }}
                  value={position}
                  placeholder="Position"
        />
        <div className='personalInfoCont'>
            <ul className='personalInfo'>
              <li>
              <img src="" alt="phone" /> <input type="text" name="phone" placeholder="Phone" value={phoneNum} onChange={(e) => {
            setPhoneNum(e.target.value);
          }} />
              </li>
              <li>
                <img src="" alt="email" /> <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => {
            setEmail(e.target.value);
          }} />
              </li>
            </ul>
            <ul className='personalInfo'>
              <li>
                <img src="" alt="location" /> <input type="text" name="location" placeholder="Location" value={location} onChange={(e) => {
            setLocation(e.target.value);
          }}/>
              </li>
              <li>
                <img src="" alt="website" /> <input type="text" name="website" placeholder="Linkedin" value={website} onChange={(e) => {
            setWebsite(e.target.value);
          }}/>
              </li>
            </ul>
        </div>
      </div>
      <img src="" alt="profilePicture" className="profilePic" />
    </section>
  );
}

export default GerneralInfo;
