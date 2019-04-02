import React, { Component } from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import Filter from '../Filter/Filter';
import ListBook from '../ListBook/ListBook';


class Header extends React.Component {
    render() {
        return (
        <div className="wrapper">
            <Navigation />
            <h1 className="header__title">Книжная полка фронтендера</h1>
            <Filter />
            <ListBook />
        </div>);
    }
}

export default Header;