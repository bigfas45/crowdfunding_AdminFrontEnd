import React, { Fragment, useState, useEffect } from "react";
import {getPayment, getUserCount} from './apiCore';

const HomeSectionTwo = () => {

  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const [error, setError] = useState(false);
  let totalInvestmentCapital =0
  let totalUserCount = 0

  const initInvestmentCount = () => {
    getPayment().then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setData(data);
        }
    });
};

const initUserCount = () => {
  getUserCount().then(data => {
      if (data.error) {
          setError(data.error);
      } else {
        setUser(data);
      }
  });
};

 const totalInvestedCapital = () => {
   data.map((d, i) => {
    let investment = d.amount
    totalInvestmentCapital +=investment
   })
 }

 const totalUser = () => {
   user.map((u, i) => {
    totalUserCount++
   })
 }





useEffect(() => {
  initInvestmentCount();
  initUserCount();
}, []);




  return <Fragment>
      <section class="space-ptb">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <div class="bg-light p-4 py-5 text-center h-100">
        
<span className="font-xlll text-primary mb-6">&#8358;</span>
{totalInvestedCapital()}
          <h5 class="mt-4">{totalInvestmentCapital.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} invested capital</h5>
         
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <div class="bg-light p-4 py-5 text-center h-100">
          <i class="fas fa-users font-xlll text-primary mb-4"></i>
          {totalUser()}
          <h5 class="mb-3">{totalUserCount}+ registered users</h5> 
        </div>
      </div>
      <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        <div class="bg-light p-4 py-5 text-center h-100">
          <i class="far fa-hand-holding-seedling"></i>
         <i class="fas fa-building font-xlll text-primary mb-4"></i>
          <h5 class="mb-3"> Successfully funded companies</h5>
         
        </div>
      </div>
     
    </div>
  </div>
</section>
  </Fragment>;
};

export default HomeSectionTwo;
