import { Link } from "react-router-dom"
import "./Otp.css"
export const Otp=()=>{
    return(
        <div className="otp">
       <h4>Otp varification</h4>
       <div className='otp-varify'>
          <label><i class="fa-solid fa-lock-open"></i></label>
          <input
   
          placeholder="enter OTP"
            type="password"
            name="password"
        
          />
          <br/>
          <Link to={"/upload"}><button className="submit">Submit</button></Link>
          </div>
        </div>
    )
}