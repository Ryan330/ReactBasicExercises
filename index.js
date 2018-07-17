//React Exercises
//Create Custom React Functions
const reactCreate = React.createElement;
const reactRender = ReactDOM.render;


//Print Messages
let reactTitleOne = reactCreate("h1", null, "Print Message");
let reactMsg = reactCreate("h2", null, "This message was given to you by React!");


//Render to Page
reactRender([reactTitleOne, reactMsg], document.querySelector("[targetReactOne]"));




//Print List
//Colors for List
let red = reactCreate("h2", null, "Red");
let blue = reactCreate("h2", null, "Blue");
let green = reactCreate("h2", null, "Green");

let colorArray = [red, blue, green];

//Implement Colors into List
let reactListContent = reactCreate("li", null, colorArray);

//Create List
let reactList = reactCreate("ul", null, reactListContent);
let reactListContainer = reactCreate("div", null, reactList);


//Render to Page
let reactTitleTwo = reactCreate("h1", null, "Print List");
reactRender([reactTitleTwo, reactListContainer], document.querySelector("[targetReactTwo]"));




//Print List (CSS Styling)
//Print Messages
let reactTitleThree = reactCreate("h1", null, "Print Message (With CSS Styling)");
let reactCSSMsg = reactCreate("h2", {className: "customText"}, "This message was given to you by React with CSS styling!");


//Render to Page
reactRender([reactTitleThree, reactCSSMsg], document.querySelector("[targetReactThree]"));

//Create Image
let reactTitleFour = reactCreate("h1", null, "Create Image");
let reactImage = reactCreate("img", {src: "image.png"});


//Render to Page
reactRender(reactImage, document.querySelector("[targetReactFour]"));