// #1 React : CreateElement
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
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(space);
