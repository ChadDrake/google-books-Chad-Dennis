import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  state = {
    books: [],
    filter: "all",
    searchTerm: "",
  };

  getList = (filterTerm, search) => {
    this.setState({
      filter: filterTerm,
      searchTerm: search,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <h1>Google Books</h1>
        <main>
          <Form clickList={this.getList} />
        </main>
      </div>
    );
  }
}
export default App;
