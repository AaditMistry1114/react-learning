function ProfileCard( {name, role, experience, isOpenToWork} ) {

  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}>

      <h2>
        {name} {experience > 3 && <span>⭐ Senior</span>}
      </h2>
      <p> {role} </p>
      <p> {experience} year(s)</p>
      <p> {isOpenToWork ? " 💚 Available" : " ❤️ Unavailable"} </p>
    </div>
  )
}

export default ProfileCard