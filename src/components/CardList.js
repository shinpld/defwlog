import React from 'react';
import Card from './Card';


const CardList = ({items}) =>{
const cardsArray = items.reverse().map((user,i)=>{
  return <Card
    key={i}
    
    message={items[i].message}
   
    
    />
})
  return(
    <div>
      {cardsArray}
    </div>
  );
}
export default CardList;
