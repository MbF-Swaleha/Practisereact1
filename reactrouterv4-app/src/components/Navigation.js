import React from 'react' ;
import {NavLink} from "react-router-dom";


const Navigation = () => {

	return (
        <ul className="Nav">
         <NavLink to= "/"><li className="Nav1">Home</li></NavLink>
         <NavLink to= "/Services"><li className="Nav2">Services</li></NavLink>
         <NavLink to= "/OurTeam"><li className="Nav3">OurTeam</li></NavLink>
         <NavLink to= "/Aboutus"><li className="Nav4">Aboutus</li></NavLink>
         <NavLink to= "/Contactus"><li className="Nav5">Contactus</li></NavLink>
        </ul> 

		);
};

export default Navigation;