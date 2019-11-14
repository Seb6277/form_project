import React from 'react';

class RegisteredList extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Liste des inscrits : </h2>
                {this.props.userList.map((user) => <p key={user._id}>{user.name}</p>)}
            </div>
        );
    }
}

export default RegisteredList;