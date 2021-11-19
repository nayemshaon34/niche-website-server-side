import React, { useEffect, useState } from 'react';
import Item from '../../Items/Item/Item';
const ViewItems = () => {
        const [item,setItem] = useState([]);
        useEffect(()=>{
            fetch(' https://frozen-tundra-38918.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItem(data))
        },[])
    
        const newItem = item.slice(0,6);
        console.log(newItem);
    return (
        <div className="container">
            <h1 className="mt-5 mb-4 text-center">Feature Products</h1>
            <div className="card-contain my-5">
            
            <div className="card-contanier">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                      {
                          newItem.map(item => <Item
                            item={item}
                            key={item._id}
                            ></Item>)
                      }      
                </div>
            </div>         
        </div>
        </div>
    );
};

export default ViewItems;