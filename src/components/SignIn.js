import '../App.css';
import CreateForm from './CreateForm';
import query from '../api/axios';
import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.query = query;
        this.connect = this.connect.bind(this);
        this.state = {
            username: "",
            password: "",
        }
    }

    connect(e) {
        e.preventDefault();

        this.query.post('/login', {
            username: this.state.username,
            password: this.state.password
        }).then(() => sessionStorage.setItem('user', this.state.username));
    }

    render() {
        return (
            <CreateForm title="Sign In" submit="login" submitFn={this.connect} link="Register instead ?" linkFn={this.props.clickLink}>
                <div className="app-form-group">
                    <input value={this.state.username} onChange={e => this.setState({username: e.target.value})} className="app-form-control" placeholder="EMAIL"/>
                </div>
                <div className="app-form-group">
                    <input value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="app-form-control" type="password" placeholder="PASSWORD"/>
                </div>
            </CreateForm>
        );
    }

}

export default SignIn;
