import Head from "next/head";
import Payments from "./Payments";
import 'semantic-ui-css/semantic.min.css';
import CommunityCampaign from '../ethereum/communityCampaign';
import React, { Component } from "react";
import { Link } from "../routes";

import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import ContributeFormCommunity from "./ContributeFormCommunity";
import RequestIndex from "./RequestsShow";

class CommunityProjectDetails extends Component {
  static async getInitialProps(props) {

    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const campaign = CommunityCampaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const isInvestor = await campaign.methods.approvers(accounts[0]).call();
    console.log(summary);
    console.log('isInvestor');
    console.log(isInvestor);

    return {
      address: props.query.address,
      balance: summary[1],
      minContribution: summary[0],
      manager: summary[4],
      requestNo: summary[2],
      totalInvestors: summary[3],
      title: summary[5],
      description: summary[6],
      isInvestor: isInvestor,
      self: accounts[0],
    };
  }
  renderCards() {
    const {
      address,
      balance,
      minContribution,
      manager,
      requestNo,
      totalInvestors,
      isInvestor,
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
        'Minimun Contribution required to contribute this project and get Voting rights',
      meta: 'Minimum Contribution (wei)',
    },
    {
      header: balance,
      description:
        'Total Balance left for the project',
      meta: 'Total Balance (Wei)',
    },

    ];
    return <Card.Group items={items}></Card.Group>;
  }

  render() {
    const isLoading = false;
    // replace with appropriate code to check if data is being uploaded and processed

    const {
      balance,
      minContribution,
      manager,
      requestNo,
      totalInvestors,
      title,
      description, self,
      isInvestor

    } = this.props;

    return (
      <>
        <Head>
          <title>Project Details</title>
          <link rel="stylesheet" href="/communityProjectDetails.css" />
        </Head>
        <div className="App">
          <h1 className="title">Title:{' '}{title}</h1>
          <div className="card">
            <h2 className="description">Description: {' '}{description}</h2>
          </div>

          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                {this.renderCards()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <ContributeFormCommunity address={this.props.address}
            minContribution={minContribution}></ContributeFormCommunity>
          {isInvestor === true || self === manager ?
            <Link route={`/communityProjectDetails/${this.props.address}/requests`}>
              <a>
                <Button primary floated="right" style={{ marginBottom: 10 }}>
                  View Requests
                </Button>
              </a>
            </Link> : null}
        </div >
      </>
    );
  }
}

export default CommunityProjectDetails;
