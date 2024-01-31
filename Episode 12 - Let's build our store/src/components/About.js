import User from './User';
import UserClass from './UserClass';

const About =()=>{
    return (
        <div className='about'>
            <h1>This is About</h1>
            {console.log("About loaded")}
            {/* <User name={"Yash functional"} location={"haldwani"} contact={"yashbahuguna043"}></User> */}
            <UserClass name={"Yash classbased"} location={"Dehradun"} contact={"yashbahuguna901"}/>
        </div>
    )
}

export default About;