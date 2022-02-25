import { useState, useEffect, createContext } from "react";
import { createClient } from "contentful";

export const ContentfulContext = createContext()

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

const ContentfulProvider = ({children})=> {

    const [data, setData] = useState()
    const [content, setContent] = useState("pizzas")

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
        })
    
      return () => {
        return unsub
      }
    }, [content])
    


    return(
        <ContentfulContext.Provider value={[data, content, setContent]}>
            {children}
        </ContentfulContext.Provider>
    )
}

export default ContentfulProvider