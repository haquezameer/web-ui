const deleteNodeFromTree = (path, filetree, newNode) => {
  console.log(newNode);
  if (path === "/") {
    delete filetree["/"].contents[newNode.name];
    return filetree;
  }
  const arr = path.split("/");
  console.log(arr);
  let cur = filetree["/"],
    next = "",
    prev = "";
  while (arr.length !== 0) {
    next = arr[0];
    prev = cur;
    cur = cur["contents"][next];
    console.log(cur);
    if (cur.name === newNode.name) {
      console.log(true);
      delete prev.contents[cur.name];
      return filetree;
    } else arr.shift();
  }
  console.log("not found");
};

export default deleteNodeFromTree;
