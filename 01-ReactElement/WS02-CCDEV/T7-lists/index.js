// #1 React : CreateElement
const link701 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const list701 = React.createElement(
  "li",
  { className: "nav_menu_item" },
  link701
);
const link702 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const list702 = React.createElement(
  "li",
  { className: "nav_menu_item" },
  link702
);
const link703 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const list703 = React.createElement(
  "li",
  { className: "nav_menu_item" },
  link703
);
const link704 = React.createElement(
  "a",
  { href: "#", className: "nav_menu_link" },
  "account"
);
const list704 = React.createElement(
  "li",
  { className: "nav_menu_item" },
  link704
);
const list7 = React.createElement(
  "ul",
  { className: "nav_menu_list" },
  list701,
  list702,
  list703,
  link704
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(list7);
