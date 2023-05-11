import { Component, useState } from "react";
import Head from "next/head";
import { Router } from '../routes';
import { Loader, Dimmer } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import campaignFactory from "../ethereum/campaignFactory";

class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            description: "",
            investment: "",
            minInvestmentForVoting: "",
            loading: false
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
        this.handleMinInvestmentForVotingChange = this.handleMinInvestmentForVotingChange.bind(this);
    }
    async onSubmit() {

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaignFactory.methods.createCommunityCampaign(this.state.minInvestmentForVoting, this.state.investment, this.state.text, this.state.description).send({
                from: accounts[0]
            });
            Router.pushRoute('/allProjects');

        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });


    };

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    handleInvestmentChange(event) {
        this.setState({ investment: event.target.value });
    }

    handleMinInvestmentForVotingChange(event) {
        this.setState({ minInvestmentForVoting: event.target.value });
    }

    render() {
        return (
            <>
                <Head>
                    <title>New community project</title>
                    <link rel="stylesheet" href="/newCommunityProject.css" />
                </Head>

                <div className="App">
                    <header>
                        <h1>Create a new Community Project</h1>
                    </header>
                    <div className="add-title">
                        <p>Title</p>
                        <div className="text-card">
                            <textarea
                                className="textarea-1"
                                placeholder="Enter title here"
                                value={this.state.text}
                                onChange={this.handleTextChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="add-description">
                        <p>Description</p>
                        <div className="description-card">
                            <textarea
                                className="textarea-2"
                                placeholder="Enter description here"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="add-investment">
                        <p>Total Investment Required</p>
                        <div className="investment-card">
                            <textarea
                                className="textarea-3"
                                placeholder="Investment amount"
                                value={this.state.investment}
                                onChange={this.handleInvestmentChange}
                            ></textarea>
                        </div>
                    </div>
                    <div className="add-min-investment-for-voting">
                        <p>Minimum Investment Required for Voting Rights</p>
                        <div className="min-investment-for-voting-card">
                            <textarea
                                className="textarea-4"
                                placeholder="Minimum investment amount required for voting rights"
                                value={this.state.minInvestmentForVoting}
                                onChange={this.handleMinInvestmentForVotingChange}
                            ></textarea>
                        </div>
                    </div>
                    {this.state.loading === false ?
                        <button className="submit"
                            onClick={() => {
                                this.onSubmit();

                            }}>
                            Submit
                        </button> : <Dimmer active>
                            <Loader>Loading</Loader>
                        </Dimmer>}
                </div>
            </>
        );
    }
};

export default CreateNewProject;
