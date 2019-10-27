import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {
    static defaultProps = {
        icon: "fab fa-github",
        title: "Github finder"
    };

    // static PropTypes = {
    //     icon: PropTypes.string.isRequired;
    //     title: PropTypes.string.isRequired;
    // }

    render() {
        return (<nav className='navbar bg-primary'>
            <h1><i className={this.props.icon}></i> {this.props.title}</h1>
        </nav>);
    }
}

export default Navbar