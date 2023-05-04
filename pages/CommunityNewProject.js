import { Component, useState } from "react";
import Head from "next/head";
import { Router } from '../routes';

class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            description: "",
            investment: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    handleInvestmentChange(event) {
        this.setState({ investment: event.target.value });
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
                    <button className="submit"
                        onClick={() => {
                            Router.pushRoute('/allProjects')
                        }}>
                        Submit
                    </button>
                </div>
            </>
        );
    }
};

export default CreateNewProject;
