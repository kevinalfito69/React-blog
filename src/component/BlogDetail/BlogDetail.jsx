import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const BlogDetail = () => {
    const {id} = useParams()
    const { data:blog, pending, error} = useFetch('http://localhost:8000/blogs/'+id)
    return (  
        <div className="container mx-auto">
            {pending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blog &&(
                <article>
                    <h2 className="text-2xl md:text-4xl ">BLog Details{blog.title}</h2>
                    <p className="text-sm">Created by : <span className="font-semibold">{blog.author}</span> </p>
                    <p className="text-md  py-6 font-medium text-slate-700 ">BLog Details{blog.body}</p>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;