import React, { Component } from 'react'
import UserItem from './UserItem'
import { getOuterBindingIdentifiers } from '@babel/types'

class Users extends Component {
    state = {
        users: [
        {
            id: '1',
            login: "brad",
            avatar_url: "https://avatars0.githubusercontent.com/u/1614?v=4",
            html_url: "https://github.com/brad"
        },
        {
            id: '2',
            login: "brad312",
            avatar_url: "https://avatars1.githubusercontent.com/u/817538?v=4",
            html_url: "https://github.com/brad"
        },
        {
            id: '3',
            login: "brad123",
            avatar_url: "https://avatars0.githubusercontent.com/u/954279?v=4",
            html_url: "https://github.com/brad"
        }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {
                    this.state.users.map(
                        user => 
                        <UserItem key={user.id} user={user} />
                    )
                }
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users
