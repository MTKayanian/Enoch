import React, { Component, useState } from 'react';
import Link from 'next/link'
class EVBrowser extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="verified-body" id="custom-height">
                            <div class="verified-header-logo"><img src="/images/logo-big.png" alt="logo" class="img-fluid" /></div>
                            <div class="verified-img"><img src="/images/email-verified.png" alt="email-verified" class="img-fluid" /></div>
                            <h2>Hello, Dan</h2>
                            <p class="verified-txt1">Your email address is verfied!</p>
                            <p class="verified-txt2">Go to your account and feel free to contact us if you have any questions.<br />It's great to have you on board!</p>
                            <div><a href="#" class="btn bttn-primary verified-mail-btn">Sign in Now</a></div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default EVBrowser;
