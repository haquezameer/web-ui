const getSubtreeFromTree = (path, filetree) => {
  if (path === "/") return filetree["/"];
  const arr = path.split("/");
  let cur = filetree["/"],
    next = "";
  while (arr.length !== 0) {
    next = arr[0];
    cur = cur["contents"][next];
    if (cur.name === arr[arr.length - 1]) return cur;
    else arr.shift();
  }
  console.log("not found");
};

export default getSubtreeFromTree;
