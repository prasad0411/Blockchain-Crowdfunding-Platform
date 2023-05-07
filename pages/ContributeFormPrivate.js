import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import PrivateCampaign from "../ethereum/privateCampaign";
import web3 from "../ethereum/web3";
import 'semantic-ui-css/semantic.min.css';

import { Router } from "../routes";
class ContributeFormPrivate extends Component {
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
            share: this.props.address.share
        };
        this.onSubmit = this.onSubmit.bind(this)
    }

    async onSubmit(event) {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: '' });
        const campaign = PrivateCampaign(this.props.address);
        try {


            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send(
                {
                    from: accounts[0],
                    value: this.state.wei
                }
            );
            Router.replaceRoute(`/privateProjectDetails/${this.props.address}`);


        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });



    };
    handleChange = (event) => {
        let val = event.target.value;
        let weis = Number(this.props.share) * Number(val);
        let eths = web3.utils.fromWei(String(weis), 'ether');
        this.setState({ value: val, wei: weis, eth: eths });
    };
    render() {
        return (
            <Form onSubmit={(e) => this.onSubmit(e)} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input value={this.state.value}
                        onChange={this.handleChange} label="shares" labelPosition="right"></Input>

                </Form.Field>
                {/* <Message>

                    <p>
                        1 ETH is equal to 1,000,000,000,000,000,000 wei
                    </p>
                </Message> */}
                <Message>

                    <p>
                        {this.state.wei} Wei
                    </p>
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
export default ContributeFormPrivate;