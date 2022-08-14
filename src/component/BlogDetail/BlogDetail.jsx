import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useFetch from "../../hooks/useFetch";


const BlogDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { data:blog, pending, error} = useFetch('http://localhost:8000/blogs/'+id)

    const deleteHandler = ()=>{
        Swal.fire({
            title: 'Do you want to delete this post?',
            icon:'warning',
            iconColor:'#ef4444',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor:'#ef4444'
            
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete('http://localhost:8000/blogs/'+blog.id)
                Swal.fire({
                    title:'Post deleted!',
                    icon:'success',
                    iconColor:'#14b8a6',
                    confirmButtonColor:'#14b8a6'
                })
                setTimeout(()=>  navigate('/'),2000)
            } 
        })
        
    }
    return (  
        <div className="container mx-auto">
            {pending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blog &&(
                <article className="container px-20">
                    <h2 className="text-2xl md:text-4xl ">{blog.title}</h2>
                    <p className="text-sm">Created by : <span className="font-semibold">{blog.author}</span> </p>
                    <p className="text-md  py-6 font-medium text-slate-700 ">{blog.body}</p>
                    <button className="px-4 py-1 bg-red-500 text-white font-semibold rounded-md" onClick={deleteHandler}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetail;