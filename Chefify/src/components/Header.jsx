import React from "react";
import Logo from "./Header/Logo";
import SearchBox from "./Header/SearchBox";
import NavMenu from "./Header/NavMenu";
import UserMenu from "./Header/UserMenu";
import "tailwindcss";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-3 py-2">
            <Logo />
            <SearchBox />
            <NavMenu />
            <UserMenu />
        </header>
    );
};

export default Header;
