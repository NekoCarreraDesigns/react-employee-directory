import React, { Component } from "react";
import Container from "./Container";
import Col from "./Col";
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
            <Container>
                <Row>
                    <Col size="lg-12">
                        <EmployeeDetails
                            image={this.state.result.image}
                            src={this.state.result.image}
                            name={this.state.result.name}
                            details={this.state.result.details}

                        />
                    </Col>
                </Row>
            </Container>
        )
    }


}
export default Results;