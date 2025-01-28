import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { HeaderPortal } from "./Header"
import { FooterPortal } from "./Footer"
import { HomeWrapperPortal } from "./Components/Wrapper/HomeWrapper"
import { Studentregwrapper } from "./Components/Wrapper/Studentregwrapper"
import { OtpWrapper } from "./Components/Wrapper/OtpWrapper"
import { UploadImageWrapper } from "./Components/Wrapper/UploadImageWrapper"
import { FilterWrapper } from "./Components/Wrapper/FilterWrapper"

export const MainPortal = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderPortal />
                <Routes>
                    <Route path="/" element={<HomeWrapperPortal/>} />
                    <Route path="/studentregistration" element={<Studentregwrapper/>} />
                    <Route path="/otp" element={<OtpWrapper/>}/>
                    <Route path="/upload" element={<UploadImageWrapper/>}/>
                    <Route path="/filter" element={<FilterWrapper/>}/>

                </Routes>
                <FooterPortal />
            </BrowserRouter>
        </>
    )
}