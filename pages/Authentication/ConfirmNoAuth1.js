import React, { Component, useState } from 'react';
import Link from 'next/link';

class ConfirmNoAuth1 extends Component {
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
                    <h2>Confirm your phone number</h2>
                    <p>We have sent a security code to</p>
                    <h3>Phone-0044 - (+XX)-XXXXXXXX73 </h3>
                  </div>
                  <div class="dapp-recovery-block">
                    <div class="form-input-label">
                      Please enter the security code
                    </div>
                    <div class="verfication-key confirm-num-key">
                      <ul class="fullwith">
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="0"
                            maxlength="1"
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="5"
                            maxlength="1"
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="6"
                            maxlength="1"
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="6"
                            maxlength="1"
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="2"
                            maxlength="1"
                          />
                        </li>
                        <li>
                          <input
                            type="text"
                            class="form-control"
                            value="0"
                            maxlength="1"
                          />
                        </li>
                      </ul>
                    </div>
                    <p class="dapp-recovery-block-txt">
                      Didn’t reecive the OTP (One time Password){' '}
                      <a href="#" class="signin-btn">
                        Send Again{' '}
                      </a>
                    </p>
                  </div>
                  <div class="d-flex dApp-request-btn">
                    <span class="mr-3">
                      <a href="#" class="btn bttn-secondary">
                        Back
                      </a>
                    </span>
                    <span>
                      <Link href="/Authentication/ConfirmNoAuth2">
                        <a class="btn bttn-primary">Confirm</a>
                      </Link>
                    </span>
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
export default ConfirmNoAuth1;
