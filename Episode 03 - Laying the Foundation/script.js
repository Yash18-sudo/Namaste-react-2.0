import React from 'react';
import ReactDOM from 'react-dom/client';
//React.createElement => object => HTMLElement(render in DOM)

//To avoid React.createElement mess there is something called JSX but as we can see react can be written in any part of app 

const heading = React.createElement("h1", {}, "This is heading")//React element


//JSX =>React.createElement => object => HTMLElement(render in DOM)

const jsxheading = (<h1 id="heading" className="heading" tabIndex="1" >Namaste react using JSX</h1>)//this is not pure javascript parcel is helping to render this 

//jsx(transpiled before it reaches the JS engine using)Parcel - Babel(a package)  

//JSX is not HTML in javascript, It is just HTML like syntax or XML like syntax



const heading1 = (
        <h1 className="head">
        Namaste React using React element
        </h1>
)

const Heading2 = ()=>(
    <h1 className="head">
    Namaste React using React comp
    </h1>
);
const number = 100;
//Functional Component
//also example of componenet composition
const HeadingComponent = () => (//remeber this 
    <div id="container">
            <Heading2/>
            <Heading2></Heading2>
            {Heading2()}
            {/* all above 3 lines are same thing */}
            <h2>{number}</h2>
            {/* we can write js inside these curly braces like above line */}
            <h1 className="heading">Namaste React functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);