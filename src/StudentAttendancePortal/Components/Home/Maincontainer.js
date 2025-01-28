import "./Maincontainer.css"
import image1 from "../../Assets/Images/Image1.jpeg"
export const Maincontainer = () => {
    return (
        <>
            <div className="main-container">
                <div className="main-cintainer-left">
                    <h3>For Students</h3>
                    <h5>Taking attendance made easier.Register and upload your photo<br />
                        to have a hassle free experience in recording your attendance. </h5>
                    <br />
                    <br />
                    <h3>For Teachers</h3>
                    <h5>Detailed analytics for you.Make classrooms,add students and<br />
                        take their attendance for detailed reports.
                    </h5>
                </div>
                <div className="main-container-right">
                    <img src={image1}/>
                </div>
            </div>
        </>
    )
}