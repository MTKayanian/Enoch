import React, { Component, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

class ResetEmailVerification extends Component {
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
                    <h2>Recover Password</h2>
                    <p>Don’t worry happen to best of us</p>
                    <p class="recovrd-pswrd-txt">
                      Enter your mail id and we’ll send you a link to reset your
                      password
                    </p>
                  </div>

                  <form action="" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="input-label font-weight-semibold">
                          Email address
                        </div>
                        <div class="sign-form-input green-boeder">
                          <input
                            type="email"
                            placeholder="Email id"
                            value="danbrooks@gmail.com"
                          />
                          <span>
                            <img
                              src="/images/Check.png"
                              alt="Check"
                              class="img-fluid"
                            />
                          </span>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <Link href="/Authentication/email-sent">
                          <button type="submit" class="bttn-primary">
                            Send link to email
                          </button>
                        </Link>
                      </div>
                      <div class="col-md-12 mt-4">
                        <p class="signin-bttm-xt">
                          Not able to access email?{' '}
                          <a href="#" class="signin-btn">
                            Try diffrent methrod
                          </a>
                        </p>
                      </div>
                    </div>
                  </form>
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
export default ResetEmailVerification;
