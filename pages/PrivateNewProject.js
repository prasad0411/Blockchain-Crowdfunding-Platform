import { Component, useState } from "react";
import Head from "next/head";
import { Router } from '../routes';
import campaignFactory from '../ethereum/campaignFactory'
import { Loader, Dimmer } from "semantic-ui-react";
import web3 from "../ethereum/web3";
class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            description: "",
            investment: "",
            sharePrice: "",
            loading: false
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
        this.handleSharePriceChange = this.handleSharePriceChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit() {

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaignFactory.methods.createPrivateCampaign(this.state.sharePrice, this.state.investment, this.state.text, this.state.description).send({
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

    handleSharePriceChange(event) {
        this.setState({ sharePrice: event.target.value });
    }

    render() {
        return (
            <>
                <Head>
                    <title>New private project</title>
                    <link rel="stylesheet" href="/newPrivateProject.css" />
                </Head>

                <div className="App">
                    <header>
                        <h1>Create a new Private Project</h1>
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
                    <div className="add-sharePrice">
                        <p>Cost of 1 Share Price</p>
                        <div className="sharePrice-card">
                            <textarea
                                className="textarea-4"
                                placeholder="Share price"
                                value={this.state.sharePrice}
                                onChange={this.handleSharePriceChange}
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
