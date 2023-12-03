import React from 'react';

function Header() {
    const client = "Designer";
    const title = {
        designer: "Design",
        programmer: "Programming"
    };
    const info = {
        name: "Abdalrhman",
        nick: "ALQRONI"
    };

    return (
        <div className="navbar bg-dark rounded text-white">
            <h2>Hello {info.name} {info.nick}</h2>
            <h2>{client === "Designer" ? title.designer : title.programmer} is my life.</h2>
        </div>
    );
}

export default Header;
