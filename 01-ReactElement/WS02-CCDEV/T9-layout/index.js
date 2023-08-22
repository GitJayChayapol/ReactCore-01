// #1 React : CreateElement
const btn1 = React.createElement(
  "button",
  { className: "btn view_more_btn" },
  "view all pages"
);
const btn2 = React.createElement(
  "button",
  { className: "btn documentation_btn" },
  "documentation"
);
const btn = React.createElement(
  "button",
  { className: "btn_wrapper" },
  btn1,
  btn2
);
const infoText = React.createElement(
  "p",
  { className: "info-text" },
  "Build a beautiful, modern website with flexible components built from scratch."
);
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
const gridi1 = React.createElement(
  "div",
  { className: "grid-item-1" },
  head1,
  infoText,
  btn
);
const pic1 = React.createElement("img", {
  src: "https://i.ibb.co/mhcL2P6/image.png",
  alt: "team-photo",
});
const space = React.createElement(
  "div",
  {
    className: "team_img_wrapper",
  },
  pic1
);
const gridi2 = React.createElement("div", { className: "grid-item-2" }, space);
const gridC2 = React.createElement(
  "div",
  { className: "grid-cols-2" },
  gridi1,
  gridi2
);
const div09 = React.createElement("div", { className: "container" }, gridC2);
const sec09 = React.createElement("section", { className: "wrapper" }, div09);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(sec09);
