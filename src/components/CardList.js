import React from 'react';
import Card from './Card';


const CardList = ({items}) =>{
const cardsArray = items.reverse().map((user,i)=>{
  return <Card
    key={i}
    
    message={items[i].message}
    circuit={items[i].circuit}
    type={items[i].type}
    submitDate={items[i].submitDate}
    ky ={items[i].key}
    name = {items[i].name}
    pno = {items[i].pno}
    reason = {items[i].reason}
    />
})
  return(
    <div>
      {cardsArray}
    </div>
  );
}
export default CardList;
