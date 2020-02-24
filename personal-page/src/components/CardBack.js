import React from 'react';
import BatmanShirt from '../pictures/BatmanShirt.jpg'

class CardBack extends React.Component {
    render() {
        return (
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src={BatmanShirt} alt='batman'/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CardBack;