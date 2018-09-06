import React from "react";

const File = ({ file }) => (
  <div>
    {file.name}
    {file.ext}
  </div>
);

export default File;
