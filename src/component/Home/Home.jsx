import { useState, useEffect } from "react"
import BlogList from "./BlogList/BlogList";
const Home = () => {
    // Hooks State
    const [blogs, setBlogs] = useState(null)
    const [pending, setPending]= useState(true)
   const [error, setError] = useState(null)
    // ?Gunakan [] pada akhir fungsi useEffect untuk menjalakannya hanya saat
    // !gunakan [name] *boleh isi sembarang, untuk menjalan kan pada saat sebuah state di render ulang
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/blogs')
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }else if(res.status === 404){
                throw Error('404 Not found please check your url')
            }
        })
        .then(data=>{
            setBlogs(data)
            setPending(false)
            setError(null)
            
        })
        .catch(err=>{
            setError(err.message)
            setPending(false)
        })
        },1000
            
        )
    },[]);
    return ( 
        <>
        {error && <div>{error}</div>}
        {pending && <div className="text-center text-teal-800 font-semibold">Loading...</div>    }
        {blogs && <BlogList blogs={blogs} title="Blog list.."/>}
        
       
        </>
     );
}
 
export default Home;