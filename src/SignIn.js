import './App.css';
import CreateForm from './components/CreateForm';

function SignIn(props) {
    return (
        <CreateForm title="Sign In" submit="login" link="Register instead ?" linkFn={props.clickLink}>
            <div className="app-form-group">
                <input className="app-form-control" placeholder="USERNAME"/>
            </div>
            <div className="app-form-group">
                <input className="app-form-control" type="password" placeholder="PASSWORD"/>
            </div>
        </CreateForm>
    );
}

export default SignIn;
