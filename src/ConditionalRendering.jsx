import React,{Component} from "react";
class ConditionalRendering extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedin:false
        };
    }
    toggleLogin = () =>{
        this.setState({isLoggedin :!this.state.isLoggedin});
    };
    render()
    {
        return(
            <div>
                {this.state.isLoggedin ? (<h1>Welcome</h1>):(<h1>Please Log in</h1>)}
                <button onClick={}></button>
            </div>
        )
    }
}