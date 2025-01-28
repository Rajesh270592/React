import { Link } from "react-router-dom"
import "./UploadImage.css"
export const UploadImage=()=>{
return(
    <>
   <div className="upload">
   <p>Fill in your details<br/>Image name should be of the form rollnumber.jpg 
   </p>
   <i class="fa-solid fa-cloud"></i><button>choose file</button><input placeholder="no file choosen"/>
   <br/>
   <Link ><button>Upload Photo</button></Link>
   </div>
    </>
)
}