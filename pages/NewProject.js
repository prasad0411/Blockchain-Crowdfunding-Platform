import { Component, useState } from "react";
import Head from "next/head";
import { Router } from '../routes';


class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            description: "",
            maxEth: "",
            minEth: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMaxEth = this.handleMaxEth.bind(this);
        this.handleMinEth = this.handleMinEth.bind(this);
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    handleMaxEth(event) {
        this.setState({ maxEth: event.target.value });
    }

    handleMinEth(event) {
        this.setState({ minEth: event.target.value });
    }

    render() {
        return (
            <>
                <Head>
                    <title>New project</title>
                    <link rel="stylesheet" href="/newProject.css" />
                </Head>

                <div className="App">
                    <header>
                        <h1>Create a new Project</h1>
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
                    <div className="add-MaxEth">
                        <p>Maximum Eth to be collected</p>
                        <div className="MaxEth-card">
                            <textarea
                                className="textarea-3"
                                placeholder="Max Eth"
                                value={this.state.maxEth}
                                onChange={this.handleMaxEth}
                            ></textarea>
                        </div>
                    </div>
                    <div className="add-MinEth">
                        <p>Minimum Eth to be collected</p>
                        <div className="MinEth-card">
                            <textarea
                                className="textarea-4"
                                placeholder="Min Eth"
                                value={this.state.minEth}
                                onChange={this.handleMinEth}
                            ></textarea>
                        </div>
                    </div>
                    <button className="submit"
                        onClick={() => { Router.pushRoute('/payments') }}>
                        Submit
                    </button>
                </div>
            </>
        );
    }
};

export default CreateNewProject;