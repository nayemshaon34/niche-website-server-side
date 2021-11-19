import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const {user} =useAuth();
    useEffect(()=>{
        fetch(' https://frozen-tundra-38918.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="container">
            <h3 className="text-center text-primary mt-4">Reviews:  </h3>
            {
                reviews.map(review =>
                    <div className="container mb-5 p-3">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col card-contain">
                  <div class="card h-100 w-75">
                    <div class="card-body cart">
                      <h5 class="text-center card-title text-uppercase p-1">{review.Name}</h5>
                      <p class="card-text text-center p-1">{review.Review}</p>
                    </div>
                  </div>
                </div>
                
              </div>
                    </div>
                    
                    )
            }

            <hr />
            
        </div>
    );
};

export default Reviews;