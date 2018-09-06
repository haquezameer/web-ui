import React, { Component } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import fileicon from "./file.png";

import "./reactContextMenu.css";

class File extends Component {
  handleClick = (e, data) => {
    console.log("deleting");
    console.log(data.name);
  };
  render() {
    const { file } = this.props;
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
          <MenuItem data={{ name: file.name }} onClick={this.handleClick}>
            Delete
          </MenuItem>
        </ContextMenu>
      </div>
    );
  }
}

export default File;
