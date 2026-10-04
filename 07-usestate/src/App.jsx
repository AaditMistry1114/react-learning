import { useState } from 'react'
import Counter from './components/Counter'
import Settings from './components/Settings'
import ProfileCard from './components/ProfileCard'

const people = [
  { id: 1, name: "Aadit", role: "Computer Engineering Student", experience: 1 },
  { id: 2, name: "Riya", role: "UI Designer", experience: 3 },
  { id: 3, name: "Karan", role: "Backend Developer", experience: 2 },
]

function App() {
  const [shortlist, setShortlist] = useState([])

  function handleShortlist(name) {
    if (shortlist.includes(name)) return          // no duplicates
    setShortlist([...shortlist, name])             // add: new array
  }

  function handleRemove(name) {
    setShortlist(shortlist.filter((n) => n !== name))   // remove: filter
  }

  return (
    <>
      <h1>State Practice</h1>

      <Counter />
      <Counter />
      <Settings />

      {people.map((person) => (
        <ProfileCard key={person.id} {...person} onShortlist={handleShortlist} />
      ))}

      <h2>Shortlist ({shortlist.length})</h2>
      {shortlist.length === 0 ? (
        <p>No one shortlisted yet.</p>
      ) : (
        <ul>
          {shortlist.map((name) => (
            <li key={name}>
              {name} <button onClick={() => handleRemove(name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setShortlist([])}>Clear all</button>
    </>
  )
}

export default App
