import { useState } from 'react'

function ProfileCard({ name, role, experience, onShortlist }) {
  const [showDetails, setShowDetails] = useState(false)
  const [likes, setLikes] = useState(0)

  return (
    <div style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}>
      <h2>{name}</h2>
      <p>{role}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide details" : "Show details"}
      </button>
      {showDetails && <p>Experience: {experience} year(s)</p>}

      <div>
        <button onClick={() => setLikes((prev) => prev + 1)}>👍 {likes}</button>
        <button onClick={() => onShortlist(name)}>Shortlist</button>
      </div>
    </div>
  )
}

export default ProfileCard
