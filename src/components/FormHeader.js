function FormHeader() {
    return (
        <div className="screen-header">
            <div className="screen-header-left">
                <div className="screen-header-button close"/>
                <div className="screen-header-button maximize"/>
                <div className="screen-header-button minimize"/>
            </div>
            <div className="screen-header-right">
                <div className="screen-header-ellipsis"/>
                <div className="screen-header-ellipsis"/>
                <div className="screen-header-ellipsis"/>
            </div>
        </div>
    );
}

export default FormHeader;
