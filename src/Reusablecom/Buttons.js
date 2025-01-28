export const Buttons=(props)=>{
const{type,classname,id,onclick,label}=props
return(
    <button type={type} classname={classname} id={id} onclick={onclick} >{label}{""} </button>
)
}