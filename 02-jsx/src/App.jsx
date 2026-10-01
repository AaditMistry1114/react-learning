function App() {

    const name = "Aadit";
    const role = "Computer Engineering Student";
    const skills = [ "HTML", "CSS", "JS", "Python" ];
    const isLearningReact = true;
    const imgSrc = 'space.jpg';
    
    const cardStyle = {
        border : "2px solid black",
        borderRadius : "8px",
        padding : "14px",
        width : "300px",
        textAlign : "center"
    };

    return (

        <>
            <div style={cardStyle} >
                <h1> {name} </h1>
                <p> {role} </p>
                <p>Skills: {skills[0]}, {skills[1]}, {skills[2]}, {skills[3]},  </p>
                <p> { isLearningReact ? "Learning React  🚀" : "Not Learning"} </p>
                <p> {role} </p>
                {/* <img src={imgSrc} alt="space"  width={100} /> */}
            </div>
        </>
    );
}

export default App;