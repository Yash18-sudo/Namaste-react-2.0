const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div", {id:"child"}, [
            React.createElement("h1", {}, "This is first heading"),
            React.createElement("h2", {}, "This is second heading")
        ]),

    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "This is first heading"),
        React.createElement("h2", {}, "This is second heading")]
        )
    ]
);

//To avoid this mess there is something called JSX but as we can see react can be written in any part of app 

const heading = React.createElement("h1", {}, "This is heading")

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);//object
root.render(parent);