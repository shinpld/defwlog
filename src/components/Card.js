import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import EditModal from './editModal'

const Card = ({message,circuit,type,submitDate,ky}) => {


  return (
  <div className='tc bg-white dib br3 pa1 ma2 grow bw2 w-90 shadow-5 '>
    
    <div>
  
          
          <div className="dt-ns dt--fixed-ns bg-black-10 flex">
            <div class="fl w-20 pa2 ">
            <Chip size="medium" label={(circuit==null) ? "null":circuit} color="primary"/>
          
            </div>
            <div class="fl w-20 pa2 ">
            <Chip size="medium" label={(type==null) ? "null":type} color="secondary"/>
            </div>

            <div class="fl w-40 pa2 tc ">
              <dt class="dib b">{(submitDate==null) ? "null":submitDate.slice(0,-16)}</dt>
             
            </div>

            <div class="fl w-20 pa2 ">
              <dt class="dib b">{"By: "}</dt>
              <Chip size="medium" label="Sorawit" />
            </div>
          
          </div>
          <div className="f5 fw6 br3 pa3 ma2 tl  ">
              {message} {ky}
          </div>

       
    </div>

    

  </div>
);

}

export default Card;
