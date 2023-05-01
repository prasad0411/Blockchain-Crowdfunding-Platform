import Head from "next/head";
import Payments from "./Payments";
import React, { Component } from "react";

class CommunityProjectDetails extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);

    return {
      details: props.query.address,
    };
  }

  render() {
    const isInvestor = true; // replace with appropriate code to check if user is investor
    const hasAccepted = false; // replace with appropriate code to check if request has been accepted by user
    const investors = ["investor1", "investor2", "investor3"]; // replace with array of investors
    const acceptedInvestors = ["investor1", "investor3"]; // replace with array of investors who have accepted the request
    const acceptanceThreshold = investors.length / 2; // calculate acceptance threshold based on number of investors
    const isAccepted = acceptedInvestors.length >= acceptanceThreshold;
    const isManager = true; // replace with appropriate code to check if user is manager
    const isLoading = false; // replace with appropriate code to check if data is being uploaded and processed

    return (
      <>
        <Head>
          <title>Project Details</title>
          <link rel="stylesheet" href="/communityProjectDetails.css" />
        </Head>
        <div className="App">
          <h1 className="title">This is Title</h1>
          <div className="card">
            <h2 className="description">Description</h2>
            <p>
              Lorem ipsum dolor sit amet. Hic libero perferendis et rerum
              dolorum sit provident voluptatem et eveniet debitis qui inventore
              laboriosam ut culpa recusandae. Sed distinctio optio rem
              voluptatibus provident vel nobis placeat!
            </p>
          </div>

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

          {isManager && (
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
