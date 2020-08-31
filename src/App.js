import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  state = {};

  getList() {
    fetch();
  }
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
