import React from "react";

class AddTwoNumber extends React.Component {
    state = {
        result: 0,
        isFormVisible: true
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const firstNumber = event.target.elements[0].value;
        const secondNumber = event.target.elements[1].value;
        const result = parseInt(firstNumber) + parseInt(secondNumber);
        this.setState({
            result: result
        });
    }

    handleToggleForm = () => {
        this.setState((prevState) => ({
            isFormVisible: !prevState.isFormVisible
        }));
    }

    render() {
        return (
            <div>
                {this.state.isFormVisible && (
                    <form onSubmit={this.handleOnSubmit}>
                        <h1>Add two numbers</h1>
                        <span>Input the first number: </span>
                        <input type="number" />
                        <br />
                        <span>Input the second number: </span>
                        <input type="number" />
                        <br />
                        <button type="submit">Submit</button>
                        <h2>Result: {this.state.result}</h2>
                    </form>
                )}
                <button type="button" onClick={this.handleToggleForm}>
                    {this.state.isFormVisible ? "Close" : "Open Add Two Number"}
                </button>
            </div>
        );
    }
}

export default AddTwoNumber;