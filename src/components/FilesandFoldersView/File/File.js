import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import InfoPopup from "../InfoPopup/InfoPopup";
import fileicon from "./file.png";

import "../../reactContextMenu.css";

class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      visible: false
    };
  }
  handleDelete = (e, data) => {
    let path =
      data.currentpath === "/"
        ? `${data.currentpath}${data.file.name}`
        : `${data.currentpath}/${data.file.name}`;
    path = path.replace("/", "");
    this.props.deleteFromTree(path, data.file);
  };
  handleGetInfo = (e, data) => {
    const keys = Object.keys(data);
    const node = data[keys[0]];
    this.setState({ data: node, visible: true });
  };
  handleClose = () => {
    this.setState({ visible: false });
  };
  render() {
    const { file, currentpath } = this.props;
    return (
      <div>
        <ContextMenuTrigger id={`fileMenu-${file.name}`}>
          <div>
            <img style={{ display: "block" }} src={fileicon} alt="" />
            {file.name}
            {`.`}
            {file.ext}
          </div>
        </ContextMenuTrigger>
        <ContextMenu id={`fileMenu-${file.name}`}>
          <MenuItem data={{ file, currentpath }} onClick={this.handleDelete}>
            Delete
          </MenuItem>
          <MenuItem data={{ file }} onClick={this.handleGetInfo}>
            Get Info
          </MenuItem>
        </ContextMenu>
        <InfoPopup
          data={this.state.data}
          visible={this.state.visible}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default File;
