import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import CommunityCampaign from "../ethereum/communityCampaign";
import web3 from "../ethereum/web3";
import 'semantic-ui-css/semantic.min.css';

import { Router } from "../routes";
class ContributeFormCommunity extends Component {
    state = {
        errorMessage: '',
        loading: false
    };
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            eth: '',
            val: '',
            minContribution: this.props.minContribution
        };
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        const campaign = CommunityCampaign(this.props.address);
        try {


            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send(
                {
                    from: accounts[0],
                    value: this.state.value
                }
            );
            Router.replaceRoute(`/communityProjectDetails/${this.props.address}`);


        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });



    };
    handleChange = (event) => {
        let val = event.target.value;

        let eths = web3.utils.fromWei(String(val), 'ether');
        this.setState({ value: val, eth: eths });
    };
    render() {
        return (
            <Form onSubmit={(e) => this.onSubmit(e)} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input value={this.state.value}
                        onChange={this.handleChange} label="Wei" labelPosition="right"></Input>

                </Form.Field>

                <Message>

                    <p>
                        {this.state.eth} ethers
                    </p>
                </Message>

                <Message error header="Oops! Something went wrong" content={this.state.errorMessage}></Message>
                <Button loading={this.state.loading} primary>Contribute!</Button>

            </Form>

        );


    }


}
export default ContributeFormCommunity;