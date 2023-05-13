import Head from "next/head";
import Payments from "./Payments";
import 'semantic-ui-css/semantic.min.css';
import PrivateCampaign from '../ethereum/privateCampaign';
import React, { Component } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import ContributeFormPrivate from "./ContributeFormPrivate";

class PrivateProjectDetails extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        const accounts = await web3.eth.getAccounts();
        const campaign = PrivateCampaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        const shares = await campaign.methods.shares(accounts[0]).call();
        console.log(summary);

        return {
            address: props.query.address,
            goal: summary[0],
            minContribution: summary[1],
            manager: summary[2],
            shares: shares,
            totalRaised: summary[5],
            totalShares: summary[6],
            title: summary[7],
            description: summary[8]
        };
    }
    renderCards() {
        const {
            address,
            goal,
            minContribution,
            manager,
            shares,

            totalRaised,
            totalShares,
            title,
            description
        } = this.props;

        const items = [{
            header: manager,
            description:
                'The manager has created this campaign and can withdraw money.',
            meta: 'Address of Manager',
            style: { overflowWrap: 'break-word' },
            fluid: true,
            className: 'custom-card',
        },
        {
            header: minContribution,
            description:
                'The price for 1 share.',
            meta: 'Share Price (wei)',
            fluid: true,
            className: 'custom-card',
        },
        {
            header: shares,
            description:
                'Shares owned by you of this Project',
            meta: 'Shares',
            fluid: true,
            className: 'custom-card',
        },
        {
            header: totalShares,
            description:
                'Total amount of shares claimed by the Investors',
            meta: 'Total shares',
            fluid: true,
            className: 'custom-card',
        },
        {
            header: goal,
            description:
                'Total Funds required by the Project',
            meta: 'Total shares',
            fluid: true,
            className: 'custom-card',
        },
        ];
        return <Card.Group items={items}></Card.Group>;
    }
    invest = async () => {
    }

    render() {
        const {
            address,
            goal,
            minContribution,
            manager,
            shares,
            totalRaised,
            totalShares,
            title,
            description
        } = this.props;

        return (
            <>
                <Head>
                    <title>Project Details</title>
                    <link rel="stylesheet" href="/privateProjectDetails.css" />
                </Head>
                <div className="App">
                    <div className="card">

                        <h1 className="title" style={{ fontSize: '26px' }}>
                            Title: {title}
                        </h1>
                    </div>
                    <div className="card">
                        <h2 className="description" style={{ fontSize: '22px' }}>
                            Description: {description}
                        </h2>
                    </div>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row>
                                {this.renderCards()}
                            </Grid.Row>

                            <Grid.Column width={6}>
                                <ContributeFormPrivate
                                    address={this.props.address}
                                    share={minContribution}
                                >
                                </ContributeFormPrivate></Grid.Column>
                        </Grid.Column>
                    </Grid>
                </div>
            </>
        );
    }
}

export default PrivateProjectDetails;
