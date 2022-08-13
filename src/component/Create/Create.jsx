import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";


const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [pending, setPending] = useState(false)
    const history = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
       
        setPending(true)
        axios.post('http://localhost:8000/blogs',{
            title:title,
            body:body,
            author:author,
        }).then(()=>{
            console.log("Blog added")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                iconColor:'#14b8a6',
                showConfirmButton: false,
                timer: 1500
                })
            setPending(false)
            setTimeout(()=>{
                history("/")
            },2000)
            
        })

    }
    return ( 
        <div className="container mx-auto">
            <h2 className="bock">Add new Blog</h2>
                <div className="container mx-auto w-1/2">
                    <form className="flex flex-col p-6 bg-white shadow-md rounded-lg gap-4 " onSubmit={handleSubmit}>
                        <label className="font-semibold">Title</label>
                        <input type="text" required className="border border-teal-400" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                        <label className="font-semibold" >Body</label>
                        <textarea className="border border-teal-400 "value={body} onChange={(e)=>setBody(e.target.value)}>
                        </textarea>
                            <label className="font-semibold">Author</label>
                            <select className="border border-teal-400" onChange={(e)=>setAuthor(e.target.value)} required>
                                <option value="">-----</option>
                                <option value="Putri Fatrilyam">Putri Fatrilyam</option>
                                <option value="Kevin ALfito">Kevin ALfito</option>
                            </select>

                        <div>

                        {!pending && <button type="submit" className="bg-teal-500 rounded-md font-semibold w-1/3 py-1 float-right px-4 text-white">Add Blog</button>}
                        {pending && <button type="submit" className="bg-teal-500/50 rounded-md font-semibold w-1/3 py-1 float-right px-4 text-white" disabled>Addind Blog...</button>}
                        </div>
                    </form>
                </div>
        </div> 
     );
}
 
export default Create;