import { useState } from 'react';
import '../styles/general-info.css'

function GerneralInfo() {
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');

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
                <img src="" alt="phone" /> <input type="text" name="phone" placeholder="Phone" />
              </li>
              <li>
                <img src="" alt="email" /> <input type="text" name="email" placeholder="Email" />
              </li>
            </ul>
            <ul className='personalInfo'>
              <li>
                <img src="" alt="location" /> <input type="text" name="location" placeholder="Location" />
              </li>
              <li>
                <img src="" alt="website" /> <input type="text" name="website" placeholder="Linkedin" />
              </li>
            </ul>
        </div>
      </div>
      <img src="" alt="profilePicture" className="profilePic" />
    </section>
  );
}

export default GerneralInfo;
