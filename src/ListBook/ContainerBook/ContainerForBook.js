import React, { Component } from 'react';
import ContainerForBook from './ContainerForBook.css';

import image from '../../image/cover/1.png';

class ContainerBook extends React.Component {
    render() {
        return(
                <li className="ContainerForBook">
                       <a className="ContainerForBook__link" href="#">
                            <img src={this.props.image} />
                       </a>
                       <h3 className="ContainerForBook__title"> {this.props.title} </h3>
                       <span className="ContainerForBook__authors"> {this.props.author1} </span>
                       <span className="ContainerForBook__authors"> {this.props.author2} </span>
                    </li>
        );
    }
}

export default ContainerBook;