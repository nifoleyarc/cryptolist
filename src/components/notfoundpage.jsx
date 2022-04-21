import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div>
            <h1>404 Page not found</h1>
            <p>Back to <Link to="/">Home</Link></p>
        </div>
    )
}

export {Notfound}