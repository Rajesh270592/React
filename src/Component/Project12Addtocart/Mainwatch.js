import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Watches } from "./Watches"
import { Cart } from "./Cart"

export const Mainwatch=()=>{
    return(
        <BrowserRouter>
         <Watches/>
         <Routes>
            <Route path="/cart" element={<Cart/>}/>
         </Routes>
        </BrowserRouter>
    )
}