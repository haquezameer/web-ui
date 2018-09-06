import React from "react";
import { withRouter } from "react-router-dom";

const Folder = ({ currentpath, folder, history }) => {
  return currentpath === "/" ? (
    <button
      onClick={() => {
        history.push(`${currentpath}${folder.name}`);
      }}
    >
      {folder.name}
    </button>
  ) : (
    <button
      onClick={() => {
        history.push(`${currentpath}/${folder.name}`);
      }}
    >
      {folder.name}
    </button>
  );
};

export default withRouter(Folder);
