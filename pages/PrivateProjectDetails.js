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
            style: { overflowWrap: 'break-word' }
        },
        {
            header: minContribution,
            description:
                'The price for 1 share.',
            meta: 'Share Price (wei)',
        },
        {
            header: shares,
            description:
                'Shares owned by you of this Project',
            meta: 'Shares',
        },

        {
            header: totalShares,
            description:
                'Total amount of shares claimed by the Investors',
            meta: 'Total shares',
        },
        {
            header: goal,
            description:
                'Total Funds required by the Project',
            meta: 'Total shares',
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
                    <h1 className="title">Title:{' '}{title}</h1>
                    <div className="card">
                        <h2 className="description">Description: {' '}{description}</h2>
                    </div>
                    <Grid>
                        <Grid.Column>
                            <Grid.Row width={10}>
                                {this.renderCards()}
                            </Grid.Row>
                            <Grid.Column width={6}>
                                <ContributeFormPrivate address={this.props.address} share={minContribution}>
                                </ContributeFormPrivate></Grid.Column>
                        </Grid.Column>
                    </Grid>
                </div>
            </>
        );
    }
}

export default PrivateProjectDetails;
