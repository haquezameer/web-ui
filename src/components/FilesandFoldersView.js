import React from "react";
import Folder from "./Folder";
import File from "./File";

const getSubtreeFromTree = (path, filetree) => {
  if (path === "/") return filetree["/"];
  const arr = path.split("/");
  console.log("arr", arr);
  let cur = filetree["/"],
    next = "";
  while (arr.length !== 0) {
    console.log(arr);
    next = arr[0];
    console.log(cur);
    cur = cur["contents"][next];
    console.log("cur", cur);
    if (cur.name === arr[arr.length - 1]) return cur;
    else arr.shift();
  }
  console.log("not found");
};

const FilesandFoldersView = ({ match, location, filetree }) => {
  console.log(location.pathname);
  console.log(match.params["0"]);
  const currentLocation =
    match.params["0"] === "" ? location.pathname : match.params["0"];
  console.log(currentLocation);
  const currentLocationTree = getSubtreeFromTree(currentLocation, filetree);
  console.log(currentLocation);
  console.log(match);
  console.log(filetree);
  console.log(currentLocationTree);
  const currentTreeContents = Object.keys(currentLocationTree.contents);
  console.log(currentTreeContents);
  return (
    <div>
      {currentTreeContents.map(node => {
        const currnode = currentLocationTree.contents[node];
        return currnode.type === "folder" ? (
          <Folder
            key={currnode.name}
            currentpath={match.url}
            folder={currnode}
          />
        ) : (
          <File key={currnode.name} file={currnode} />
        );
      })}
    </div>
  );
};

export default FilesandFoldersView;
