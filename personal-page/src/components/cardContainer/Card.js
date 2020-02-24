import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack'

class Card extends React.Component {
    render() {
     return(
      <div className='card-container'>
       <div className='card-body'>
        <CardBack />
   
        <CardFront />
       </div>
      </div>
     )
    }
   }
   
   // Render Card component
//    ReactDOM.render(<Card />, cardContainer);
   export default Card;