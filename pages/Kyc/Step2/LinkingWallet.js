import React, { Component } from 'react';

import Header from '../../../components/Common/Header'

class LinkingWallet extends Component {
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

                    <div class="Linked-Wallets-Setup">
                        <div class="Linked-Wallets-Setup-headings">
                            <span><img src="/images/step-2-imgs/Question%20Mark.png" alt="Question-Mark" class="img-fluid" /></span>
                            <span class="lw-headings-text">KYC/AML</span>
                        </div>
                        <div class="Linked-Wallets-Setup-body">
                            <p>Learn how to set up and link your digital wallet on <span>Helium dApp.</span> <br />EZL users should set up their KYC contract with a single hot or cold wallet. </p>

                            <p>Setting up a KYC/AML Contract is a one-time action as long as the same wallet are used in KYC verification. This guide uses Trezor as the cold wallet or MetaMask as the hot wallet. It’s similar for other Wallets too.</p>
                        </div>
                        <div class="Linked-Wallets-Setup-footer">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="Linked-Wallets-Setup-footer-card">
                                        <h1>See our guides to using other wallet types:</h1>
                                        <a href="#">
                                            <ul>
                                                <li class="mr-3">Linked Wallets Setup</li>
                                                <li><img src="/images/step-2-imgs/Link.png" alt="Link-icon" class="img-fluid" /></li>
                                            </ul>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="Linked-Wallets-Setup-footer-img">
                                        <img src="/images/step-2-imgs/Frame.png" alt="Frame" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="Setup-with-Trezor-MetaMask-sect">
                        <div class="MetaMask-header">
                            <h1>Setup with Trezor or MetaMask</h1>
                        </div>

                        <div class="MetaMask-body">
                            <p>Please have the Trezor wallet ready or the MetaMask browser extension installed and running. Log in and make sure the appropriate MetaMask account is selected.</p>
                            <p>Click  to the Governance Portal. Before setting up the contract, connect Trezor and MetaMask.</p>

                            <div class="Connect-MetaMask">
                                <h1><span>1.</span>Connect MetaMask</h1>
                                <p>Find the ““Connect to Wallet” drop-down menu, select “Connect to MetaMask.” . If MetaMask is active, the current account will show as an available wallet. Make sure this is the correct account and select it to use as the hot wallet.</p>
                            </div>

                            <div class="Connect-Trezor">
                                <h1><span>2.</span>Connect Trezor</h1>
                                <p>In the “Connect to Wallet” drop-down menu, select “Connect to Trezor.” The Trezor wallet must be plugged in for it to show up. Follow the steps to enter the Trezor’s pin and passcode. When prompted, select an address with ETH to use as the cold wallet. Click “Unlock Wallet</p>
                            </div>

                        </div>

                    </div>

                    <div class="enoch-last-btn-sect">
                        <button class="button-primary btn-next"><a href="/Kyc/Step2/LinkingWallet1">NEXT</a></button>
                    </div>

                </div>


            </>
        );
    }
}

export default LinkingWallet;
