import React, { Component } from 'react';

import Header from '../../../components/Common/Header'

class LinkingWallet1 extends Component {
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
                                    <li class="mr-2"><img src="/images/bread-crumb-icon-home.png" alt="icon" class="img-fluid" /> </li>
                                    <li class="mr-1"><a href="#" class="dsh-active-black"> Individual KYC / </a></li>
                                    <li><a href="#"> Linking wallet</a></li>
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
                                            <img src="/images/step-2-imgs/icon-1.png" alt="step-1" class="img-fluid" />
                                        </div>
                                        <div class="Linking-wallet-icon-text Linking-wallet-icon-1-text">
                                            <h1>Step 1</h1>
                                            <h2>Individual Profile</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="Linking-wallet-icon Linking-wallet-icon-2">
                                        <div class="Linking-wallet-icon-img Linking-wallet-icon-2-img">
                                            <img src="/images/step-2-imgs/icon-2.png" alt="step-2" class="img-fluid" />
                                        </div>
                                        <div class="Linking-wallet-icon-text Linking-wallet-icon-2-text Linking-wallet-active">
                                            <h1>Step 2</h1>
                                            <h2>Linking Wallet</h2>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="Linking-wallet-icon Linking-wallet-icon-3">
                                        <div class="Linking-wallet-icon-img Linking-wallet-icon-3-img">
                                            <img src="/images/step-2-imgs/icon-3.png" alt="step-3" class="img-fluid" />
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
                                            <img src="/images/step-2-imgs/icon-4.png" alt="step-4" class="img-fluid" />
                                        </div>
                                        <div class="Linking-wallet-icon-text Linking-wallet-icon-4-text">
                                            <h1>Step 4</h1>
                                            <h2>KYC Validation</h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="Thanks-for-Joining-section">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="Thanks-for-Joining-headings">
                                    <h1>Thanks for joining. Here’s how you can get started with linking your wallet.</h1>
                                </div>
                                <div class="Thanks-for-Joining-list">
                                    <ul>
                                        <li>1. <span>Select a wallet</span></li>
                                        <li>2. <span>Connect a selected wallet and sign a message </span></li>
                                        <li>3. <span>Confirm terms & condition to connect the wallet  </span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="Thanks-for-Joining-img">
                                    <img src="/images/step-2-imgs/Joining-img.png" alt="Joining-img" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="enoch-last-btn-sect mb-5">
                        <button class="btn-back"><a href="#">BACK</a></button>
                        <button class="button-primary btn-next btn-next-two"><a href="/Kyc/Step2/LinkingWallet2">Connect wallet</a></button>
                    </div>

                </div>



            </>
        );
    }
}

export default LinkingWallet1;
