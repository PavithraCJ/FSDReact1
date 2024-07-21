import React from "react";

class PropsClass extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div>{this.props.name}</div>
        )
    }
}
export default PropsClass;