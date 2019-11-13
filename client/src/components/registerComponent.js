import React from 'react';

class RegisterComponent extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Foire saucisse'
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log('clicked')
    }

    render() {
        return(
            <div className="container">
                <h2>Inscription à l'event {this.state.name}</h2>
                <div className="col-sm-6 offset-sm-3">
                    <form>
                        <div className="form-group">
                            <label className="form-label" for="name">Name :</label>
                            <input className="form-control" id="name" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="lastname">Last Name :</label>
                            <input className="form-control" id="lastname" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="birth">Birth :</label>
                            <input className="form-control" id="birth" type="text"></input>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="passion">Passion :</label>
                            <input className="form-control" id="passion" type="text"></input>
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