import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";

function TableProducts()
{
    let[products,setProducts]=useState([])
     async function getAllproducts()
        {
            try
            {
                let response = await fetch('https://fakestoreapi.com/products')
                let data = await response.json()
                console.log(data)
                setProducts(data)
            }
            catch(err)
            {
                console.log(err)
            }
        }

        useEffect(()=>
            {
                getAllproducts()
            },[])

        return(
            <div>
                <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                {products && products.map((product)=>(
                    <tr>
                        <td>{product.id}</td>
                         <td>{product.title}</td>
                         <td>{product.price}</td>
                        <td>{product.category}</td>

                    </tr>
                ))}
                </tbody>
                </Table>

            </div>
        )
}
export default TableProducts;