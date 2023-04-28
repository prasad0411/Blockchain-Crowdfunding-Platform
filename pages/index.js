import React, { Component } from 'react';
import Head from "next/head";
import { Router } from '../routes';
import Web3 from "web3";

class CampaignIndex extends Component {
    state = {
    }
    community = [{
        id: 4,
        title: 'Community Project 2',
        type: 'community',
        description: 'This is the description of community project 2'
    },
    {
        id: 5,
        title: 'Private Project 3',
        type: 'private',
        description: 'This is the description of private project 3'
    },
    {
        id: 6,
        title: 'Private Project 4',
        type: 'private',
        description: 'This is the description of private project 4'
    },
    {
        id: 7,
        title: 'Community Project 3',
        type: 'community',
        description: 'This is the description of community project 3'
    },];
    private = [
        {
            id: 1,
            title: 'Private Project 1',
            type: 'private',
            description: 'This is the description of private project 1'
        },
        {
            id: 3,
            title: 'Community Project 1',
            type: 'community',
            description: 'This is the description of community project 1'
        },
        {
            id: 2,
            title: 'Private Project 2',
            type: 'private',
            description: 'This is the description of private project 2'
        },

        // {
        //     id: 8,
        //     title: 'Community Project 4',
        //     type: 'community',
        //     description: 'This is the description of community project 4'
        // },
        // {
        //     id: 9,
        //     title: 'Private Project 5',
        //     type: 'private',
        //     description: 'This is the description of private project 5'
        // },
        // {
        //     id: 10,
        //     title: 'Community Project 5',
        //     type: 'community',
        //     description: 'This is the description of community project 5'
        // }
    ];

    constructor(props) {
        super(props)
        this.state = {
            filter: 'all',
            heading: 'Crowd Funding Website',
            modalOpen: false,
            filteredProjects: [],
        };

    }

    handleFilterChange(filter) {

        switch (filter) {
            case 'all':
                this.setState({ filter: 'all', heading: 'All Projects', filteredProjects: this.private + this.community });
                break;
            case 'private':
                this.setState({ filter: 'private', heading: 'Private Projects', filteredProjects: this.private });
                break;
            case 'community':
                this.setState({ filter: 'community', heading: 'Community Projects', filteredProjects: this.community });

                break;
            default:
            // code block
        }



    };

    render() {

        return (
            <>
                <Head>
                    <title>All Projects</title>
                    <link rel="stylesheet" href="/allProjects.css" />
                </Head>
                <button
                    className={`btn btn-sm btn-primary rounded-pill mr-2
                                Connect`}
                    onClick={async () => {
                        let web3;
                        const address = [];
                        if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
                            window.ethereum.request({ method: "eth_requestAccounts" }).then(res => {
                                // Return the address of the wallet
                                console.log(res)
                            });
                            web3 = new Web3(window.ethereum);
                            const accounts = await web3.eth.getAccounts();
                            console.log(accounts);
                        } else {
                            // We are on the server *OR* the user is not running metamask
                            const provider = new Web3.providers.HttpProvider(
                                "https://goerli.infura.io/v3/d881b5869ec3440f8573212195db4e55"
                            );
                            web3 = new Web3(provider);
                            const accounts = await web3.eth.getAccounts();
                            console.log(accounts);
                        }

                    }}
                >
                    Connect
                </button>

                <div className="container-fluid h-100">
                    <div className="row profile d-flex justify-content-end align-items-center">

                    </div>
                    <div className="row filter d-flex justify-content-center align-items-center mb-4">
                        <div className="col-md-12">
                            <h1 className="text-center mb-4 font-weight-bold">Crowd Funding Website</h1>

                            <button
                                className={`btn btn-sm btn-primary rounded-pill mr-2
                                ${this.state.filter === 'all' ? 'active' : ''}`}
                                onClick={() => { this.handleFilterChange('all'); }}
                            >
                                All Projects
                            </button>
                            <button
                                className={`btn btn-sm btn-primary rounded-pill mr-2
                                ${this.state.filter === 'private' ? 'active' : ''}`}
                                onClick={() => { this.handleFilterChange('private'); }}
                            >
                                Private Projects
                            </button>
                            <button
                                className={`btn btn-sm btn-primary rounded-pill
                                ${this.state.filter === 'community' ? 'active' : ''}`}
                                onClick={() => { this.handleFilterChange('community'); }}
                            >
                                Community Projects
                            </button>

                        </div>
                    </div>
                    <div className="row h-100">
                        <div className="col-md-6 left-col d-flex flex-column justify-content-center align-items-center">
                            <h2 className="title text-center">{this.state.filter === 'private' ? 'Private Projects' : 'Community Projects'}</h2>
                            <div className="card-list d-flex flex-wrap">
                                {this.state.filteredProjects.map((project) => (
                                    <div className="card mb-4 mr-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="floating-action-button"
                        onClick={() => {
                            Router.pushRoute('/newProject')
                        }}
                        title='Create a new project'>
                        <span>Project ? </span>
                        <i className="fa fa-plus"></i>
                    </button>
                    {this.state.modalOpen && <ProjectModal setModalOpen={setModalOpen} />}
                </div>
            </>
        );
    }


}
export default CampaignIndex;