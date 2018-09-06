import React from "react";
import Folder from "./Folder";
import File from "./File";

const RootWindow = ({ location, filetree }) => {
  const currentLocation = location.pathname;
  const currentLocationTree = filetree[currentLocation];
  const currentTreeContents = Object.keys(currentLocationTree);
  return (
    <div>
      {currentTreeContents.map(node => {
        return currentLocationTree[node].type === "folder" ? (
          <Folder
            key={currentLocationTree[node].name}
            folder={currentLocationTree[node]}
          />
        ) : (
          <File
            key={currentLocationTree[node].name}
            file={currentLocationTree[node]}
          />
        );
      })}
    </div>
  );
};

export default RootWindow;
