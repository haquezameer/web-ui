import React from "react";
import Folder from "./Folder/Folder";
import File from "./File/File";
import CreateNodeForm from "../CreateNodeForm/CreateNodeForm";
import getSubtreeFromTree from "../../utils/getSubtreeFromTree";
import "./FilesandFolders.css";

const FilesandFoldersView = ({
  match,
  location,
  filetree,
  deleteFromTree,
  addToTree
}) => {
  const currentLocation =
    match.params["0"] === "" ? location.pathname : match.params["0"];
  const currentLocationTree = getSubtreeFromTree(currentLocation, filetree);
  const currentTreeContents = Object.keys(currentLocationTree.contents);
  return (
    <div className="flexcontainer">
      {currentTreeContents.map(node => {
        const currnode = currentLocationTree.contents[node];
        return currnode.type === "folder" ? (
          <Folder
            key={currnode.name}
            currentpath={match.url}
            folder={currnode}
            deleteFromTree={deleteFromTree}
          />
        ) : (
          <File
            key={currnode.name}
            currentpath={match.url}
            file={currnode}
            deleteFromTree={deleteFromTree}
          />
        );
      })}
      <CreateNodeForm location={location} match={match} addToTree={addToTree} />
    </div>
  );
};

export default FilesandFoldersView;
