import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <article className="container text-center">
           
            <h1 className="text-4xl text-slate-800">404 Not Found</h1>
            <p className="text-lg font-medium text-slate-600">Sorry page is not found</p>
            <Link to='/' className="text-teal-500 font-semibold">Back to Homepage...</Link>
           
        </article>
     );
}
 
export default NotFound;
