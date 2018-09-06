import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilesandFoldersView from "./components/FilesandFoldersView/FilesandFoldersView";
import addNodeToTree from "./utils/addNodeToTree";
import deleteNodeFromTree from "./utils/deleteNodeFromTree";
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

  addToTree = (node, location) => {
    const updatedTree = addNodeToTree(location, this.state.filetree, node);
    const newFileTree = Object.assign({}, updatedTree);
    this.setState({ filetree: newFileTree });
  };

  deleteFromTree = (location, node) => {
    const updatedTree = deleteNodeFromTree(location, this.state.filetree, node);
    const newFileTree = Object.assign({}, updatedTree);
    this.setState({ filetree: newFileTree });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            path="/*"
            component={props => (
              <FilesandFoldersView
                {...props}
                addToTree={this.addToTree}
                filetree={this.state.filetree}
                deleteFromTree={this.deleteFromTree}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
