import Head from "next/head";
import Payments from "./Payments";
import 'semantic-ui-css/semantic.min.css';
import CommunityCampaign from '../ethereum/communityCampaign';
import React, { Component } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import web3 from "../ethereum/web3";

class CommunityProjectDetails extends Component {
  static async getInitialProps(props) {

    console.log(props.query.address);
    const accounts = await web3.eth.getAccounts();

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
      meta: 'Total Balance',
    },

    ];
    return <Card.Group items={items}></Card.Group>;
  }

  render() {

    const hasAccepted = false; // replace with appropriate code to check if request has been accepted by user
    const investors = ["investor1", "investor2", "investor3"]; // replace with array of investors
    const acceptedInvestors = ["investor1", "investor3"]; // replace with array of investors who have accepted the request
    const acceptanceThreshold = investors.length / 2; // calculate acceptance threshold based on number of investors
    const isAccepted = acceptedInvestors.length >= acceptanceThreshold;
    const isManager = true; // replace with appropriate code to check if user is manager
    const isLoading = false; // replace with appropriate code to check if data is being uploaded and processed

    const {
      address,
      balance,
      minContribution,
      manager,
      requestNo,
      totalInvestors,
      isInvestor,
      title,
      description, self

    } = this.props;

    return (
      <>
        <Head>
          <title>Project Details</title>
          <link rel="stylesheet" href="/communityProjectDetails.css" />
        </Head>
        <div className="App">
          <h1 className="title">{title}</h1>
          <div className="card">
            <h2 className="description">Description</h2>
            <p>
              {description}
            </p>
          </div>

          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                {this.renderCards()}
              </Grid.Column>
              {/* <Grid.Column width={6}><ContributeForm
                            address={this.props.address}></ContributeForm>
                            </Grid.Column> */}
            </Grid.Row>
          </Grid>

          <Payments />

          {isInvestor && (
            <div className="card">
              <h2 className="description">Recipient Address</h2>
              <p>{/* display address of recipient */}</p>
              <h2 className="description">Description</h2>
              <p>{/* display description of request */}</p>
              <h2 className="description">Amount</h2>
              <p>{/* display amount of investment requested */}</p>
              {!hasAccepted && (
                <button
                  className="button"
                  onClick={() =>
                    confirm("Are you sure you want to accept this request?")
                      ? this.setState({ hasAccepted: true })
                      : null
                  }
                >
                  Accept
                </button>
              )}
              {isAccepted && hasAccepted && (
                <p>The request for usage of investment has been accepted!</p>
              )}
            </div>
          )}

          {manager === self && (
            <div className="card">
              <h2 className="description">Recipient Address</h2>
              <input type="text" placeholder="Enter recipient address" />
              <h2 className="description">Description</h2>
              <input type="text" placeholder="Enter description" />
              <h2 className="description">Amount</h2>
              <input type="number" placeholder="Enter amount" />
              <button
                className="button"
                onClick={() => this.setState({ isLoading: true })}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default CommunityProjectDetails;
