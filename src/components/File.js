import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import fileicon from "./file.png";

import "./reactContextMenu.css";

class File extends Component {
  handleClick = (e, data) => {
    console.log("deleting");
    console.log(data.file.name);
    console.log(data.currentpath);
    let path =
      data.currentpath === "/"
        ? `${data.currentpath}${data.file.name}`
        : `${data.currentpath}/${data.file.name}`;
    path = path.replace("/", "");
    this.props.deleteFromTree(path, data.file);
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
          <MenuItem data={{ file, currentpath }} onClick={this.handleClick}>
            Delete
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

export default File;
