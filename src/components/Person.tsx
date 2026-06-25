interface PersonProps{
    name: {
        first: string
        last: string
    }
}

export const Person = (props: PersonProps) =>{
    return <div>  {props.name.first} _ {props.name.last} </div>
}

