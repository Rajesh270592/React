import "./Header.css"
import { Link } from "react-router-dom"

export const HeaderPortal = () => {
    return (
        <>
            <div className="header">
                <div className="left-header">
                    <ul>
                        <li><i class="fa-solid fa-camera"></i>CAPTURE IT!</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#">Login</Link></li>
                        <li><Link to="/studentregistration">Student Registration</Link></li>
                        <li><Link to="#">Teacher Registration</Link></li>
                    </ul>
                    </div>
                    <div className="right-header">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-github"></i>

                    
                </div>
            </div>
        </>
    )
} 