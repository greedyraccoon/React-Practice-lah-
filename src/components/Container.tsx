interface ContainerProps{
    style:React.CSSProperties
}



export const Container = (props : ContainerProps) => {
    return(
        <div style ={props.style}>
            Text is here lah
        </div>
    )
}