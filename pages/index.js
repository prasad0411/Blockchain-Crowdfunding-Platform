import React, { Component } from 'react'
import Head from "next/head";
import { Router } from '../routes';
import Web3 from "web3";

class HomePage extends Component {

    render() {
        return (
            <>
                <Head>
                    <title>Home Page</title>
                    <link rel="stylesheet" type="text/css" href="/homepage.css" />
                </Head>

                <div className="connect-container">
                    <button
                        className={`btn btn-sm btn-primary rounded-pill mr-2
                    connect-button`}
                        onClick={async () => {
                            let web3;
                            const address = [];
                            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                                window.ethereum.request({ method: "eth_requestAccounts" }).then(res => {
                                    // Return the address of the wallet
                                    console.log(res)
                                });
                                web3 = new Web3(window.ethereum);
                                const accounts = await web3.eth.getAccounts();
                                console.log(accounts);
                            } else {
                                // We are on the server *OR* the user is not running metamask
                                const provider = new Web3.providers.HttpProvider(
                                    "https://goerli.infura.io/v3/d881b5869ec3440f8573212195db4e55"
                                );
                                web3 = new Web3(provider);
                                const accounts = await web3.eth.getAccounts();
                                console.log(accounts);
                            }

                        }}
                    >
                        Login
                    </button >
                </div>
                <div className="container">
                    <div className="page-title">
                        Crowdfunding Website using Blockchain
                    </div>
                    <div className="card-container">
                        <div className="abstract-card">
                            <div className="card-title">What have we achieved?</div>
                            <div className="card-text">
                                Through the use of an internet platform, crowdfunding has grown to
                                {/* be a well-liked method for creative people to raise money for their
                            projects. However, there are a number of problems with the present
                            crowdfunding model, including the use of third-party middlemen who
                            cannot guarantee the investor's money and a lack of investor control
                            over the use of their money. The secure, dependable, and
                            decentralised network of blockchain technology, on the other hand,
                            has grown to be quite popular across a wide range of businesses due
                            to its efficiency when compared to more conventional approaches.
                            Yet, because of their complicated and less secure networks, older
                            approaches have a lot of problems and difficulties. These issues can
                            be solved by incorporating blockchain technology, which offers
                            advantages like improved security, transparency, efficiency, and
                            reduced fraud risk. We suggest a new crowdfunding platform built on
                            blockchain technology that offers a decentralised and safe method of
                            crowdfunding to address these problems. Our platform's main goal is
                            to give investors the ability to successfully contribute to any
                            project by enabling them to create smart contracts that give them
                            control over the invested funds. As a result, project developers are
                            prevented from using funding in a manner with which investors
                            disagreed. Our work emphasises the advantages of integrating
                            blockchain in different industries while highlighting the contrasts
                            between conventional and blockchain-based crowdfunding platforms. We
                            also go through the difficulties traditional industries face and how
                            blockchain-based platforms might help solve these issues. Our goal
                            is to raise awareness of the advantages of blockchain technology in
                            various industries and to promote its adoption to increase security,
                            efficiency, and transparency. */}
                            </div>
                        </div>
                    </div>
                    <div className="card-container2">
                        <div className="team-card">
                            <div className="card-title">Team Members</div>
                            <div className="card-text">
                                Aditya Wakase 1032201574
                                <br />
                                Prasad Kanade 1032200653
                                <br />
                                Hrishikesh Pujari 1032192012
                                <br />
                                Rajnee Shenkar 1032192072
                            </div>
                        </div>
                        <div className="eth-card">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/2048px-Ethereum-icon-purple.svg.png"
                                alt="Ethereum Logo"
                                className="eth-logo"
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <button className="next-button" onClick={() => { Router.pushRoute('/allProjects') }}>
                            View all projects<span className="arrow">&#8594;</span>
                        </button>
                    </div>

                </div>
            </>
        )
    }
};
export default HomePage;
