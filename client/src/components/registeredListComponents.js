import React from 'react';

class RegisteredList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            userList: ['Lionel', 'Mickael']
        }
    }

    render() {
        return (
            <div>
                <h2>Liste des inscrits : </h2>
                {this.state.userList.map((user) => <p key={user}>{user}</p>)}
            </div>
        );
    }
}

export default RegisteredList;