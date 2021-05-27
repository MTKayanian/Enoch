import React, { Component, useState } from 'react';
import Link from 'next/link';

class ConfirmNoAuth2 extends Component {
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
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>Activate 2-Step verification - Authenticator app</h2>
                    <div class="dapp-recovery-phn">
                      <span>
                        <img
                          src="/images/auth-check2.png"
                          alt="logo"
                          class="img-fluid"
                        />
                      </span>
                      Recovery Phone number set
                    </div>
                    <p>
                      We’ve sent you an e-mail so you can start activating
                      2-Step verification for your account. Please read and
                      follow the provided instructions to complete this process!
                    </p>
                  </div>

                  <div class="d-flex dApp-request-btn">
                    <Link href="/Authentication/browser-verification-ga">
                      <a class="btn bttn-primary">GOT IT</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default ConfirmNoAuth2;
