import React, { Component, useState } from 'react';
import classnames from 'classnames';
import Link from 'next/link';

class ConfirmNoAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changePhoneNoModel: false,
      entryPhoneNoModel: false,
      listPhoneNo: false,
      listPhoneValue: '+44',
      phoneNoList: ['+11', '+22', '+33', '+44', '+55', '+66'],
    };
  }
  render() {
    console.log(this.state);
    const {
      changePhoneNoModel,
      entryPhoneNoModel,
      listPhoneNo,
      listPhoneValue,
      phoneNoList,
    } = this.state;
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
                    <p>
                      To activate 2-Step verification with an Authenticator app
                      you must validate your phone number . In the event of
                      losing access to your Authrnticator app, you will be able
                      to use your phone number to receive your security code.
                    </p>
                  </div>
                  <div class="dapp-recovery-block">
                    <div class="form-input-label">Recovery Phone Number</div>
                    <div class="sign-form-input">
                      <input
                        type="email"
                        placeholder="Phone-0044 - (+XX)-XXXXXXXX73 "
                      />
                    </div>
                    <p class="dapp-recovery-block-txt">
                      Do you want to use the same number or willing to .{' '}
                      <a
                        onClick={() =>
                          this.setState({ changePhoneNoModel: true })
                        }
                        class="signin-btn"
                        data-toggle="modal"
                        data-target="enoch-verify-modal"
                      >
                        change{' '}
                      </a>
                      it
                    </p>
                    <div class="enoch-dapp-modal-block">
                      <div
                        id="enoch-verify-modal"
                        className={classnames('modal fade', {
                          open: changePhoneNoModel == true,
                        })}
                      >
                        {/* <!-- Modal content --> */}
                        <div class="modal-content dapp-change-number">
                          <span
                            class="close"
                            onClick={() =>
                              this.setState({ changePhoneNoModel: false })
                            }
                          >
                            <img
                              src="/images/popupCross.png"
                              alt="close"
                              class="img-fluid"
                              data-dismiss="modal"
                            />
                          </span>
                          <div class="change-no-header">
                            Change my phone number
                          </div>
                          <div class="dapp-change-number-nxt">
                            <p>
                              In order to change your Phone number, we have sent
                              security code on your registered mail id.
                            </p>
                            <div class="change-number-blocks">
                              <div class="verfication-key browser-num-key m-0">
                                <ul class="fullwith">
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input1"
                                      maxlength="1"
                                    />
                                  </li>
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input2"
                                      maxlength="1"
                                    />
                                  </li>
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input3"
                                      maxlength="1"
                                    />
                                  </li>
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input4"
                                      maxlength="1"
                                    />
                                  </li>
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input5"
                                      maxlength="1"
                                    />
                                  </li>
                                  <li>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="user_input6"
                                      maxlength="1"
                                    />
                                  </li>
                                </ul>
                              </div>
                              <div class="d-flex dApp-confirm-btn">
                                <a
                                  onClick={() =>
                                    this.setState({
                                      changePhoneNoModel: false,
                                      entryPhoneNoModel: true,
                                    })
                                  }
                                  class="btn bttn-primary"
                                  // class="btn bttn-primary bttn-disable"
                                  id="register"
                                  data-toggle="modal"
                                  data-target="enoch-verify-modal2"
                                >
                                  Confirm
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!--2nd popup--> */}
                      <div
                        id="enoch-verify-modal2"
                        className={classnames('modal fade', {
                          open: entryPhoneNoModel == true,
                        })}
                      >
                        {/* <!-- Modal content --> */}
                        <div class="modal-content dapp-change-number">
                          <span
                            class="close"
                            onClick={() =>
                              this.setState({ entryPhoneNoModel: false })
                            }
                          >
                            <img
                              src="/images/popupCross.png"
                              alt="close"
                              class="img-fluid"
                              data-dismiss="modal"
                            />
                          </span>
                          <div class="change-no-header">
                            ENTER NEW phone NUMBER
                          </div>
                          <div class="dapp-change-number-nxt">
                            <p>
                              In order to change your Phone number, we have sent
                              security code on your registered mail id.
                            </p>
                            <div class="change-number-blocks">
                              <div class="sign-form-input d-flex mb-0">
                                <div class="position-relative signup-phn">
                                  <div class="sign-form-drop-box2">
                                    <a
                                      href="javascript:void(0)"
                                      onClick={() =>
                                        this.setState({ listPhoneNo: true })
                                      }
                                      id="selectphone"
                                      class="sign-form-droplist sign-form-droplist-phn"
                                    >
                                      {listPhoneValue}
                                    </a>
                                  </div>
                                  <div
                                    id="selectphone-form-DropdownList"
                                    className={classnames(
                                      'sign-form-content signup-poohe-content',
                                      {
                                        show: listPhoneNo == true,
                                      }
                                    )}
                                  >
                                    <ul class="sign-form-drop-scrollable">
                                      {phoneNoList.map((v, i) => {
                                        return (
                                          <li
                                            onClick={() =>
                                              this.setState({
                                                listPhoneValue: v,
                                                listPhoneNo: false,
                                              })
                                            }
                                          >
                                            <div class="contact-inner">{v}</div>
                                          </li>
                                        );
                                      })}
                                      
                                      {/* <li>
                                        <div class="contact-inner">+11</div>
                                      </li>
                                      <li>
                                        <div class="contact-inner">+22</div>{' '}
                                      </li>
                                      <li>
                                        <div class="contact-inner">+33</div>
                                      </li>
                                      <li>
                                        <div class="contact-inner"> +44</div>
                                      </li>
                                      <li>
                                        <div class="contact-inner"> +55</div>
                                      </li>
                                      <li>
                                        <div class="contact-inner"> +66</div>
                                      </li> */}
                                    </ul>
                                  </div>
                                </div>
                                <div class="signup-number">
                                  <input
                                    type="text"
                                    placeholder="Phone number"
                                    value="7550860088"
                                  />
                                </div>
                              </div>
                              <div
                                class="d-flex dApp-confirm-btn"
                                onClick={() =>
                                  this.setState({ entryPhoneNoModel: false })
                                }
                              >
                                <a class="btn bttn-primary">Confirm</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex dApp-request-btn">
                    <Link href="/Authentication/ConfirmNoAuth1">
                      <a class="btn bttn-primary">Requet OTP</a>
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
export default ConfirmNoAuth;
