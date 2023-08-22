// console.log("learn React");

// // ## Vanila JS (DOM API)
// // Create Element
// const btn = document.createElement("button");
// console.dir(btn);
// btn.innerText = "cart";
// btn.classList = "red";

// let count;

// // Render
// // const root = document.getElementById("root");
// // root.appendChild(btn);

// // ## React
// // React == Global Object (via CDN Link)
// // console.log(React);

// // React : Create Element React
// const reactElement = React.createElement(
//   "button",
//   { className: "blue" },
//   "cart"
// );
// console.dir(reactElement);

// // ReactDOM : Render to browser

// // Pick Dome
// const domRoot = document.getElementById("root");
// // TakeOver
// const root = ReactDOM.createRoot(domRoot);
// //Render
// root.render(reactElement);

React.createElement("button", null);

//ReactElement = JS Object ที่เอาไป Render ใน Browser ได้
//สร้างโดย React.createElement(tag,prosObj,...child)
const props = {
  type: "submit",
  className: "btn",
};
React.createElement("button", props, "hi");
