import React from "react";


class Home extends React.Component{
    state = {
        data: JSON.parse(localStorage.getItem("data")),
        question: true,
        answer: false,
        index: 
    }
    render(){
        return (
            <div></div>
        )
        }
}

export default Home 