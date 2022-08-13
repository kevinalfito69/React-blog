import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
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
                            <select className="border border-teal-400" onChange={(e)=>setAuthor(e.target.value)}>
                                <option value="Putri Fatrilyam">Putri Fatrilyam</option>
                                <option value="Kevin ALfito">Kevin ALfito</option>
                            </select>

                        <div>
                        <button type="submit" className="bg-teal-500 rounded-md font-semibold w-1/3 py-1 float-right px-4 text-white">Add Blog</button>
                        </div>
                    </form>
                </div>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
        </div> 
     );
}
 
export default Create;