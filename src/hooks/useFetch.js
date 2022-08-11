import { useEffect, useState   } from "react"
const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [pending, setPending]= useState(true)
    const [error, setError] = useState(null)
    // ?Gunakan [] pada akhir fungsi useEffect untuk menjalakannya hanya saat
    // !gunakan [name] *boleh isi sembarang, untuk menjalan kan pada saat sebuah state di render ulang
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(res =>{
            if(res.status === 200){
                return res.json();
            }else if(res.status === 404){
                throw Error('404 Not found please check your url')
            }
        })
        .then(data=>{
            setData (data)
            setPending(false)
            setError(null)
            
        })
        .catch(err=>{
            setError(err.message)
            setPending(false)
        })
        },1000
            
        )
    },[url]);

    return { data, pending, error}
}

export default useFetch