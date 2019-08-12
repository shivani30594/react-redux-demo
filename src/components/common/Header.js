import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div className="header">
        <a href="#default" className="logo">CompanyLogo</a>
        <div className="header-right">
            <NavLink to="/" activeClassName="active" exact={true} >Users</NavLink>         
            <NavLink to="/posts" activeClassName="active">Posts</NavLink>         
            <NavLink to="/photos" activeClassName="active">Photos</NavLink>         
        </div>
    </div>
)

export default Header;