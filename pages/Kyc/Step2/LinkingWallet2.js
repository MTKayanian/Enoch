import React, { Component } from 'react';

import Header from '../../../components/Common/Header'

class LinkingWallet2 extends Component {
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

                    <div class="KYC-step-2-2nd-sect">

                        <div class="Connect-wallet-sect">
                            <div class="Connect-wallet-headings">
                                <h1>Connect wallet</h1>
                            </div>

                            <div class="Connect-wallet-menu-sect">
                                <div class="menu-row-1">
                                    <ul>
                                        <li class="MetaMaskIcon"><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-1.png" alt="MetaMask" class="img-fluid" /></div><h2>Metamask</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-2.png" alt="Ledger" class="img-fluid" /></div><h2>Ledger</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-3.png" alt="Trezor" class="img-fluid" /></div><h2>Trezor</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-4.png" alt="Torus" class="img-fluid" /></div><h2>Torus</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-5.png" alt="Argent" class="img-fluid" /></div><h2>Argent</h2></li>
                                    </ul>
                                </div>

                                <div class="menu-row-2">
                                    <ul>
                                        <li><div class="CW-icon row-2-cw-icon"><img src="/images/step-2-imgs/Ellipse-6.png" alt="CoinbaseWallet" class="img-fluid" /></div><h2 class="row-2-cw-icon-text">Coinbase Wallet</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-7.png" alt="GnosisSafe" class="img-fluid" /></div><h2>Gnosis Safe</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-8.png" alt="Formatic" class="img-fluid" /></div><h2>Formatic</h2></li>
                                        <li><div class="CW-icon"><img src="/images/step-2-imgs/Ellipse-9.png" alt="Portis" class="img-fluid" /></div><h2>Portis </h2></li>
                                        <li class="last-CW-icon-li" >&nbsp;</li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="enoch-last-btn-sect">
                        <button class="btn-back"><a href="#">BACK</a></button>
                        <button class="btn-next button-Disabled"><a href="#">Continue</a></button>
                    </div>



                </div>


            </>
        );
    }
}

export default LinkingWallet2;
