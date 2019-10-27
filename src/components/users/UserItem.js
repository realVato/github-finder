import React, { Component } from 'react';

class UserItem extends Component {
    // constructor() {
    //     super();
    //     this.
    // }
    state = {
            id: '4781061',
            login: "realVato",
            avatar_url: "https://avatars3.githubusercontent.com/u/44781061?v=4",
            html_url: "https://github.com/realVato"
        }

    render() {
        const {login, avatar_url, html_url} = this.state;

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
