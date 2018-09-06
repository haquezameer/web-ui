const deleteNodeFromTree = (path, filetree, newNode) => {
  if (path === "/") {
    delete filetree["/"].contents[newNode.name];
    return filetree;
  }
  const arr = path.split("/");
  let cur = filetree["/"],
    next = "",
    prev = "";
  while (arr.length !== 0) {
    next = arr[0];
    prev = cur;
    cur = cur["contents"][next];

    if (cur.name === newNode.name) {
      delete prev.contents[cur.name];
      return filetree;
    } else arr.shift();
  }
  console.log("not found");
};

export default deleteNodeFromTree;
