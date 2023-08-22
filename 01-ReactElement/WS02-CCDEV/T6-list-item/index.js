// #1 React : CreateElement
const link1 = React.createElement(
  "a",
  { href: "#", class: "nav_menu_link" },
  "account"
);
const list1 = React.createElement("div", { className: "nav_menu_item" }, link1);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(list1);
