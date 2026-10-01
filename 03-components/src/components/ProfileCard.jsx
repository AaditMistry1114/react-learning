import Skills from "./Skills.jsx"

function ProfileCard(){
    return (
        <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "260px" }}>
            <h3>Aadit</h3>
            <p>Computer Engineer</p>
            <Skills />
        </div>
    )
}

export default ProfileCard