import { useState } from "react"
import Products from "./Products"
import Table from 'react-bootstrap/Table';

function ProductForm()
{
    let initialValue={'title':'','description':'','category':'','price':0}
    let[product,setProduct]=useState(initialValue)
    let[products,setProducts]=useState([])
    const handleChange=(event)=>{
        const{name,value} = event.target
        setProduct({...product,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(product)
        products.push(product)
        setProducts([...products])
        setProduct(initialValue)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={product.title} onChange={(event)=>handleChange(event)}></input>
                <br></br>
                <label htmlFor="description">description</label>
                <input type="text" id="description" name="description" value={product.description} onChange={(event)=>{handleChange(event)}}></input>
                <br></br>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category" value={product.category} onChange={(event)=>{handleChange(event)}}></input>
                <br></br>
                <label htmlFor="Price">Price</label>
                <input type="text" id="price" name="price" value={product.price} onChange={(event)=>{handleChange(event)}}></input>
                <input type="submit" value="submit"></input><br></br>
                </form>
                {JSON.stringify(products)}<br></br>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                        products.map((p)=>
                        (
                            <tr>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td>{p.category}</td>
                            <td>{p.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    )
}
export default ProductForm;