import './App.css';
import axios from 'axios';
import SignIn from './SignIn';
import SignUp from './SignUp';
import React, { PureComponent } from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        };
        this.toggle = this.toggle.bind(this);
        this.showSignUp = this.showSignUp.bind(this);
        this.hideSignUp = this.hideSignUp.bind(this);
    }

    toggle() {
        this.setState({signUp: !this.state.signUp});
       
    }

    showSignUp() {
        this.setState({signUp: true});
    }

    hideSignUp(){
        this.setState({signUp : false});
    }

    render() {
        const show = (this.state.signUp) ? 'show' : '';

        return (
            <div className="App">
                <nav>
                    <h1>Website</h1>
                    <div className="nav-buttons">
                        <button onClick={this.showSignUp} className={show ? 'active' : ''}>Already an account?</button>
                        <button onClick={this.hideSignUp} className={show ? '' : 'active'}>Register Instead?</button>
                    </div>

                </nav>
                <div className="d-flex">
                    <section className={show ? 'd-flex' : 'd-none'}>
                        <SignIn clickLink={this.hideSignUp}/>
                    </section>
                    <section className={show ? 'd-none' : 'd-flex'}>
                        <SignUp clickLink={this.showSignUp}/>
                    </section>
                </div>
            </div>
        );
    }

}

export default App;
