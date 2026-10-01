function Header( { title } ) {
    return (
        <header style={{ background: "#222", color: "white", padding: "12px" }}>
            <h1> { title } </h1>
        </header>
    )
}

export default Header