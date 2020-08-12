import React from "react";

function Header() {
    return (
        <div className="App">
            Employee Directory
            <header className="App-header">
                <input className="search-bar" type="text" placeholder="Search Employee" />
                <div className="Btn"><button className="searchBtn" type="submit">Search</button></div>
            </header>
        </div>
    )
}

export default Header;