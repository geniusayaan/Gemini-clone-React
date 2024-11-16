import { createContext, useState } from "react";
import run from "../hooks/gemini-calling";

export const Context = createContext()

const ContextProvider = (props)=>{
    

    const [prompt,setprompt]=useState("")
    const [results,setresult]=useState("")
    const [prevprompts,setprevprompts]=useState([])
    const [showresult,setshowresult]=useState(false)
    const [recentprompt,setrecentprompts]=useState("")
    const [loading,setloading]=useState(false)


    const delaypara = ()=>{
        setTimeout(() => {
            setresult(prev=>prev+next);
        }, i*75);
        
    }

    const onSent  = async (prompt)=>{

        setshowresult(true)

        setloading(true)

        setrecentprompts(prompt)
        setprompt("")
        const response =  run(prompt)
        let responsearray = response.split("**")
        let newresponse
        for (let i = 0; i < responsearray; i++) {
           
            if (i===0||i%2!==1) {
                newresponse += responsearray[i]
            }else{
               newresponse+= "<b>"+responsearray[i]+"<b/>"
            }
            
            
        }

        let newresponse2 = newresponse.split("*").join("</br>")
        let newresopnsearray = newresponse2.split(" ")

        for (let i = 0; i < newresopnsearray; i++) {
            const nextword = newresopnsearray[i]
            delaypara(i,nextword)
        }
       
        

        

        setloading(false)
        
        
      }
    
    const contextvalue ={
         onSent,
         prompt,
        setprompt,
         results,
        prevprompts,
        setprevprompts,
        showresult,
        recentprompt,
        loading

    }
    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider