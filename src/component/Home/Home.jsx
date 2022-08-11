import useFetch from "../../hooks/useFetch";
import BlogList from "./BlogList/BlogList";
const Home = () => {
    // Hooks State
    const {data:blogs,pending,error} = useFetch('http://localhost:8000/blogs');
   
    
    return ( 
        <>
        {error && <div>{error}</div>}
        {pending && <div className="text-center text-teal-800 font-semibold">Loading...</div>    }
        {blogs && <BlogList blogs={blogs} title="Blog list.."/>}
        
       
        </>
     );
}
 
export default Home;