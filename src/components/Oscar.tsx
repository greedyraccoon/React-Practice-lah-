import type React from "react"

interface  OscarProps {
    children : React.ReactNode
}


export const Oscar = (props : OscarProps) =>{
    return(
        <div> {props.children}</div>
    )
}