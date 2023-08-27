import '../../styles/general-info.css'

function GerneralInfo({onName, onPosition, onPhoneNumber, onEmail, onLocation, onWebsite}) {

  return (
    <form id="information">
      <h1>Personal Information</h1>

      <fieldset>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id='name' onChange={onName} placeholder="Name" />
        </p>

        <p>
          <label htmlFor="position">Position:</label>
          <input type="text" id='position' onChange={onPosition} placeholder="Position"/>
        </p>
      </fieldset>

      <fieldset>
        <p>
          <label htmlFor="phone">Phone:</label>
          <input type="text" id='phone' placeholder="Phone" onChange={onPhoneNumber} />
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" id='email' placeholder="Email" onChange={onEmail} />
        </p>

        <p>
          <label htmlFor="location">Location:</label>
          <input type="text" id='location' placeholder="Location" onChange={onLocation} />
        </p>

        <p>
          <label htmlFor="website">Website/Linkedin:</label>
          <input type="text" id='website' placeholder="Linkedin" onChange={onWebsite} />
        </p>
      </fieldset>
    </form>
  );
}

export default GerneralInfo;
