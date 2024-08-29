//02 . Create this structure using React
// <div id="container">
//     <div id="child1">
//         <h1></h1>
//         <h2>I am first h2</h2>
//     </div>
//     <div id="child2">
//         <h1>I am second h1</h1>
//         <h2>I am second h2</h2>
//     </div>
// </div>

const container = React.createElement(
  "div",
  { id: "container" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am first h1"),
      React.createElement("h1", {}, "I am first h2"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am second h1"),
      React.createElement("h1", {}, "I am second h2"),
    ]),
  ]
);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
