import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body.js';

// const api_url = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'

// const fetch_data = async ()=>{
//     const new_data = await fetch(api_url);
//     const test = await new_data.json();
// }   
// fetch_data();



const AppLayout = ()=>{
    return <div className="app" >
     <Header/>
     <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);