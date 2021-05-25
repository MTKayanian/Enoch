import React, { Component, useState } from 'react';
import Link from 'next/link'
class Mailbox extends Component {
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
              <div class="col-lg-6">
                <div class="sign-in-form">
                  <div class="mailbox-head">
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>
                      Great check your
                      <br />
                      inbox
                    </h2>
                    <p class="mailbox-txt">
                      Thanks for signing up! We just need you to verify email
                      address to complete setting up the account
                    </p>
                    <p class="mailbox-txt2">
                      Didn’t recive an email from us? <a href="#">contact us</a>
                    </p>
                  </div>
                  <div class="dapp-verify-mail">
                    <span>
                      <img
                        src="/images/alert.png"
                        alt="icon"
                        class="img-fluid"
                      />
                    </span>
                    <p>
                      Please note , it is required for you to{' '}
                      <a href="#">verify your email</a> address before youcould
                      sign in
                    </p>
                  </div>
                  <div class="d-flex">
                    <a href="/Authentication/EVBrowser" class="btn bttn-primary dapp-verify-btn">
                      Verify Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 p-0">
                <div class="sign-up-bg-image">
                  <div class="twitwr-img">
                    <a href="#">
                      <img
                        src="/images/twitter.png"
                        alt="twitter"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div>
                    <img
                      src="/images/signup.png"
                      alt="signup"
                      class="img-fluid"
                    />
                  </div>
                  <div class="top-corner">
                    <img src="/images/img1.png" alt="signup" class="img-fluid" />
                  </div>
                  <div class="bottom-corner">
                    <img src="/images/img2.png" alt="signup" class="img-fluid" />
                  </div>

                  <div class="linkedin-img">
                    <a href="#">
                      <img
                        src="/images/linkedin.png"
                        alt="linkedin"
                        class="img-fluid"
                      />
                    </a>
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
export default Mailbox;
