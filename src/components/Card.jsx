import React from "react";


class Card extends React.Component{
    render(){
        return (
            <div>
                <div>Question: {this.props.cardData.q}</div>
                <div>Answer: {this.props.cardData.a}</div>
                <button>edit</button>
                <button >delete</button>
            </div>
        )
        }
}

export default Card 