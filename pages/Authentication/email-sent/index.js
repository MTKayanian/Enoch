import React, { Component, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

class EmailSent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log(this.state);
    const {} = this.state;
    return (
      <>
        <section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6">
                <div class="sign-in-form">
                  <div class="signin-head">
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>Email sent</h2>
                    <p>
                      <img
                        src="/images/email-sent.png"
                        alt="email-sent"
                        class="img-fluid"
                      />
                    </p>
                    <p>
                      Check your email and open the link <br />
                      we sent you to continue
                    </p>
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
                    <img
                      src="/images/img1.png"
                      alt="signup"
                      class="img-fluid"
                    />
                  </div>
                  <div class="bottom-corner">
                    <img
                      src="/images/img2.png"
                      alt="signup"
                      class="img-fluid"
                    />
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
export default EmailSent;
