import React from 'react'
class FourthPart2 extends React.Component{

    componentWillUnmount()
    {
        alert("componentWillUnmount is called")
    }
    render()
    {
        return<h1>FourthPart2 Component</h1>
    }
}

export default FourthPart2