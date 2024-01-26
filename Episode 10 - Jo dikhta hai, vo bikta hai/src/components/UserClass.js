import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            count1:0,
            count2:0,
        };
    }

    render(){
        const {name,location,contact}= this.props
        const {count1,count2}= this.state
        return(
            <div className="user-card">
            <h1>Count:{count1}</h1>
            <h1>Count2:{count2}</h1>
            <button onClick={()=>{

                const inter =  setInterval(()=>{
                    this.setState({
                    count1:this.state.count1+1,
                    count2:this.state.count2+1,
                })
            
            },1)
            }} >
                Increase Count</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: {contact} </h4>
        </div>
        )
    }
}

export default UserClass;