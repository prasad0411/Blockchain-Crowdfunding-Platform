import React, { Component } from "react";
import { Button, Table, Container } from "semantic-ui-react";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import 'semantic-ui-css/semantic.min.css';
import Campaign from "../ethereum/communityCampaign"
import RequestRow from "./components/RequestRow";


class RequestIndex extends Component {
    static async getInitialProps(props) {
        // const address = props.address;
        // const isManager = props.isManager;
        // console.log('isManager');
        // console.log(isManager);
        // conpsole.log(address);
        const address = props.query.address;
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(address);
        const summary = await campaign.methods.getSummary().call();
        const isManager = summary[4] === accounts[0];
        const approversCount = await campaign.methods.approversCount().call();

        const requestCount = await campaign.methods.getRequestsCount().call();
        let requests = Array(0);
        console.log('Printing request count')
        console.log(requestCount);
        console.log(approversCount);


        if (requestCount > 0) {
            requests = await Promise.all(
                Array(parseInt(requestCount)).fill().map((element, index) => {
                    let val = campaign.methods.requests(index).call();
                    console.log(val);
                    return val;
                })
            );
        }

        return { address, requests, requestCount, approversCount, isManager };
    }
    renderRows() {

        if (typeof this.props.requests === "undefined" || this.props.requests.length == 0) {
            return null;
        }
        return this.props.requests.map((request, index) => {
            return <RequestRow request={request} id={index} isManager={this.props.isManager} approversCount={this.props.approversCount} key={index} address={this.props.address}></RequestRow>
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (

            
            <Container >
                <Header></Header>
                <h3>Requests</h3>
                {this.props.isManager === true ?
                    <Link route={`/communityProjectDetails/${this.props.address}/requests/new`}>
                        <a>
                            <Button primary floated="right" style={{ marginBottom: 10 }}>
                                Add Request
                            </Button>
                        </a>
                    </Link> : null}
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRows()}
                    </Body>
                </Table>
                <div>Found {this.props.requestCount} requests</div>
            </Container>
        )
    }
}
export default RequestIndex;