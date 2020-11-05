import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
const Card = ({message,circuit}) => {

  return (
  <div className='tc bg-white dib br3 pa3 ma2 grow bw2 w-90 shadow-5'>
    
    <div>
     
      
          
          <div className="dt-ns dt--fixed-ns bg-black-10 flex">
            <div class="dtc-ns tc pa2 ">
            <Chip size="medium" label={(circuit==null) ? "null":circuit)} color="primary"/>
          
            </div>
            <div class="dtc-ns tc pa2 ">
            <Chip size="medium" label="Interface" color="secondary"/>
            </div>
         
            <div class="dtc-ns tc pa2 ">
              <dt class="dib b">{"By: "}</dt>
              <Chip size="medium" label="Sorawit" />
            </div>
          
          </div>
          <div className="f5 fw6 br3 pa3 ma2 tl  ">
              {message}
          </div>

       
    </div>

    

  </div>
);

}

export default Card;
