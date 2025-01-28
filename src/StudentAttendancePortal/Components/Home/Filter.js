import "./Filter.css"

export const Filter=()=>{
    return(
        <>
       <div className="filter">
       <h1>Select any filter</h1>
        <i class="fa-solid fa-b"></i><input placeholder="A3"/><i class="fa-solid fa-calendar-days"></i>
        <input placeholder="TY"/><br/>
        <i class="fa-solid fa-list-ol"></i><input placeholder="Roll Number"/>
       </div>
        </>
    )
}