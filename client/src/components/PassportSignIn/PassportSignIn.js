import React, { Component } from 'react';
import { Columns, Column } from 'bloomer';
import './PassportSignIn.css';

class PassportSignIn extends Component {
    render() {
        return (
            <div className='passport-signin'>
                <Columns>
                    <Column className='line-cont'><div className="line"></div></Column>
                    <Column isSize={2} className='text-centered'><span>OR</span></Column>
                    <Column className='line-cont'><div className="line"></div></Column>
                </Columns>
                <Columns className="passport-signin-container">
                    <div className='google-btn-container'>
                        <a href='auth/google' className='google-link'>
                            <img alt="google-signin-btn" className="google-btn" src="assets/images/google/btn_google_signin_normal.png"/>
                        </a>
                    </div>
                    <div className='facebook-btn-container'>
                        <a href='auth/facebook' className='google-link'>
                            <img alt="facebook-signin-btn" className="google-btn facebook-btn" src="assets/images/facebook/btn_facebook.png"/>
                        </a>
                    </div>
                </Columns>
            </div>
        );
    }
}

export default PassportSignIn;
