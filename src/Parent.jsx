import Child from "./Child"
function Parent()
{
    return(
        <div>
            <Child txtColor="red" text="This message get displayed in red color from parent"></Child>
            <Child txtColor="blue" text="Blue color text from Parent"></Child>
        </div>
    )
}

export default Parent;