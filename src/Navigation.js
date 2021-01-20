import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navigation() {



    return(
        <ul style={{display: 'flex'}}>
            <NavLink exact activeClassName="current" to="/">
                <li style={{marginLeft: 15, listStyle: 'none'}}>Acceuil</li>
            </NavLink>
            <NavLink exact activeClassName="current" to="/Projet">
                <li style={{marginLeft: 15, listStyle: 'none'}}>Projet</li>
            </NavLink>
            <NavLink exact activeClassName="current" to={"/Contact"}>
                <li style={{marginLeft: 15, listStyle: 'none'}}>Contact</li>
            </NavLink>
        </ul>
    )

}

export default Navigation;