import React from 'react';
import Card from './Card';


const CardList = ({items}) =>{
const cardsArray = items.map((user,i)=>{
  return <Card
    key={i}
    
    asset_id={items[i].Asset_id}
    location={items[i].Location} 
    bld={items[i].Building_Fl}
    desc={items[i].Asset_description}
    desc2={items[i].Description_2}
    
    />
})
  return(
    <div>
      {cardsArray}
    </div>
  );
}
export default CardList;
