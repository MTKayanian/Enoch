import React, { Component } from 'react';

import Header from '../../components/Common/Header';

class KycPending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: true,
    };
  }

  render() {
    return (
      <>
        <Header />
        <div class="row">
          <div class="dashboard-header-bredcrumb">
            <div class="ezl-dashboard-container">
              <div class="col-12">
                <ul>
                  <li class="home-icon">
                    <img src="/images/home-icon.png" alt="" class="img-fluid" />
                  </li>
                  <li class="mr-1">Individual KYC /</li>
                  <li>
                    <a href="#" class="active">
                      {' '}
                      Status Update
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="KYC-BODY ezl-dashboard-container">
          <div class="Linking-wallet-four-icons-sect">
            <div class="four-icons-list">
              <div class="row">
                <div class="col-md-3">
                  <div class="Linking-wallet-icon Linking-wallet-icon-1">
                    <div class="Linking-wallet-icon-img Linking-wallet-icon-1-img">
                      <img
                        src="/images/step-2-imgs/icon-1.png"
                        alt="step-1"
                        class="img-fluid"
                      />
                    </div>
                    <div class="Linking-wallet-icon-text Linking-wallet-icon-1-text">
                      <h1>Step 1</h1>
                      <h2>Individual Profile</h2>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="Linking-wallet-icon Linking-wallet-icon-2">
                    <div class="Linking-wallet-icon-img Linking-wallet-icon-2-img Linking-wallet-icon-img-act">
                      <img
                        src="/images/step-2-imgs/icon-2-act.png"
                        alt="step-2"
                        class="img-fluid"
                      />
                    </div>
                    <div class="Linking-wallet-icon-text Linking-wallet-icon-2-text">
                      <h1>Step 2</h1>
                      <h2>Linking Wallet</h2>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="Linking-wallet-icon Linking-wallet-icon-3">
                    <div class="Linking-wallet-icon-img Linking-wallet-icon-3-img Linking-wallet-icon-img-act">
                      <img
                        src="/images/step-4-imgs/icon-3-act.png"
                        alt="step-3"
                        class="img-fluid"
                      />
                    </div>
                    <div class="Linking-wallet-icon-text Linking-wallet-icon-3-text">
                      <h1>Step 3</h1>
                      <h2>User ID Documentation</h2>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="Linking-wallet-icon Linking-wallet-icon-4">
                    <div class="Linking-wallet-icon-img Linking-wallet-icon-4-img">
                      <img
                        src="/images/step-4-imgs/icon-4.png"
                        alt="step-4"
                        class="img-fluid"
                      />
                    </div>
                    <div class="Linking-wallet-icon-text Linking-wallet-icon-4-text Linking-wallet-active">
                      <h1>Step 4</h1>
                      <h2>KYC Validation</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="Personal-KYC-Pending-sect">
            <div class="row">
              <div class="col-lg-3">
                <div class="Personal-KYC-Pending-left-sect">
                  <img
                    src="/images/step-4-imgs/timer.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-lg-9">
                <div class="Personal-KYC-Pending-right-sect">
                  <div class="Personal-KYC-Pending-title">
                    <h1>Your Personal</h1>
                    <h2>
                      KYC is <span class="Pending">Pending</span>
                    </h2>
                  </div>
                  <div class="Personal-KYC-Pending-progress-bar">
                    <div class="progress">
                      <div
                        class="progress-bar w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="Personal-KYC-Pending-footer">
                    <h2>Start</h2>
                    <h2>Complete</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="KYC-submission-sect">
              <div class="row">
                <div class="col-2">
                  <div class="Path-success">
                    <img
                      src="/images/step-4-imgs/Path-success.png"
                      alt="success"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-8 p-0">
                  <div class="KYC-submission-text">
                    <h1>
                      Thank you! We have received your KYC submission and will
                      update you via the email .
                    </h1>
                    <h2>Learn More</h2>
                  </div>
                </div>
                <div class="col-2">
                  <div class="KYC-submission-close">
                    <img
                      src="/images/step-4-imgs/x.png"
                      alt="X"
                      class="img-fluid KYC-submission-sect-close"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KycPending;
