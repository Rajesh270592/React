export const Prophandling=({data})=>{
return(
    <div style={{
        border: "1px solid black"
    }}>
    <h2>name : {data.name}</h2>
    <h2>age : {data.age}</h2>
    <h2>emailId : {data.emailId}</h2>

    </div>
)
}