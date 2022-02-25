import { useState, useEffect, createContext } from "react";
import client from "../ContentfulClient";

export const GalleryContext = createContext()


const GalleryProvider = ({children})=> {

    const [data, setData] = useState()
    const [error, setError] = useState()
    

    const fetchContentfulData = async () => {
        const res = await client.getEntries({content_type: "galleryImages"})
        return res
    }

    useEffect(() => {
        const unsub = fetchContentfulData()
        .then(data=>{
            setData(data.items)
        }).catch(error=>{
            setError(error)
        })
    
      return () => {
        return unsub
      }
    }, [])
    
    const value = {
        data,
        error,
    }


    return(
        <GalleryContext.Provider value={value}>
            {children}
        </GalleryContext.Provider>
    )
}

export default GalleryProvider