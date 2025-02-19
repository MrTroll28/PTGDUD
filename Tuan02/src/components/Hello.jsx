import React from "react";

class Hello extends React.Component {
    state = {
        submittedName: "",
        isFormVisible: true
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.nameInput.value;
        this.setState({
            submittedName: name,
            isFormVisible: false
        });
    }

    handleToggleForm = () => {
        this.setState((prevState) => ({
            isFormVisible: !prevState.isFormVisible
        }));
    }

    render() {
        return(
            <div>
                {this.state.submittedName && <h1>Hello {this.state.submittedName}</h1>}
                {this.state.isFormVisible && (
                    <form onSubmit={this.handleOnSubmit}>
                        <span>Enter your name: </span>
                        <input type="text" name="nameInput" />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                )}
                <button type="button" onClick={this.handleToggleForm}>
                    {this.state.isFormVisible ? "Close" : "Open Hello"}
                </button>
            </div>
        );
    }
}

export default Hello;