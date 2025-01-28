import { Hellosection } from "../Home/Hellosection"
import { Insightsection } from "../Home/Insightsection"
import { Maincontainer } from "../Home/Maincontainer"

export const HomeWrapperPortal = ()=>{
    return(
        <>
        <Hellosection/>
        <Maincontainer/>
        <Insightsection/>
        </>
    )
}