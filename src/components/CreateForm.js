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
                        {props.link ? <button className="app-link" onClick={props.linkFn}> {props.link}</button> : null}
                    </div>
                    <div className="screen-body-item">
                        <form onSubmit={props.submitFn} className="app-form">

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
