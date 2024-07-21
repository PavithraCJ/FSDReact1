import { useState } from "react";
import Table from 'react-bootstrap/Table';

function Products()
{
    let[filter,setFilter]=useState()
    let[products,setProducts] = useState([{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "category": "men's clothing"
        
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "men's clothing"
        
      },
      {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "category": "men's clothing"
        
      },
      {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "category": "men's clothing"
      },

      {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "category": "jewelery"
      },
      {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "category": "jewelery"
      },
      {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "category": "jewelery"
      },
      {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "category": "jewelery"
      },
      {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "category": "electronics"
      },
      {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "category": "electronics"
      }]);
      let filteredProducts;
      const handleChange = (event)=>
        {
            setFilter(event.target.value)
            //if filter is not empty filter the data and return the products else return all the products
        }
            filteredProducts=filter?products.filter((product)=>product.title.includes(filter)):products
            //setFilteredProducts([...filteredProducts])

    


    return(
        <div>
            <input type="text" value={filter} onChange={handleChange}></input>
            <table style={{border:"2px solid black;"}} className="justify-content-center">
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Category</td>
                </tr>
                {filteredProducts.map((product)=>(
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                    </tr>))


                }
            </table>
        </div>
    );
}
export default Products;