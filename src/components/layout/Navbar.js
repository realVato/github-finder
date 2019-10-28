import React from 'react';



const Navbar = ({icon, title}) => {
    Navbar.defaultProps = {
        icon: "fab fa-github",
        title: "Github finder"
    };

        return (
            <nav className='navbar bg-primary'>
                <h1><i className={icon}></i> {title}</h1>
            </nav>
        );
}

export default Navbar