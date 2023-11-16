import { useParams } from "react-router-dom";



function SayName(){

    let name = useParams();
    // console.log(name);
    return (
        <h1>Hey Your name is {name?.username}</h1>
    )
}

export default SayName;