import React, { Component, useState } from 'react';
import Link from 'next/link';

class BrowserVerificationGA extends Component {
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
                  </div>
                  <div class="browser-recovery-block">
                    <h3>
                      Install an <span>Google Authenticar app</span> on your{' '}
                      <span>smart</span> device.
                    </h3>
                    <div class="browser-app-block">
                      <span class="mr-16">
                        <img
                          src="/images/dapp-gplay.png"
                          alt="logo"
                          class="img-fluid"
                        />
                      </span>
                      <span>
                        <img
                          src="/images/dapp-appstore.png"
                          alt="logo"
                          class="img-fluid"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="browser-recovery-block mt-0">
                    <h3>
                      <span>Open</span> your <span>Google Authenticator</span>{' '}
                      app and scan the <span>QR code</span> below.
                    </h3>
                    <div class="browser-app-block">
                      <img
                        src="/images/qr-code.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <p class="browser-bttm-txt">Or enter Key Manually</p>
                  </div>
                  <div class="browser-recovery-block mt-0 mb-4">
                    <h3 class="mb-4">
                      Enter the <span>6-digit code</span> generated in your{' '}
                      <span>Google Authenticator</span> app.
                    </h3>
                    <div class="verfication-key browser-num-key">
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
                  </div>
                  <div class="browser-alert">
                    <span>
                      <img
                        src="/images/Alert2.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </span>
                    Make sure the phone’s date and time is synchronized with the
                    its cellular network.
                  </div>
                  <div class="d-flex dApp-request-btn">
                    <Link href="/Authentication/browser-verification-ga1">
                      <a class="btn bttn-primary browser-next">NEXT</a>
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
export default BrowserVerificationGA;
