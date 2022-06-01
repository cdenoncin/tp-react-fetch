import FormHeader from './FormHeader';

function CreateForm(props) {
    return (
        <div className="container">
            <div className="screen">
                <FormHeader/>
                <div className="screen-body">
                    <div className="screen-body-item left">
                        <div className="app-title">
                            <span>{props.title}</span>
                        </div>
                        <button className="app-link"> {props.link}</button>
                    </div>
                    <div className="screen-body-item">
                        <form className="app-form">

                            {props.children}

                            <div className="app-form-group buttons">
                                <button className="app-form-button">{props.submit}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateForm;
