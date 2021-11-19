import React from 'react';
import './AddProduct.css';

import { useForm } from "react-hook-form";
import axios from 'axios';
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(' https://frozen-tundra-38918.herokuapp.com/products',data)
          .then(res => {
            if(res.data.insertedId){
                alert("Added Succesfully");
                console.log(res);
                reset();
            }
            console.log(res);
          })
      }

    return (
        <div className="service-field">
            <h1 className="text-center mt-1 mb-4 text-success">Please Add a Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="bg-light bg-gradient" {...register("name", { required: true, maxLength: 40 })} placeholder="Product Name"/>
                <input className="bg-light bg-gradient" {...register("price", { required: true, maxLength: 8 })} placeholder="Price"/>
                <textarea className="bg-light bg-gradient" {...register("description",)}placeholder="Description"></textarea>
                <input className="bg-light bg-gradient" {...register("image",)} placeholder="Image"/>
                <input className="btn btn-warning" type="submit" />
             </form>
        </div>
    );
};

export default AddProduct;