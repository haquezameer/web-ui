import React, { Component } from "react";
import Modal from "react-modal";
import Folder from "./Folder";
import File from "./File";
import "./FilesandFolders.css";

const getSubtreeFromTree = (path, filetree) => {
  if (path === "/") return filetree["/"];
  const arr = path.split("/");
  let cur = filetree["/"],
    next = "";
  while (arr.length !== 0) {
    next = arr[0];
    cur = cur["contents"][next];
    if (cur.name === arr[arr.length - 1]) return cur;
    else arr.shift();
  }
  console.log("not found");
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class FilesandFoldersView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      fileorfoldername: "",
      type: "",
      fileext: ""
    };
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = "#f00";
  // }
  handleChange(e) {
    if (e.target.id === "fileorfoldername")
      this.setState({ fileorfoldername: e.target.value });
    else if (e.target.id === "fileoption")
      this.setState({ type: e.target.value });
    else if (e.target.id === "folderoption")
      this.setState({ type: e.target.value });
    else if (e.target.id === "ext") this.setState({ fileext: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location, match } = this.props;
    const currentLocation =
      match.params["0"] === "" ? location.pathname : match.params["0"];
    const { type } = this.state;
    if (type === "file") {
      const { fileorfoldername, fileext } = this.state;
      const newItem = { type, name: fileorfoldername, ext: fileext };
      console.log(newItem);
      this.props.addToTree(newItem, currentLocation);
      this.closeModal();
    } else {
      if (type === "folder") {
        const { fileorfoldername } = this.state;
        const newItem = { type, name: fileorfoldername, contents: {} };
        this.props.addToTree(newItem, currentLocation);
        this.closeModal();
        console.log(newItem);
      }
    }
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }
  render() {
    const { match, location, filetree } = this.props;
    const currentLocation =
      match.params["0"] === "" ? location.pathname : match.params["0"];
    const currentLocationTree = getSubtreeFromTree(currentLocation, filetree);
    const currentTreeContents = Object.keys(currentLocationTree.contents);
    return (
      <div className="flexcontainer">
        {currentTreeContents.map(node => {
          const currnode = currentLocationTree.contents[node];
          return currnode.type === "folder" ? (
            <Folder
              key={currnode.name}
              currentpath={match.url}
              folder={currnode}
              deleteFromTree={this.props.deleteFromTree}
            />
          ) : (
            <File
              key={currnode.name}
              currentpath={match.url}
              file={currnode}
              deleteFromTree={this.props.deleteFromTree}
            />
          );
        })}
        <button onClick={this.openModal}>Add file/folder</button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              id="fileorfoldername"
              placeholder="Enter a name for the file/folder"
              onChange={this.handleChange}
            />
            <label>
              <input
                type="radio"
                value="folder"
                checked={this.state.type === "folder"}
                id="folderoption"
                onChange={this.handleChange}
              />
              Folder
            </label>
            <label>
              <input
                type="radio"
                value="file"
                id="fileoption"
                checked={this.state.type === "file"}
                onChange={this.handleChange}
              />
              File
            </label>
            <label />
            {this.state.type === "file" ? (
              <input
                type="text"
                value={this.state.fileext}
                name="ext"
                id="ext"
                placeholder="file extension"
                onChange={this.handleChange}
              />
            ) : null}
            <input type="submit" value="submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default FilesandFoldersView;
