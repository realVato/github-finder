import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        const {login, avatar_url, html_url} = this.props.user;

        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt=""
                    className="round-img"
                    style={{ width: '60px' }}
                    />

                <h3>{login}</h3>

                <a className="btn btn-dark" href={html_url} target="_blank" >More</a>
                
            </div>
        );
    }
}

export default UserItem
