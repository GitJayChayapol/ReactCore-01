// #1 React : CreateElement
const sp = React.createElement("span", null, "Codecamp");
const br1 = React.createElement("br", null);
const text1 = React.createElement("p", null, "Develop anything.");
const head1 = React.createElement(
  "h1",
  { className: "main-heading" },
  "Welcome",
  sp,
  br1,
  text1
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(head1);
