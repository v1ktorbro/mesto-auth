import React from 'react';

function Header ({children}) {
    return (
        <header className="header">
            <a href="###" className="header__logo">logo</a>
            {children}
        </header>
    )
}

 export default Header;