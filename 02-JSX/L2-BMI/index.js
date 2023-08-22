// #1 React : JSX

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task

const height = "180";
const weight = "80";
function calcBMI(height, weight) {
  return weight / height ** 2;
}
const calc = (
  <div>
    <h3>BMI : {calcBMI(height, weight)} </h3>
  </div>
);
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(calc);
