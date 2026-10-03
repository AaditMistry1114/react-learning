function ContactForm() {
    function handleChange(event){
        console.log("Typing:", event.target.value);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        alert("Form submitted!");
    }
    return (
        <form onSubmit={handleSubmit} style={{ margin: "12px" }}>

            <input type="text" placeholder="Your name" onChange={handleChange} />
            <button type="submit" >Send</button>
        </form>
    )
}

export default ContactForm
