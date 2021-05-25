
import React, { Component } from 'react';



import Header from '../../components/Common/Header';


class IndividualOverviewETH extends Component {
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
                <div class="row">
                    <div class="dashboard-header-bredcrumb">
                        <div class="ezl-dashboard-container">
                            <div class="col-12">
                                <ul>
                                    <li class="mr-1">Menu / </li>
                                    <li><a href="#" class="active"> Overview</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ezl-dashboard-container">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="ezl-dashboard-left-Carousel-sect">
                                <div class="w3-content w3-display-container">
                                    <div class="overview-left-slider">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="overview-left-slider-left">
                                                    <div class="overview-left-slider-left-img">
                                                        <img src="/images/hot.png" alt="hot" class="img-fluid" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-9">
                                                <div class="overview-left-slider-right">
                                                    <h1>ETH 2.0 Staking</h1>
                                                    <h2>Secure . Easy to use . Steady Earnings</h2>
                                                    <div class="overview-left-slider-nxt-btn">
                                                        <a href="#"><img src="/images/next-btn.png" alt="" class="img-fluid" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="slider-indecators w-100" >

                                        <span class="demo w3-transparent" onclick="currentDiv(1)"><img src="/images/dots-act.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(2)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ezl-dashboard-right-Carousel-sect">
                                <div class="w3-content w3-display-container">
                                    <div class="overview-slider">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="overview-slider-left">
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="slider-left-img">
                                                                <img src="/images/slider-card-active.png" alt="" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="slider-left-img">
                                                                <img src="/images/slider-card.png" alt="" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="slider-left-img">
                                                                <img src="/images/slider-card.png" alt="" class="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="overview-slider-right">
                                                    <h1>Projects</h1>
                                                    <h2>Galaxy Parents and Shadow Farming </h2>
                                                    <p>- No need to stake your LP Tokens </p>
                                                    <p>- No Gas Fees</p>
                                                    <div class="overview-right-slider-nxt-btn">
                                                        <a href="/Kyc/IndividualApply"><img src="/images/next-btn.png" alt="" class="img-fluid" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                    <div class="slider-indecators w-100" >

                                        <span class="demo w3-transparent" onclick="currentDiv(1)"><img src="/images/dots-act.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(2)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
                                        <span class="demo w3-transparent" onclick="currentDiv(3)"><img src="/images/dots.png" alt="" class="ig-fluid" /></span>
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
                                    <div class="current-apr"><span class="current-apr-txt1"><img src="/images/Ellipse 4.png" alt="Ellipse 4" class="img-fluid mr-1" />Current APR</span><span class="current-apr-txt2">7.6%</span><span class="current-apr-txt3"><a href="#">More Info</a></span></div>
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
                                <h2>Recent Transactions</h2>
                                <div class="ezl-announcement-tbl table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th><div class="mk-custm-hd">Timestamp</div></th>
                                                <th><div class="mk-custm-hd">Nonce </div></th>
                                                <th><div class="mk-custm-hd">Nonce</div></th>
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
                    </div>
                </div>




            </>
        );
    }
}

export default IndividualOverviewETH;
