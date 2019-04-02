import React, { Component } from 'react';
import './Filter.css';

class Filter extends React.Component{
    render() {
        return (
            <div className="filterBlock">
                <div className="filterElement">
                    <input id="start-lvl" type="checkbox"></input>
                    <label for="start-lvl">начальный уровень</label>
                </div>
                <div className="filterElement">
                    <input id="middle-lvl" type="checkbox"></input>
                    <label for="middle-lvl">средний уровень</label>
                </div>
                <div className="filterElement">
                    <input id="hight-lvl" type="checkbox"></input>
                    <label for="hight-lvl">высокий уровень</label>
                </div>
            </div>
        )
    }
}

export default Filter;