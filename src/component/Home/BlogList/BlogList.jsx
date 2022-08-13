import { Link } from "react-router-dom";

const BlogList = ({blogs,title,}) => {
    return ( 
        <>
        <h1 className='text-slate-800 text-4xl flex gap-2 mb-4'><svg className="w-7 fill-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"/></svg>{title}</h1>
        <div className="md:flex flex-wrap gap-1 justify-center">
        {
            blogs.map((data)=>(
                    <div key={data.id} className='px-4 py-2 md:w-1/3  bg-white rounded-md shadow-md border'>
                        <Link to={`blog/${data.id}`}><h2 className="text-lg">{data.title}</h2></Link>
                        <p className=" text-slate-800 text-xs mb-4">Writen by: {data.author}</p>
                        <p className="font-medium text-slate-400 text-sm pb-4 line-clamp-2">{data.body}</p>
                        
                        {/* <button className="bg-red-500 text-white text-sm font-semibold py-1 px-2" >Delete Post</button> */}
                    </div>
            )).reverse()
        }
        </div>
    </>
     );
}
 
export default BlogList;