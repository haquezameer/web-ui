const addNodeToTree = (path, filetree, newNode) => {
  if (path === "/") {
    filetree["/"].contents[newNode.name] = newNode;
    return filetree;
  }
  const arr = path.split("/");
  let cur = filetree["/"],
    next = "";
  while (arr.length !== 0) {
    next = arr[0];
    cur = cur["contents"][next];
    if (cur.name === arr[arr.length - 1]) {
      cur.contents[newNode.name] = newNode;
      return filetree;
    } else arr.shift();
  }
  console.log("not found");
};

export default addNodeToTree;
