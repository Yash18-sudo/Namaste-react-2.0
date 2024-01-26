import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const Error = useRouteError();
     console.log(Error);
    return (
        <div>
            <h1>OOPS!!! <br/> Something went wrong</h1>
            <h2>{Error.status}: {Error.statusText}</h2>
            <h4>{Error.error}</h4>
            
        </div>
    )
}

export default Error;