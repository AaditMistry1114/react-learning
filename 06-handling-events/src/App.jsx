import ContactForm from "./components/ContactForm"
import ProfileCard from "./components/ProfileCard"

function App() {
  function handleHire(name) {
    console.log("Hiring request sent for", name)
  }

  return (
    <>
    <h1>Handling Events</h1>
    <ProfileCard  name="Aadit" role="Computer Engineering" onHire={handleHire} />
    <ProfileCard name="Riya" role="UI Designer" onHire={handleHire}/>
    <ContactForm />
    </>
  )
}

export default App