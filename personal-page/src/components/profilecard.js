import React from 'react';

class ProfileCard extends React.Component {
    render() {
        return (
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src='../pictures/ProfilePic.jpg' />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;