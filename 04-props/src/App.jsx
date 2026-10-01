import Footer from "./components/Footer"
import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"


function App() {
  return (
    <>
        <Header title="Team Profiles" />
        <ProfileCard 
        name="Aadit" 
        role="fullstack"
        experience={1} 
        skills={ ["HTML", "CSS", "JS", "DJANGO"] }
        isOpenToWork={true}/>

        <ProfileCard
        name="Veer"
        role="Data Analyst"
        experience={3}
        skills={ ["Python", "SQL", "PowerBI"] } />

        <ProfileCard
        name="Jenissh"
        role="Digital Marketing"
        experience={4}
        skills={ ["Business understanding", "Soft skills"] }
        isOpenToWork={true}
        >
          <p>Note: will join by November</p>
        </ProfileCard>
        
        <Footer />
    </>
  )
}

export default App
