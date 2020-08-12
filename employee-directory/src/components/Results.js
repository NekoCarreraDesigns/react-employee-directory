import React, { Component } from "react";
import Container from "./Container";
Import Col from "./Col";
import Row from "./Row";
import EmployeeDetails from "./EmployeeDetails"
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
            .then(res => this.setState({ result: res.data }))
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
                    <div className="Btn"><button className="searchBtn" type="submit">Search</button></div>
                </header>
            </div>
        )
    }


}
export default Results;