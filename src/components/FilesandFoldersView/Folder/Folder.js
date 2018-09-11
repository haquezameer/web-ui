import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import InfoPopup from "../InfoPopup/InfoPopup";
import { withRouter } from "react-router-dom";
import foldericon from "./folder.png";

import "../../reactContextMenu.css";

class Folder extends Component {
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
        ? `${data.currentpath}${data.folder.name}`
        : `${data.currentpath}/${data.folder.name}`;
    path = path.replace("/", "");
    this.props.deleteFromTree(path, data.folder);
  };
  handleFolderOpen = (e, data) => {
    const { history } = this.props;
    console.log(data);
    data.currentpath === "/"
      ? history.push(`${data.currentpath}${data.folder.name}`)
      : history.push(`${data.currentpath}/${data.folder.name}`);
  };
  handleFolderOpenOnDoubleClick = () => {
    const { currentpath, folder, history } = this.props;
    currentpath === "/"
      ? history.push(`${currentpath}${folder.name}`)
      : history.push(`${currentpath}/${folder.name}`);
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
    const { currentpath, folder } = this.props;
    return (
      <div onDoubleClick={this.handleFolderOpenOnDoubleClick}>
        <ContextMenuTrigger id={`folderMenu-${folder.name}`}>
          <div>
            <img style={{ display: "block" }} src={foldericon} alt="" />
            <h5>{folder.name}</h5>
          </div>
        </ContextMenuTrigger>
        <ContextMenu id={`folderMenu-${folder.name}`}>
          <MenuItem data={{ folder, currentpath }} onClick={this.handleDelete}>
            Delete
          </MenuItem>
          <MenuItem
            data={{ folder, currentpath }}
            onClick={this.handleFolderOpen}
          >
            Open
          </MenuItem>
          <MenuItem data={{ folder }} onClick={this.handleGetInfo}>
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

export default withRouter(Folder);
