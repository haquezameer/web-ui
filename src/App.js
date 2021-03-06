import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilesandFoldersView from "./components/FilesandFoldersView/FilesandFoldersView";
import SearchBar from "./components/SearchBar/SearchBar";

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
      },
      indexes: {
        videos: ["/"],
        docs: ["/"],
        a: ["/"],
        "numb.mp3": ["/videos/musicvideos/linkinpark"],
        comedy: ["/videos"],
        musicvideos: ["/videos"],
        "c.pdf": ["/videos/musicvideos", "/docs"],
        linkinpark: ["/videos/musicvideos"]
      }
    };
  }

  addToTree = (node, location) => {
    const updatedTree = addNodeToTree(location, this.state.filetree, node);
    const newFileTree = Object.assign({}, updatedTree);
    const newIndexes = this.state.indexes;
    if (location.startsWith("/")) {
      if (node.type === "folder") {
        if (newIndexes[node.name]) {
          newIndexes[node.name].push(location);
        } else {
          newIndexes[node.name] = new Array();
          newIndexes[node.name].push(location);
        }
      } else {
        if (newIndexes[`${node.name}.${node.ext}`]) {
          newIndexes[`${node.name}.${node.ext}`].push(location);
        } else {
          newIndexes[`${node.name}.${node.ext}`] = new Array();
          newIndexes[`${node.name}.${node.ext}`].push(location);
        }
      }
    } else {
      const locationFromRoot = `/${location}`;
      if (node.type === "folder") {
        if (newIndexes[node.name]) {
          newIndexes[node.name].push(locationFromRoot);
        } else {
          newIndexes[node.name] = new Array();
          newIndexes[node.name].push(locationFromRoot);
        }
      } else {
        if (newIndexes[`${node.name}.${node.ext}`]) {
          newIndexes[`${node.name}.${node.ext}`].push(location);
        } else {
          newIndexes[`${node.name}.${node.ext}`] = new Array();
          newIndexes[`${node.name}.${node.ext}`].push(location);
        }
      }
    }
    this.setState({ filetree: newFileTree, indexes: { ...newIndexes } });
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
          <div>
            <SearchBar indexes={this.state.indexes} />
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
