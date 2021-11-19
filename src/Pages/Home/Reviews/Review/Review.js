import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './Review.css';
const Review = () => {
    const [review,setReview] = useState([]);
    const {user} = useAuth();
    

    const { register, handleSubmit,reset } = useForm();
    
        
        const onSubmit = data => {
            data.email= user.email;
            console.log(data);
            axios.post(' https://frozen-tundra-38918.herokuapp.com/review',data)
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
        <div className="review-field">
        <h1 className="text-center mt-5 mb-4 text-success">Please Give Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <textarea className="bg-light bg-gradient w-50" {...register("Name",)}placeholder="Your Name"></textarea> 
                <textarea className="bg-light bg-gradient w-50" {...register("Review",)}placeholder="Your Review"></textarea> 
                
                <input className="btn btn-warning w-50" type="submit" />
             </form>
        </div>
    );
};

export default Review;