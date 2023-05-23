import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import 'semantic-ui-css/semantic.min.css';
import Campaign from "../../ethereum/communityCampaign";
import { Router } from "../../routes";


class RequestRow extends Component {
    onApprove = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(this.props.id).send(
            {
                from: accounts[0]
            }
        );
        Router.replaceRoute(`/communityProjectDetails/${this.props.address}/requests`);


    }
    onFinalize = async () => {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizRequest(this.props.id).send(
            {
                from: accounts[0]
            }
        );


    }


    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount, isManager } = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;
        return (<Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
            <Cell>
                {id}
            </Cell>
            <Cell>
                {request.description}
            </Cell>
            <Cell>
                {web3.utils.fromWei(request.value, 'ether')}
            </Cell>
            <Cell>
                {request.recipient}
            </Cell>
            <Cell>
                {request.approvalCount}/{approversCount}
            </Cell>
            <Cell>{request.complete ? null : (
                <Button color={"green"} basic onClick={this.onApprove}>
                    Approve

                </Button>)}
            </Cell>
            {isManager === true ?
                <Cell>{request.complete ? null : (
                    <Button color={"teal"} basic onClick={this.onFinalize}>
                        Finalize

                    </Button>)}
                </Cell> : null}

        </Row>);

    }
}
export default RequestRow;