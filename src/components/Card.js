import React from 'react';
import Chip from '@material-ui/core/Chip';

import EditModal from './EditModal'
import Container from '@material-ui/core/Container';
import {base,db} from '../containers/Base.js';
import { Button } from '@material-ui/core';
const Card = ({message,circuit,type,submitDate,ky,name,reason,pno}) => {

  const onDeleteClick = () =>{
    base.remove(`messages/${ky}`, function(err) {
      if (!err) {
       
      }
    });
  }

  return (
  <div className='tc bg-white dib br3 pa1 ma2  bw2  shadow-5 '>
    
    <div>
  
          
          <div className="dt-ns dt--fixed-ns bg-black-10 flex">
            <div className="fl w-20 pa2 ">
            <Chip size="medium" label={(circuit==null) ? "null":circuit} color="primary"/>
          
            </div>
            <div class="fl w-20 pa2 ">
            <Chip size="medium" label={(type==null) ? "null":type} color="secondary"/>
            </div>

            <div className="fl w-40 pa3 tc v-mid">
              <dt className="dib b">{(submitDate==null) ? "null":submitDate.slice(0,-16)}</dt>
             
            </div>

            <div className="fl w-20 pa2 ">
              <dt className="dib b">{"By: "}</dt>
              <Chip size="medium" label={(name==null) ? "Sorawit":name} />
            </div>
          
          </div>
          <div className="dt-ns dt--fixed-ns bg-black-10 flex bt">
              <div className="fl w-40 pa3 tl">
                <dt className="dib b" >{"สาเหตุ :"} {reason}</dt>
              </div>
              <div className="fl w-20 pa2 ">
              
              </div>

              <div className="fl w-20 pa2 tc ">
                <Button variant="contained" size="small" color="primary" onClick={onDeleteClick}> Delete </Button>
              </div>

              <div className="fl w-20 pa2 ">
             
                <EditModal 
                Emessage = {message}
                Ecircuit = {circuit}
                Etype = {type}
                EsubmitDate= {submitDate}
                Eky= {ky}
                Ename={name}
                Ereason={reason}
                Epno={pno} />
              </div>
          
          </div>
          <div className="f5  br3 pa3 ma2 tl  ">
              {`${pno} ${message} ${ky} ` }
          </div>

       
    </div>

    

  </div>
);

}

export default Card;
