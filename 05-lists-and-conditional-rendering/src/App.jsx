import ProfileCard from "./components/ProfileCard";
import people from "./data/people";

function App() {

  const available = people.filter( people => people.isOpenToWork )

  return (
    
      <>
      {/* It is to display all people */}
        <h1>All people: {people.length} </h1>
        {people.map( people => <ProfileCard key={people.id} {...people} /> )}

      {/* This is to display only available people */}
        <h1>Available people: ({ available.length }) </h1>
        { available.length > 0 ? 
          available.map( people => <ProfileCard key={people.id} {...people} /> ) : 

          <h1>No people available.</h1>
      }
      </>
  );
}

export default App