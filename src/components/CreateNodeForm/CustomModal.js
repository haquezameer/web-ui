import React from "react";
import Modal from "react-modal";

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

const CustomModal = props => (
  <Modal
    isOpen={props.state.modalOpen}
    onAfterOpen={props.afterOpenModal}
    onRequestClose={props.closeModal}
    style={customStyles}
    contentLabel="Create File Node Modal"
    ariaHideApp={false}
  >
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="name"
        id="fileorfoldername"
        placeholder="Enter a name for the file/folder"
        onChange={props.handleChange}
      />
      <label>
        <input
          type="radio"
          value="folder"
          checked={props.state.type === "folder"}
          id="folderoption"
          onChange={props.handleChange}
        />
        Folder
      </label>
      <label>
        <input
          type="radio"
          value="file"
          id="fileoption"
          checked={props.state.type === "file"}
          onChange={props.handleChange}
        />
        File
      </label>
      <label />
      {props.state.type === "file" ? (
        <input
          type="text"
          value={props.state.fileext}
          name="ext"
          id="ext"
          placeholder="file extension"
          onChange={props.handleChange}
        />
      ) : null}
      <input type="submit" value="submit" />
    </form>
  </Modal>
);

export default CustomModal;
