
import React, { Component } from 'react';



import Header from '../../components/Common/Header'


class IndividualOverview extends Component {
    state = {
        moment: '',
    };
    constructor(props) {
        super(props);

        this.state = {
            popup: false,

        };
    }


    render() {

        return (
            <>

                <Header />
                <div class="ezl-dashboard-container">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="ezl-dashboard-steps step-active">
                                        <div class="ezl-dashboard-steps-img"><img src="/images/icon1.png" alt="apply" class="img-fluid step-img" /><img src="images/icon1-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                                        <div class="ezl-dashboard-steps-txt">
                                            <h3>Apply</h3>
                                            <p>Apply for whitelisting in 2 minutes </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="ezl-dashboard-steps">
                                        <div class="ezl-dashboard-steps-img"><img src="/images/icon1.png" alt="apply" class="img-fluid step-img" /><img src="images/icon1-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                                        <div class="ezl-dashboard-steps-txt">
                                            <h3>GET APPROVED</h3>
                                            <p>Quick check on your eligibity to invest on the platform</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="ezl-dashboard-steps mb-md-0">
                                        <div class="ezl-dashboard-steps-img"><img src="/images/icon1.png" alt="apply" class="img-fluid step-img" /><img src="images/icon1-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                                        <div class="ezl-dashboard-steps-txt">
                                            <h3>Exchange /trade</h3>
                                            <p>Direct custody, Trustless end to end decentralized execution</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="ezl-dashboard-steps mb-md-0">
                                        <div class="ezl-dashboard-steps-img"><img src="/images/icon1.png" alt="apply" class="img-fluid step-img" /><img src="images/icon1-active.png" alt="apply" class="img-fluid step-img-active" /></div>
                                        <div class="ezl-dashboard-steps-txt">
                                            <h3>Stake Reward</h3>
                                            <p>STAKE is minted as a reward based on the amount of STAKE</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ezl-dashboard-right-block">
                                <div class="ezl-dashboard-right-block-txt">
                                    <p class="ezl-dashboard-status ezl-enabled">Enabled</p>
                                    <h2>Whitelisting <span>sERVICES</span></h2>

                                </div>
                                <div class="ezl-dashboard-right-block-img">
                                    <img src="/images/service-img.png" alt="service" class="img-fluid" />
                                </div>
                                <div class="ezl-dashboard-progressbar-block">
                                    <h3>Application progress</h3>
                                    <div class="ezl-dashboard-progressbar">
                                        <div class="ezl-dashboard-inner-progressbar">

                                        </div>
                                    </div>
                                    <div class="ezl-dashboard-progressbar-bottm">
                                        <span>Start</span>
                                        <span>Complete</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row ezl-marrgtop">
                        <div class="col-lg-5">
                            <div class="ezl-dashboard-stacking">
                                <h3>Staking STATS</h3>
                                <div class="ezl-dashboard-stacking-right">
                                    <div class="ezl-dashboard-stacking-val">
                                        <div class="stacking-img"><img src="/images/stacking.png" alt="stacking" class="img-fluid" /></div>
                                        <div class="stacking-value">Value <span>$.00</span></div>
                                    </div>
                                    <div class="current-apr"><span class="current-apr-txt1">Current APR</span><span class="current-apr-txt2">7.6%</span><span class="current-apr-txt3"><a href="#">More Info</a></span></div>
                                    <div class="dashboard-next-btn"><a href="#"><img src="/images/next-btn.png" alt="next-btn" class="img-fluid" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="ezl-dashboard-portfolio">
                                <h3>poRTFOLIO</h3>
                                <div class="ezl-dashboard-stacking-right">
                                    <div class="ezl-dashboard-stacking-val">
                                        <div class="stacking-img"><img src="/images/stacking.png" alt="stacking" class="img-fluid" /></div>
                                        <div class="stacking-value">Value <span>$.00</span></div>
                                    </div>
                                    <div class="ezl-dashboard-stacking-val">
                                        <div class="stacking-img"><img src="/images/holding.png" alt="holding" class="img-fluid" /></div>
                                        <div class="portfolio-value">holding <span>0</span><span class="line-height-0"><a href="#">No. of Assets </a></span></div>
                                    </div>
                                    <div class="dashboard-next-btn"><a href="#"><img src="/images/next-btn.png" alt="next-btn" class="img-fluid" /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row ezl-custom-marg30">
                        <div class="col-lg-6">
                            <div class="ezl-dashboard-market-lft">
                                <h2>Recent Announcment</h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="ezl-dashboard-market-block">
                                            <div class="maket-img"><img src="/images/market-1.png" alt="market" class="img-fluid" /></div>
                                            <h3>Markets</h3>
                                            <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                                            <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ezl-dashboard-market-block">
                                            <div class="maket-img"><img src="/images/market-2.png" alt="market" class="img-fluid" /></div>
                                            <h3>Markets</h3>
                                            <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                                            <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ezl-dashboard-market-block">
                                            <div class="maket-img"><img src="/images/market-3.png" alt="market" class="img-fluid" /></div>
                                            <h3>Markets</h3>
                                            <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                                            <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="ezl-dashboard-market-block">
                                            <div class="maket-img"><img src="/images/market-4.png" alt="market" class="img-fluid" /></div>
                                            <h3>Markets</h3>
                                            <p>Stocks Are Poised for a Record Month; Oil Retreats: Markets Wrap</p>
                                            <p class="ezl-dashboard-market-txtbttm">By <a href="#">Anchalee Worrachate</a> and <a href="#">Adam Haigh</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="ezl-dashboard-market-right">
                                <h2>Recent Announcment</h2>
                                <div class="ezl-announcement-tbl table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th><div class="mk-custm-hd">Timestamp</div></th>
                                                <th><div class="mk-custm-hd">Nonce </div></th>
                                                <th><div class="mk-custm-hd">TXN HASH </div></th>
                                                <th><div class="mk-custm-hd">Value</div></th>

                                            </tr>
                                        </thead>


                                        <tbody>
                                            <tr>
                                                <td colspan="4">
                                                    <div class="ezl-dashboard-market-right-block">
                                                        <div class="market-right"><img src="/images/Frame.png" alt="market" class="img-fluid" /></div>
                                                        <div class="ezl-no-data">No Data Available<br />Start <span>Exchange/trade</span></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div></div>




            </>
        );
    }
}

export default IndividualOverview;
