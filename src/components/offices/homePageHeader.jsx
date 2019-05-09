import React, {Component} from 'react';

class HomePageHeader extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-logo">
                        <div className="logo-img">
                           <img src={require('../images/logo.jpg')} alt="logo" className="logo"/>
                        </div>
                        <div className="logo-text">
                            Politico
                        </div>
                    </div>
                    <div className="nav-items">
                        <div className="sign-up">
                            <a href="parties.html">Parties</a>
                        </div>
                        <div className="sign-in">
                            <a href="apply-candindature.html">Become Candidate</a>
                        </div>
                        <div className="profile-div">
                            <a href="profile.html">Profile</a>
                        </div>
                        <div className="profile-div">
                            <a>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePageHeader;