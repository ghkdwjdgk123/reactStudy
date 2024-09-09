import React, { Component } from 'react';
import HeaderList from './header/HeaderList';
import Logo from './header/Logo';

class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                <HeaderList />
            </div>
        );
    }
}

export default Header;