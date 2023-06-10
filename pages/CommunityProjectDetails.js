import Head from "next/head";
import Payments from "./Payments";
import 'semantic-ui-css/semantic.min.css';
import CommunityCampaign from '../ethereum/communityCampaign';
import React, { Component } from "react";
import { Link } from "../routes";
import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import ContributeFormCommunity from "./ContributeFormCommunity";

class CommunityProjectDetails extends Component {
  //INTEGRATION WTIH WEB3
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

    const items = [
      {
        description: 'The manager has created this campaign and can withdraw money.',
        meta: 'Address of Manager',
        header: manager,
        style: { overflowWrap: 'break-word' },
        fluid: true,
        className: 'custom-card',
      },
      {
        description: 'Minimum Contribution required to contribute to this project and get voting rights.',
        meta: 'Minimum Contribution (wei)',
        header: minContribution,
        fluid: true,
        className: 'custom-card',
      },
      {
        description: 'Total balance left for the project.',
        meta: 'Total Balance (Wei)',
        header: balance,
        fluid: true,
        className: 'custom-card',
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
            </Grid.Column>
          </Grid>
          <ContributeFormCommunity
            address={this.props.address}
            minContribution={minContribution}>
          </ContributeFormCommunity>
          {isInvestor === true || self === manager ? (
            <Link route={`/communityProjectDetails/${this.props.address}/requests`}>
              <a>
                <Button
                  primary
                  floated="right"
                  style={{
                    marginBottom: '10px',
                    backgroundColor: '#990000',
                    color: '#fff',
                    transition: 'background-color 0.3s ease-in-out',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    fontFamily: 'Roboto',
                  }}
                  className="view-requests-button"
                >
                  View Requests
                </Button>
              </a>
            </Link>
          ) : null}

        </div >
      </>
    );
  }
}

export default CommunityProjectDetails;
