function ProfileCard( { name, role, onHire } ){
    function handleCardClick(){
        console.log("Card clicked:", name);
    }

    function handleGreet(){
        alert("Hello, " + name + "!" )
    }

    function handleHireClick(event){
        event.stopPropagation() // don't trigger cards onClick

        onHire(name); // call the function from the parent
    }
    return (
        <div 
        onClick={handleCardClick}
        onMouseEnter={() => console.log("Hovering over", name)} 
        style={{ border: "1px solid gray", padding: "12px", margin: "12px", width: "280px" }}

        >
            <h2> {name} </h2>
            <p> {role} </p>
            <button onClick={handleGreet}>Say hello</button>
            <button onClick={handleHireClick}>Hire</button>
        </div>
    )
}

export default ProfileCard