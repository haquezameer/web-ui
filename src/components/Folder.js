import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { withRouter } from "react-router-dom";
import foldericon from "./folder.png";

import "./reactContextMenu.css";

class Folder extends Component {
  handleClick = (e, data) => {
    console.log("deleting");
    let path =
      data.currentpath === "/"
        ? `${data.currentpath}${data.folder.name}`
        : `${data.currentpath}/${data.folder.name}`;
    path = path.replace("/", "");
    this.props.deleteFromTree(path, data.folder);
  };
  render() {
    const { currentpath, folder, history } = this.props;
    return (
      <div
        onDoubleClick={() => {
          currentpath === "/"
            ? history.push(`${currentpath}${folder.name}`)
            : history.push(`${currentpath}/${folder.name}`);
        }}
      >
        <ContextMenuTrigger id={`folderMenu-${folder.name}`}>
          <div>
            <img style={{ display: "block" }} src={foldericon} alt="" />
            <h5>{folder.name}</h5>
          </div>
        </ContextMenuTrigger>
        <ContextMenu id={`folderMenu-${folder.name}`}>
          <MenuItem data={{ folder, currentpath }} onClick={this.handleClick}>
            Delete
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

export default withRouter(Folder);
