import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
        <div>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a className="navigation__link" href="#">Главная</a>
                    </li>
                    <li className="navigation__item">
                        <a className="navigation__link" href="#">Добавить книгу</a>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navigation;
