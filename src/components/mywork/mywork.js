import React from 'react';
import './mywork.css'
import Mywork_data from '../../assets/workdata';
// import arrow from '../../assets/arrow_forward_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';



function MyWork() {
  return (
    <div id='MyWrk' className="MyWork">
        <div class = "mywork-title">
            <h1>My latest work.</h1>
        </div>
        <div class = "mywork-cont">
            {Mywork_data.map((work, index) =>{
              return <img key={index} src ={work.w_img} alt="img" />
            })}
        </div>
        {/* <div class = "ShowButton">
          <p>Show More</p>
          <img src={arrow} alt="Show More" />
        </div> */}
    </div>
  );
}

export default MyWork;

