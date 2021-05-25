import React, { Component, useState } from 'react';
import Link from 'next/link'
class Gepr extends Component {
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
                <div class="sign-up-form">
                  <div class="signup-head">
                    <div class="dapp-header-logo">
                      <img
                        src="/images/logo-big.png"
                        alt="logo"
                        class="img-fluid"
                      />
                    </div>
                    <h2>General Data Protection Regulation (GDPR) </h2>
                  </div>

                  <div class="Terms-and-Conditions-text">
                    <p>
                      The General Data Protection Regulation (GDPR) implements
                      new data protection regulations which require us to obtain
                      additional consents to process and use information for
                      those who are in the European Union.
                    </p>
                    <p>
                      Are you a citizen or resident of the European Union, or
                      will you use our service while you are in the European
                      Union?
                    </p>
                  </div>

                  <div class="tab-content">
                    <div
                      id="Personal"
                      class="tab-pane contacttabcontent active"
                    >
                      <form action="" method="post">
                        <div class="row">
                          <div class="account-cat">
                            <div class="dAppp-account-group">
                              <span class="mr-4">
                                <input
                                  id="Personal-acount"
                                  name="b-plan"
                                  type="radio"
                                  class="signuptablinks"
                                  checked
                                />
                                <label for="Personal-acount">Personal</label>
                              </span>
                              <span>
                                <input
                                  id="business-acount"
                                  name="b-plan"
                                  type="radio"
                                  class="signuptablinks"
                                />
                                <label for="business-acount">Business</label>
                              </span>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <Link href="/Authentication/Mailbox" ><button type="submit" class="bttn-primary">
                              Confirm & Continue
                            </button></Link>
                          </div>
                        </div>
                      </form>
                    </div>
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
export default Gepr;
