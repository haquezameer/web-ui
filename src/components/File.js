import React from "react";
import fileicon from "./file.png";

const File = ({ file }) => (
  <div>
    <img style={{ display: "block" }} src={fileicon} alt="" />
    {file.name}
    {`.`}
    {file.ext}
  </div>
);

export default File;
