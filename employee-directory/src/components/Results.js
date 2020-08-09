import React, { Component } from "react";
import API from "../utils/API"


class Results extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchPeople("results");
    };

    searchPeople = (query) => {
        API.search(query)
            .then(res => this.setState({ result: res.data }).filter({ result: name }))
            .catch(err => console.log(err));
    };

    // handleInputChange = (event) => {
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchPeople(this.state.search);
    };

    render() {
        return (
            <div className="App">
                Employee Directory
                <header className="App-header">
                    <input className="search-bar" type="text" placeholder="Search Employee" />
                    <button className="searchBtn" type="submit">Search</button>
                </header>
            </div>
        )
    }


}
export default Results;