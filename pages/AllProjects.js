import React, { Component } from 'react';
import Head from "next/head";
import { Router } from '../routes';
import campaignFactory from '../ethereum/campaignFactory'

class AllProjects extends Component {


    static async getInitialProps() {
        const privateNew = [];
        const communityNew = [];
        const communityCampaigns = await campaignFactory.methods.getDeployedCommunityCampaigns().call();
        const privateCampaigns = await campaignFactory.methods.getDeployedPrivateCampaigns().call();


        for (let i = 0; i < communityCampaigns[0].length; i++) {
            let map = {
                address: communityCampaigns[0][i],
                title: communityCampaigns[1][i]
            }
            communityNew.push(map);
        }
        for (let i = 0; i < privateCampaigns[0].length; i++) {
            let map = {
                address: privateCampaigns[0][i],
                title: privateCampaigns[1][i]
            }
            privateNew.push(map);
        }
        console.log(privateNew);
        console.log(communityNew);


        return { privateNew, communityNew };
    }





    state = {
    }


    constructor(props) {
        super(props)
        this.state = {
            heading: 'Various types of projects',
            modalOpen: false,
            private: this.props.privateNew,
            community: this.props.communityNew,
            showPrivate: true,
            showCommunity: true

        };

    }

    handleFilterChange(filter) {

        switch (filter) {
            case 'all':
                this.setState({
                    showPrivate: true, showCommunity: true
                });
                break;
            case 'private':
                this.setState({
                    showPrivate: true, showCommunity: false
                });
                break;
            case 'community':
                this.setState({
                    showPrivate: false, showCommunity: true
                });
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
                <div className="container-fluid h-100">
                    <div className="row profile d-flex justify-content-end align-items-center">

                    </div>
                    <div className="row filter d-flex justify-content-center align-items-center mb-4">
                        <div className="col-md-12">
                            <h1 className="text-center mb-4 font-weight-bold">
                                Various types of projects</h1>

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
                    {/* TO DO 
                    SEPARATE ARE YET TO BE ADDED IN ROUTING  */}
                    {
                        this.state.showCommunity === true && this.state.community.length > 0 ?
                            <div className="row h-100">
                                <div className="col-md-6 left-col d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="title text-center">

                                        Community Projects</h2>
                                    <div className="card-list d-flex flex-wrap">
                                        {Array.isArray(this.state.community) &&
                                            this.state.community.map((project) => (
                                                <div className="card mb-4 mr-4" onClick={() => {
                                                    Router.pushRoute(`/communityProjectDetails/${project.address}`)
                                                }}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{project.title}</h5>
                                                        <p className="card-text">{project.address}</p>

                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div> : null}
                    {
                        this.state.showPrivate === true && this.state.private.length > 0 ?
                            <div className="row h-100">
                                <div className="col-md-6 left-col d-flex flex-column justify-content-center align-items-center">
                                    <h2 className="title text-center">

                                        Private Projects
                                    </h2>
                                    <div className="card-list d-flex flex-wrap">
                                        {Array.isArray(this.state.private) &&
                                            this.state.private.map((project) => (
                                                <div className="card mb-4 mr-4" onClick={() => {
                                                    Router.pushRoute(`/privateProjectDetails/${project.address}`)
                                                }}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{project.title}</h5>
                                                        <p className="card-text">{project.address}</p>

                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div> : null
                    }

                    <div className="container">
                        <div className="buttons">
                            <button className="create-private"
                                onClick={() => {
                                    Router.pushRoute('/newPrivateProject')
                                }}>
                                Create a new Private Project
                            </button>
                            <button className="create-community"
                                onClick={() => {
                                    Router.pushRoute('/newCommunityProject')
                                }}>
                                Create a new Community Project
                            </button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
export default AllProjects;