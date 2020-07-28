import React from 'react';


const Card = ({asset_id,desc,desc2,location,bld}) => {

  return (
  <div className='tc bg-white dib br3 pa3 ma2 grow bw2 w-100 shadow-5'>
    
    <div>
     
      {/* <h4 class="f5 fw6 ">{asset_id}</h4>
        <dl class="f6 lh-title mv2">
          <dt class="dib b">id:</dt>
          <dd class="dib ml0 dark-gray">{asset_id}</dd>
        </dl>
        <dl class="f6 lh-title mv2">
          <dt class="dib b">Description:</dt>
          <dd class="dib ml0 dark-gray">{desc}</dd>
          <dd class="dib ml0 dark-gray">{desc2}</dd>
        </dl>
        <dl class="f6 lh-title mv2">
          <dt class="dib b">สถานที่ตั้ง:</dt>
          <dd class="dib ml0 dark-gray">{location}</dd>
        </dl>
        <dl class="f6 lh-title mv2">
          <dt class="dib b">อาคาร / ชั้น:</dt>
          <dd class="dib ml0 dark-gray">{bld}</dd>
        </dl> */}
          <div class="f5 fw6 br3 pa3 ma2 bg-light-green  ">
              {asset_id}
          </div>
          <div class="dt-ns dt--fixed-ns">
            <div class="dtc-ns tc pv4 bg-black-10">
              <dt class="dib b">id:</dt>
              <dd class="dib ml0 dark-gray">{asset_id}</dd>
            </div>
            <div class="dtc-ns tc pv4 bg-black-05">
              <dt class="dib b">Description:</dt>
              <dd class="dib ml0 dark-gray">{desc}</dd>
            </div>
            <div class="dtc-ns tc pv4 bg-black-10">
               <dt class="dib b">สถานที่ตั้ง:</dt>
               <dd class="dib ml0 dark-gray">{location}</dd>
            </div>
          </div>

       
    </div>
  </div>
);

}

export default Card;
