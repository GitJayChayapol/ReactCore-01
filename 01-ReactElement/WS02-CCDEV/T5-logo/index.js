// #1 React : CreateElement
const head2 = React.createElement("h2", null, "CodeCamp");
const header = React.createElement("div", { className: "logo" }, head2);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(header);
