// #1 React : JSX

// #2 ReactDOM : createRoot

// #3 ReactDOM : TakeOver for Render Task

const user = (
  <div>
    <label htmlFor="username">username</label>
    <input className="username" id="username" name="username"></input>
  </div>
);
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(user);
