
import {Link} from "react-router-dom"
function ErrorPage() {
  return (
    <div>
        <h3>Page not found, please cheack the link again</h3>
        <p>Back to<Link to="/"> home</Link></p>
    </div>
  )
}

export default ErrorPage