import Skills from "./Skills.jsx"

// props are desctuctured here inside {} , example =  { name }
function ProfileCard( { name,  role, experience, skills, isOpenToWork=false, children } ){
    return (
        <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "260px" }}>
            <h3> { name } </h3>
            <p> { role } </p>
            <p>Experience: {experience}  year(s)</p>
            <p>Skills: { skills.join(", ") } </p>
            <p> { isOpenToWork ? "open to work" : "not open to work"  } </p>

            { children }
        </div>
    )
}

export default ProfileCard