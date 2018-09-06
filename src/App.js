import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilesandFoldersView from "./components/FilesandFoldersView";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filetree: {
        "/": {
          contents: {
            videos: {
              type: "folder",
              name: "videos",
              contents: {
                comedy: {
                  type: "folder",
                  name: "comedy",
                  contents: {}
                },
                musicvideos: {
                  type: "folder",
                  name: "musicvideos",
                  contents: {
                    c: {
                      type: "file",
                      ext: "pdf",
                      name: "c"
                    },
                    linkinpark: {
                      type: "folder",
                      name: "linkinpark",
                      contents: {
                        numb: {
                          type: "file",
                          ext: "mp3",
                          name: "numb"
                        }
                      }
                    }
                  }
                }
              }
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
      }
    };
  }
  render() {
    return (
      <Router>
        <Route
          path="/*"
          component={props => (
            <FilesandFoldersView {...props} filetree={this.state.filetree} />
          )}
        />
      </Router>
    );
  }
}

export default App;
