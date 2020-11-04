import React from 'react';


const Card = ({asset_id,desc,desc2,location,bld,sn,room,sup}) => {

  return (
  <div className='tc bg-white dib br3 pa3 ma2 grow bw2 w-90 shadow-5'>
    
    <div>
     
      
          <div className="f5 fw6 br3 pa3 ma2 bg-light-green  ">
              {asset_id}
          </div>
          <div className="dt-ns dt--fixed-ns">
            <div class="dtc-ns tc pv2 bg-black-10">
              <dt class="dib b">id:</dt>
              <dd class="dib ml0 dark-gray">{asset_id}</dd>
            </div>
           
          <div className="dt-ns dt--fixed-ns">
            <div class="dtc-ns tc pv2 bg-black-10">
              <dt class="dib b">Serial No: </dt>
              <dd class="dib ml0 dark-gray">{sn}</dd>
          </div>

       
    </div>
  </div>
);

}

export default Card;