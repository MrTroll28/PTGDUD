import React from "react";
import Logo from "./Header/Logo";
import SearchBox from "./Header/SearchBox";
import NavMenu from "./Header/NavMenu";
import UserMenu from "./Header/UserMenu";
import "../css/Header.css";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <SearchBox />
            <NavMenu />
            <UserMenu />
        </header>
    );
};

export default Header;
