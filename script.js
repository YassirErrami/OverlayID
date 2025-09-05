function generateID() {
  return 'ID-' + Math.random().toString(36).substr(2, 9);
}

window.onload = () => {
  let id = localStorage.getItem("viewerID"); // check if ID already exists
  if (!id) {
    id = generateID();
    localStorage.setItem("viewerID", id); // save it for next time
  }
  document.getElementById("overlay").innerText = `Viewer: ${id}`;
};
