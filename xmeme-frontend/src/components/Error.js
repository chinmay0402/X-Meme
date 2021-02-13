const Error = () => {
    return (
        <div>
            <h1 className="diplay-1 error-heading">404</h1>
            <p className="error-text">Oops! This Page Could Not Be Found</p>
            <a href="/memes"><button className="back-to-home btn btn-primary">Back to home</button></a>
        </div>
    )
}

export default Error;