// #1 React : CreateElement
const attribue = {
  className: "btn",
  role: "button",
  type: "submit",
  onClick: () => alert("Successfully Register"),
};
const btnCm = React.createElement("button", attribue, "Register");
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btnCm);
