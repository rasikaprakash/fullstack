


import React from 'react';
import '../../assets/Css/plans.css'; // Import your CSS file


export default function Plans() {
  // Sample array of details for each "whole-bo"
  const plansDetails = [
    {
      rupee: 'Rs.700',
      post: 'Postpaid',
      data: '12GB',
      calls: 'Unlimited',
      validity: '128days',
      
    },
    {
      rupee: 'Rs.800',
      post: 'Prepaid',
      data: '20GB',
      calls: 'Unlimited',
      validity: '180days',
      
    },
    
    // Add more objects for additional "whole-bo" details as needed
  ];

  return (
    <div>
      
      <div id="container">
        {plansDetails.map((plan, index) => (
          <div className="whole-bo" key={index}>
            <div className="rupee">{plan.rupee}</div>
            <div className="verti"></div>
            <div className="post">{plan.post}</div>
            <div className="gb"><b>Data</b>: {plan.data}</div>
            <div className="calls"><b>Calls</b>: {plan.calls}</div>
            <div className="valid"><b>Validity</b>: {plan.validity}</div>
            <div className="pay-btn">Pay</div>
          </div>
        ))}
      </div>
    </div>
  );
}
