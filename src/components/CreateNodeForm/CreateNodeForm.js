import React, { Component } from "react";
import CustomModal from "./CustomModal";

class CreateNodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      fileorfoldername: "",
      type: "",
      fileext: ""
    };
  }
  openModal = () => {
    this.setState({ modalOpen: true });
  };

  handleChange = e => {
    if (e.target.id === "fileorfoldername")
      this.setState({ fileorfoldername: e.target.value });
    else if (e.target.id === "fileoption")
      this.setState({ type: e.target.value });
    else if (e.target.id === "folderoption")
      this.setState({ type: e.target.value });
    else if (e.target.id === "ext") this.setState({ fileext: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { location, match } = this.props;
    const currentLocation =
      match.params["0"] === "" ? location.pathname : match.params["0"];
    const { type } = this.state;
    if (type === "file") {
      const { fileorfoldername, fileext } = this.state;
      const newItem = { type, name: fileorfoldername, ext: fileext };
      this.props.addToTree(newItem, currentLocation);
      this.closeModal();
    } else {
      if (type === "folder") {
        const { fileorfoldername } = this.state;
        const newItem = { type, name: fileorfoldername, contents: {} };
        this.props.addToTree(newItem, currentLocation);
        this.closeModal();
      }
    }
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add file/folder</button>
        <CustomModal
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          openModal={this.openModal}
          closeModal={this.closeModal}
          state={this.state}
        />
      </div>
    );
  }
}

export default CreateNodeForm;
