import { useState, useEffect, createContext } from "react";
import client from "../ContentfulClient";

export const ContentfulContext = createContext()

const ContentfulProvider = ({children})=> {

    const [data, setData] = useState()
    const [content, setContent] = useState("pizzas")
    const [error, setError] = useState()
    

    const fetchContentfulData = async () => {
        const res = await client.getEntries({content_type: content})
        return res
    }

    useEffect(() => {
        const unsub = fetchContentfulData()
        .then(data=>{
            setData(data.items)
        }).catch(error=>{
            console.log(error);
            setError(error)
        })
    
      return () => {
        return unsub
      }
    }, [content])
    
    const value = {
        data,
        content,
        setContent,
        error,
    }


    return(
        <ContentfulContext.Provider value={value}>
            {children}
        </ContentfulContext.Provider>
    )
}

export default ContentfulProvider