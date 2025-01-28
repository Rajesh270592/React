import "./Insightsection.css"
export const Insightsection = () => {
    return (
        <>
            <div className="insight">
                <div className="insight-part1">
                    <button>Insight</button>
                    <h2>In Depth Attendance Analytics</h2>
                    <h5>The time is now for the next step.We bring you the future of attendance<br />recording</h5>
                </div>
                <div className="insight-part2">
                    <div className="insight-part2-a">
                    <i class="fa-solid fa-gear"></i>
                    <h6>SOCIAL CONVERSATIONS</h6>
                    <p>We don't hold back.Contact us on our social <br/> media links</p>
                    </div>
                    <div className="insight-part2-b">
                    <i class="fa-brands fa-react"></i>
                    <h6>ANALYZE ATTENDANCE</h6>
                    <p>Get all the statistics and in depth analysis of <br/> attendance for teachers as well as students.</p>
                    </div>
                    <div className="insight-part2-c">
                    <i class="fa-solid fa-earth-americas"></i>
                    <h6>SAFETY FIRST</h6>
                    <p>We don't hold back.Contact us on our social <br/> media links</p>
                    </div>
                </div>
            </div>
        </>
    )
}