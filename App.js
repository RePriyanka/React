//how to create nested structure
/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is H1 tag</h1>
 *      <h2>This is h2 tag</h2>
 *  </div>
 * </div>
 * 
 */

const parent = React.createElement(
    "div",
    { id: "parent" }, 
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{},"This is H1 tag"),
        React.createElement("h2",{},"This is H2 tag")
    ])
);

console.log(parent);

//how to create more nested structure
/**
 * 
 * <div id="parent">
 *  <div id="child">
 *      <h1>This is H1 tag</h1>
 *      <h2>This is h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>This is H1 tag</h1>
 *      <h2>This is h2 tag</h2>
 *  </div>
 * </div>
 * 
 */

const parent1 = React.createElement(
    "div",
    { id: "parent" }, 
    [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1",{},"This is H1 tag"),
            React.createElement("h2",{},"This is H2 tag")
        ]),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1",{},"This is H1 tag"),
            React.createElement("h2",{},"This is H2 tag")
        ])
    ]
);

console.log(parent1);


//Above code is more complicated as no one can understand this is just pure react code to get this more easier
//we need to use JSX


//Single structure

 const heading1 = React.createElement(
    "h1",                          // what tag we want to create like H1, div
    { id: "heading", xyz: "abc"},  //these are the attr like id, clss
    "Hello word with React1"       //what we need inside there
);

//console.log(heading1); //this wil give react object

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent1); //converting an object to H1 tag and putting into the div