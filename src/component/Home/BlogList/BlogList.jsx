const BlogList = ({blogs}) => {
    return ( 
        <div className="md:flex flex-wrap gap-1 justify-center">
        {
            blogs.map((data)=>(
        
                    <div key={data.id} className='px-4 py-2 md:w-1/3  bg-white rounded-md shadow-md border relative'>
                        <h2 className="text-lg">{data.title}</h2>
                        <p className=" text-slate-800 text-xs mb-4">Writen by: {data.author}</p>
                        <p className="font-medium text-slate-400 text-sm pb-4">{data.body}</p>
                        <p className=" bottom-2 right-2 absolute" href="">Baca Selengkapnya...</p>
                        
                    </div>
                
            ))
        }
    </div>
     );
}
 
export default BlogList;