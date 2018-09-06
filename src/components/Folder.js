import React from "react";
import { withRouter } from "react-router-dom";
import foldericon from "./folder.png";

const Folder = ({ currentpath, folder, history }) => {
  return currentpath === "/" ? (
    <div
      onDoubleClick={() => {
        history.push(`${currentpath}${folder.name}`);
      }}
    >
      <img style={{ display: "block" }} src={foldericon} alt="" />
      <h5>{folder.name}</h5>
    </div>
  ) : (
    <div
      onDoubleClick={() => {
        history.push(`${currentpath}/${folder.name}`);
      }}
    >
      <img style={{ display: "block" }} src={foldericon} alt="" />
      <h5>{folder.name}</h5>
    </div>
  );
};

export default withRouter(Folder);
