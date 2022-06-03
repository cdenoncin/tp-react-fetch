import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import React, { PureComponent } from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        };
        this.getUser = this.getUser.bind(this);
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

    getUser(){
        console.log(sessionStorage.getItem('user'));
    }

    render() {
        const show = (this.state.signUp) ? 'show' : '';
        const user = sessionStorage.getItem('user') | null;


        // @todo var globally user
        return (
            <div className="App">
                <nav>
                    <h1 onClick={this.getUser}>Website</h1>
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
                <div>
                    {user ? <CreatePost/> : null}
                </div>

                <PostList/>
            </div>
        );
    }

}

export default App;
