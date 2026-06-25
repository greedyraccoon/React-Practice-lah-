type GreetProps={
    name : string
    messageCount?:number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return(
        <div>
            <h2>
            {
            props.isLoggedIn 
                ? <span>Ssup {props.name}! You have <strong>{props.messageCount}</strong> unread messages</span> 
                : <span>Not logged in {props.isLoggedIn} </span>
               }
                
                
            </h2>
        </div>
    )
}