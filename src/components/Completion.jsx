const Completion = props =>
    <div className="completion">
        <p className="completion--state">
            You've successfully started your trial!
        </p>
        <hr />
        <button onClick={props.handleButtonOption}>
            Return
        </button>
    </div>

export default Completion