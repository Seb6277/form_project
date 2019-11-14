import React from 'react';
import axios from 'axios';

class RegisterComponent extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            eventName: 'Foire saucisse',
            name: "",
            lastname: "",
            birth: "",
            passion: ""
        }
    }

    nameChanged(e) {
        this.setState({name: e.target.value})
    }

    lastnameChanged(e) {
        this.setState({lastname: e.target.value})
    }

    birthChanged(e) {
        this.setState({birth: e.target.value})
    }

    passionChanged(e) {
        this.setState({passion: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/api/users/register', {
            name: this.state.name,
            lastname: this.state.lastname,
            birthday: this.state.birth,
            passion: this.state.passion
        }).catch((error) => console.log(error))
    }

    render() {
        return(
            <div className="container">
                <h2>Inscription à l'event {this.state.eventName}</h2>
                <div className="col-sm-6 offset-sm-3">
                    <form>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name :</label>
                            <input className="form-control" id="name" type="text" onChange={(e) => this.nameChanged(e)}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastname">Last Name :</label>
                            <input className="form-control" id="lastname" type="text" onChange={(e) => this.lastnameChanged(e)}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="birth">Birth :</label>
                            <input className="form-control" id="birth" type="text" onChange={(e) => this.birthChanged(e)}></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="passion">Passion :</label>
                            <input className="form-control" id="passion" type="text" onChange={(e) => this.passionChanged(e)}></input>
                        </div>
                        <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;