import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';

function HomePage() {

    const router = useRouter();

    const handleAllProjects = () => {
        router.push('/allProjects');
    };
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel="stylesheet" href="/global.css" />
            </Head>
            <div className={styles.container}>
                <div className={styles.pageTitle}>
                    Crowdfunding Website using Blockchain
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.abstractCard}>
                        <div className={styles.cardTitle}>What have we achieved?</div>
                        <div className={styles.cardText}>
                            Through the use of an internet platform, crowdfunding has grown to
                            be a well-liked method for creative people to raise money for their
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
                            efficiency, and transparency.
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
                {/* <div className="button-container">
                    <a href="/campaigns" className="next-button">
                        Campaigns
                        <span className="arrow">&#8594;</span>
                    </a>
                </div> */}
                <button className="floating-action-button"
                    onClick={handleAllProjects}
                    Campaigns>
                </button>
            </div>
        </>
    )
}

export default HomePage