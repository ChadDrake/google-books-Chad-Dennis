import React, { Component } from "react";
import Form from "./Form";
import ResultList from "./ResultList";
class App extends Component {
  state = {
    books: [],
    filter: "all",
  };

  filter = (value) => {
    this.setState({
      filter: value,
    });
  };
  fetcher = (e) => {
    e.preventDefault();

    const searchTerm = e.target["search-terms"].value;
    if (this.state.filter === "all") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            books: res,
          })
        );
    } else {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}/${this.state.filter}`
      )
        .then((res) => res.json())
        .then(
          (res) =>
            this.setState({
              books: res,
            }),
          console.log(this.state.books)
        );
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Google Books</h1>
        <main>
          <Form clickList={this.fetcher} filter={this.filter} />
          <ResultList books={this.state.books} />
        </main>
      </div>
    );
  }
}
export default App;
