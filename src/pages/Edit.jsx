import React from "react";
import Card from "../components/Card";


class Edit extends React.Component {
    state = {
        data: JSON.parse(localStorage.getItem("data")),
        newQuestion: "",
        newAnswer: ""
    }

    renderCards = () => {
        return this.state.data.map((item) => { return <Card key={item.id} cardData={item} /> })
    }

    addCard = (e) => {
        const data = JSON.parse(localStorage.getItem("data"));
        data.push({ "q": this.state.newQuestion, "a": this.state.newAnswer, "id": data.length + 1 });
        localStorage.setItem("data", JSON.stringify(data));
        this.setState({ newQuestion: "", newAnswer: "" })


    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div>{this.renderCards()}</div>
                <h2>Add More</h2>
                <label htmlFor="question">Question</label>
                <input name="question" type="text-area"
                    value={this.state.newQuestion}
                    onChange={(e) => this.setState({ newQuestion: e.target.value })} />
                <label htmlFor="answer">Answer</label>
                <input name="answer" type="text-area"
                    value={this.state.newAnswer}
                    onChange={(e) => this.setState({ newAnswer: e.target.value })} />
                <button onClick={(e) => (this.addCard(e))}>Add</button>
            </div>
        )
    }
}

export default Edit