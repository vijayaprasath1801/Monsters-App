import React from 'react';
import './card-list.styles.css';
import Card from "../card/card";

function CardList(props){
 
    return( 
      <div className="card-list">
         {props.monsters.map((monster, index) =>  {
          return(
            <Card monster={monster} key={index}  />
          );
         }
         )
         }
         </div>
    )};
export default CardList;