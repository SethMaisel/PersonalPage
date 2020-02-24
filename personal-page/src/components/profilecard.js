import React from 'react';
import ProfilePic from '../pictures/ProfilePic.jpg'

class ProfileCard extends React.Component {
    render() {
        return (
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src={ProfilePic} alt='profile-pic'/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;