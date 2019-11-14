import React from 'react';
import axios from 'axios';

class RegisteredList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            userList: []
        }
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:5000/api/users/get_users').catch((error) => {
            console.log(error);
            return;
        })
        if (response !== undefined){
            this.setState({userList: response.data})
        }
    }

    render() {
        return (
            <div>
                <h2>Liste des inscrits : </h2>
                {this.state.userList.map((user) => <p key={user._id}>{user.name}</p>)}
            </div>
        );
    }
}

export default RegisteredList;