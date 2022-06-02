import '../App.css';
import CreateForm from './CreateForm';
import React from 'react';
import query from '../api/axios'




class SignUp extends React.Component {
  constructor(props) {
      super(props);

      this.query = query;
      this.register = this.register.bind(this);
      this.state = {
          username: "",
          email: "",
          password: "",
      }
  }
  register(e) {
    e.preventDefault();

    this.query.post('/register', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
      return (
          <CreateForm title="Sign Up" submit="register" submitFn={this.register} link="Login instead ?" linkFn={this.props.clickLink}>
              <div className="app-form-group">
                  <input value={this.state.username} onChange={e => this.setState({username: e.target.value})}  className="app-form-control" placeholder="USERNAME"/>
              </div>
              <div className="app-form-group">
                  <input value={this.state.email} onChange={e => this.setState({email: e.target.value})}  className="app-form-control" type="email" placeholder="EMAIL"/>
              </div>
              <div className="app-form-group">
                  <input value={this.state.password} onChange={e => this.setState({password: e.target.value})} className="app-form-control" type="password" placeholder="PASSWORD"/>
              </div>
          </CreateForm>
      );
  }

}


export default SignUp;
