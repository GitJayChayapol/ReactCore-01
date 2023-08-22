// #1 React : JSX

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task
const fullName = "Jay Codecamp";
const birthYear = "1994";

const profile = (
  <div>
    <h1>FullName : {fullName} </h1>
    <p>age: {2023 - birthYear}</p>
  </div>
);
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(profile);
