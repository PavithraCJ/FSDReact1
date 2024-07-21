import React,{Component} from "react";

class Helloworld extends React.Component
{
    componentDidMount()
    {
        //useEffect() hook in functional component
        console.log("Component is mounting") 
    }
    render()
    {
        return(
            <div>Hello World!!!</div>
        )
    }
}
export default Helloworld;