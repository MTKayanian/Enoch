import React, { Component, useState } from 'react';
import Link from 'next/link';


class ConfirmNoSms3 extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <>
                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="confirm-email-form">
                                    <div class="signin-head">
                                        <div class="dapp-header-logo"><img src="/images/logo-big.png" alt="logo" class="img-fluid" /></div>
                                        <h2>Activate 2-Step verification - SMS/Phone request</h2>
                                        <div class="dapp-recovery-phn"><span><img src="/images/auth-check2.png" alt="logo" class="img-fluid" /></span>2-Step verification with SMS/Phone is activated</div>
                                        <p>The one time password Phone (SMS) option has been turned on.</p>
                                    </div>

                                    <div class="d-flex dApp-request-btn"><a href="#" class="btn bttn-primary">Next</a></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default ConfirmNoSms3;
