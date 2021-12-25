import React from "react";
import {data} from "../components/data";
import Card from "../components/Card";


class Edit extends React.Component{
    state= {
        data: data,
        newQuestion:"",
        newAnswer:""
    }

    renderCards = () => {
        return this.state.data.map((item)=>{return <Card key={item.id} cardData={item}/>})
    }

    addCard = (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }

    render(){
        console.log(this.state);
        return (
            <div>
            <div>{this.renderCards()}</div>
            <h2>Add More</h2>
            <form>
            <label htmlFor="question">Question</label>
            <input name ="question" type="text-area" value={this.state.newQuestion} onChange={(e)=>this.setState({newQuestion:e.target.value})}/>
            <label htmlFor="answer">Answer</label>
            <input name ="answer" type="text-area" value={this.state.newAnswer} onChange={(e)=>this.setState({newAnswer:e.target.value})}/>
            <button onClick={(e)=>(this.addCard(e))}>Add</button>
            </form>
            </div>
        )
        }
}

export default Edit 