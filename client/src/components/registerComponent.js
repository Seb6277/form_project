import React from 'react';

class RegisterComponent extends React.Component{
    render() {
        return(
            <div>
                <h2>Inscription</h2>
                <form>
                    <div className="form-group">
                        <label className="form-label" for="name">Name :</label>
                        <input className="form-control" id="name" type="text"></input>
                    </div>
                    <button className="btn btn-primary">
                        Envoyer
                    </button>
                </form>
            </div>
        );
    }
}

export default RegisterComponent;