import React, { Component } from "react";
import web3 from "../ethereum/web3"
import Campaign from "../ethereum/communityCampaign"
import { Link, Router } from "../routes"
import { Button, Container, Form, Input, Message } from "semantic-ui-react";

import 'semantic-ui-css/semantic.min.css';

class RequestNew extends Component {
    state = {
        errorMessage: '',
        loading: false
    };

    static async getInitialProps(props) {
        const { address } = props.query;
        return { address };


    }
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            description: '',
            recipient: '',
            wei: ''
        };
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        const { description, value, recipient } = this.state;
        try {
            const accounts = await web3.eth.getAccounts();
            const campaign = Campaign(this.props.address);
            await campaign.methods.createRequest(description, web3.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });
            Router.pushRoute(`/communityProjectDetails/${this.props.address}`);


        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });



    };

    render() {
        return (<Container>
            <Link route={`/communityProjectDetails/${this.props.address}`}>
                <a>
                    Back
                </a>
            </Link>
            <h3>Create a Request</h3>
            <Form onSubmit={(e) => this.onSubmit(e)} error={!!this.state.errorMessage} >
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={event => this.setState({ description: event.target.value })}></Input>
                </Form.Field>
                <Form.Field>
                    <label>Value in ether</label>
                    <Input value={this.state.value} onChange={event => this.setState({ value: event.target.value, wei: web3.utils.toWei(event.target.value, 'ether') })}></Input>

                </Form.Field>
                <Message>

                    <p>
                        {this.state.wei} Wei
                    </p>
                </Message>
                <Form.Field>
                    <label>Recipient</label>
                    <Input value={this.state.recipient} onChange={event => this.setState({ recipient: event.target.value })}></Input>

                </Form.Field>
                <Message error header="Oops! Something went wrong" content={this.state.errorMessage}></Message>
                <Button type='submit' loading={this.state.loading} primary>Create!</Button>
            </Form></Container>);
    }

}
export default RequestNew;