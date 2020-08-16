import React, { Component } from "react";
import Search from "../Search/Search"
import Table from "./Table/Table";
import Headings from "./Headings/Headings"
import API from "../../utils/API"


class Results extends Component {
    state = {
        users: [{}],
        search: "",
        filteredUsers: [{}],
        sort: "descend",
    };

    headings = [
        { hname: "", width: "10%", sort: "descend" },
        { hname: "Name", width: "25%", sort: "descend" },
        { hname: "Phone", width: "20%", sort: "descend" },
        { hname: "Email", width: "20%", sort: "descend" },
        { hname: "DOB", width: "20%", sort: "descend" },
    ];



    componentDidMount() {
        API.getUsers().then((res) => {
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results,
            });
        });
    }

    handleInputChange = (event) => {
        const newSearch = event.target.value.toLowerCase();
        this.setState({ search: newSearch })
        const users = this.state.users;
        console.log(users);
        const filtered = users.filter((item) =>
            item.name.first.toLowerCase().includes(newSearch) ||
            item.name.last.toLowerCase().includes(newSearch) ||
            item.phone.includes(newSearch) ||
            item.dob.date.slice(0, 10).includes(newSearch)
        );
        this.setState({ filteredUsers: filtered });
    }
    handleSort = (event) => {
        const users = this.state.users;
        console.log(users);
        let hname = event.target.attributes
            .getNamedItem("data-key")
            .value.toLowerCase();
        console.log(hname);

        if (this.state.sort === "descend") {
            this.setState({
                sort: "ascend",
            });
        } else {
            this.setState({
                sort: "descend",
            });
        }

        let sortedUsers;

        if (hname == "name") {
            sortedUsers = users.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return -1;
                }
                if (a.name.first > b.name.first) {
                    return 1;
                }
                return 0;
            });
        } else if (hname === "dob") {
            sortedUsers = users.sort((a, b) => {
                if (a.dob.date < b.dob.date) {
                    return -1;
                }
                if (a.dob.date > b.dob.date) {
                    return 1;
                }
                return 0;
            })
        } else {
            sortedUsers = users.sort((a, b) => {
                if (a[hname] < b[hname]) {
                    return -1;
                }
                if (a[hname] > b[hname]) {
                    return 1;
                }
                return 0;
            })
        }
        if (this.state.sort === "descend") {
            reverseSort(sortedUsers);
        }

        this.setState({ filteredUsers: sortedUsers });

        function reverseSort(sortedUsers) {
            return sortedUsers.reverse();
        }
    };

    render() {
        return (
            <>
                <Search handleInputChange={this.handleInputChange} />
                <table className=" table table-striped table-hover mt-5">
                    <Headings headings={this.headings} handleSort={this.handleSort} />
                    <Table users={this.state.filteredUsers} />
                </table>
            </>
        )
    }
}

export default Results;