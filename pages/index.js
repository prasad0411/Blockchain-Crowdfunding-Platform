import React, { Component } from 'react'
import Head from "next/head";
import { Router } from '../routes';

class HomePage extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Home Page</title>
                    <link rel="stylesheet" type="text/css" href="/homepage.css" />
                </Head>
                <div className="container">
                    <div className="page-title">
                        Crowdfunding Website using Blockchain
                    </div>
                    <div className="card-container">
                        <div className="abstract-card">
                            <div className="card-title">What have we achieved?</div>
                            <div className="card-text">
                                <p></p>
                                The size of crowdfunding sites has increased, leading to challenges in transparency, accountability, and investor control over funds. This lack of transparency and control hinders informed decision-making and limits the potential for positive societal impact.

                                <p></p>
                                Our project offers a comprehensive crowdfunding solution for private firms and non-profit organizations using Ethereum blockchain technology. By implementing a voting system, we empower investors to have a say in fund allocation, ensuring transparency and accountability. This solution encourages greater investment by offering investors proportional shares and potential benefits from future growth. Ultimately, our solution addresses the challenges of traditional crowdfunding, promoting innovation and positive societal impact.

                                <p></p>
                                <strong>Novelty -</strong>
                                <p></p>Our platform introduces a crowdfunding technology that offers users the ability to engage in both types of campaigns seamlessly. Unlike previous platforms that restricted users to a single category, we empower individuals to participate in private campaigns or invest in noble causes based on their personal preferences.
                                <p></p>Our platform also provides a voting system for community campaigns, requiring more than 51% investor agreement for fund usage by the campaign manager.
                                <p></p>We have introduced a share holding system for private campaigns, allowing investors to receive a proportional share holding based on their investment.
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container2">
                        <div className="team-card">
                            <div className="card-title">
                                <p></p>Team Members :</div>
                            <div className="card-textTeam">
                                Aditya Wakase 1032201574
                                <br />
                                Rajnee Shenkar 1032192072
                                <br />
                                Prasad Kanade 1032200653
                                <br />
                                Hrishikesh Pujari 1032192012

                            </div>
                        </div>
                        <div className="eth-card">
                            <img
                                src="https://www.iaccindia.com/wp-content/uploads/2018/10/Final-MIT-WPU-logo-page-001.jpg"
                                alt="Ethereum Logo"
                                className="eth-logo"
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="next-button"
                            onClick={() => { Router.pushRoute('/allProjects') }}>
                            View all projects<span className="arrow">&#8594;</span>
                        </button>
                    </div>

                </div>
            </>
        )
    }
};
export default HomePage;
