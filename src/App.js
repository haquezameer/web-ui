import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RootWindow from "./components/RootWindow";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filetree: {
        "/": {
          videos: {
            type: "folder",
            name: "videos",
            contents: {}
          },
          docs: {
            type: "folder",
            name: "docs",
            contents: {
              c: {
                type: "file",
                ext: "pdf",
                name: "c"
              }
            }
          },
          a: {
            type: "file",
            ext: "pdf",
            name: "a"
          }
        }
      }
    };
  }
  render() {
    return (
      <Router>
        <Route
          path="/"
          component={props => (
            <RootWindow {...props} filetree={this.state.filetree} />
          )}
        />
      </Router>
    );
  }
}

export default App;
