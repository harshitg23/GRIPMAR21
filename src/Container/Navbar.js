import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" href="/">Banking App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link" exact to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                    </li>
                </ul>
                <NavLink className="btn btn-primary  my-2 my-sm-0" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} exact to="/addUser" type="submit">{<AddIcon />} Add User</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;