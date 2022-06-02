import './App.css';
import CreateForm from './components/CreateForm';

function SignUp(props) {
  return (
    <CreateForm title="Sign Up" submit="register" link="Have an account?" linkFn={props.clickLink}>
        <div className="app-form-group">
            <input className="app-form-control" placeholder="USERNAME"/>
        </div>
        <div className="app-form-group">
            <input className="app-form-control" type="email" placeholder="EMAIL"/>
        </div>
        <div className="app-form-group">
            <input className="app-form-control" type="password" placeholder="PASSWORD"/>
        </div>
    </CreateForm>
  );
}

export default SignUp;
