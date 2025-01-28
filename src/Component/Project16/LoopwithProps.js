import { Prophandling } from "./Prophandling"

export const LoopwithProps =()=>{
    const personData = [
        {
            name: "Rajesh",
            age: 31,
            emailId: "dkarajesh123@gmail.com",
            id: 1
        },
        {
            name: "Garvita",
            age: 2,
            emailId: "garvita@gmail.com",
            id: 2
        }, {
            name: "Sanvi",
            age: 1,
            emailId: "sanvi@gmail.com",
            id: 3
        }
    ]
    return(
       <div >
       {
         
            personData.map((details)=>(
                <h5 key={details.id}>
                <Prophandling data={details} />
                </h5>
            ))
        }
       
       </div>
    )
}