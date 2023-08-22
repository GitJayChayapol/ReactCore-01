// # 1. Vanilla (JS-DOM)
// ##Imprative พรรณา
// const header = <h1>Hello</h1>;
//const header = document.createElement('h1')
//header.innerText = 'Hello'

//#2. Vanilla (React)
//Const header = React.createElement('h1',null,'hello)

const userAge = 42;
const fullName = "John Doe";
const hobby = "swim";
const isMarried = true;
const exp = ["Driver", "Dev", "Prime minister"];
const expList = exp.map((career) => <li>{career}</li>);
const userPet = { dog: "Jum-meng", cat: "Kai-kaw" };
//JSX => not render Boolean
const styleObj = {
  color: "blue",
  textAlign: "center",
};

const userProfile = (
  <div>
    <h1 className="header">FullName : {fullName} </h1>
    <h4>age : {userAge}</h4>
    <h4> Hobby : {hobby}</h4>
    <h4>isMarried : {isMarried ? "true" : "false"}</h4>
    <h4>Experience {exp}</h4>
    <ul>{expList}</ul>
    <h4>Pets</h4>
    <p style={styleObj}>DOG : {userPet.dog}</p>
    <p>CAT : {userPet.cat}</p>
    {/* <h4>MyLucktNumber : {myLuckNumber}</h4> */}
  </div>
);

//ReactDOM
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);
