import { Component } from "react";
import Head from "next/head";
import { Router } from '../routes';

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            amount: "",
            percentage: 0,
            investmentAmount: 100, // add investmentAmount to the component state
        };
    }

    closeModal = () => {
        this.setState({ isModalOpen: false });
        setTimeout(() => {
            Router.pushRoute("/allProjects");
        }, 1500); // wait for 5 seconds before redirecting
    };

    handleAmountChange = (event) => {
        this.setState({ amount: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const minAmount = 1; // 0.1 ethers
        const { amount, investmentAmount } = this.state; // retrieve investmentAmount from state
        if (amount >= minAmount && amount <= investmentAmount) {
            console.log(`Submitted amount: ${amount} ethers`);
            this.setState({ isModalOpen: true }); // Open the modal
        } else if (amount < minAmount) {
            alert(`Amount must be at least ${minAmount} ethers`);
        } else {
            alert(`Amount cannot exceed ${investmentAmount} ethers`);
        }
    };

    calculateProgress = (amount) => {
        const maxAmount = this.state.investmentAmount;
        const etherAmount = Number(amount);
        const etherRatio = (etherAmount / maxAmount) * 100;
        return {
            ether: etherRatio.toFixed(2) + "%",
            percentage: etherRatio.toFixed(2),
        };
    };

    componentDidMount() {
        const { amount } = this.state;
        const percentage = this.calculateProgress(amount).percentage;
        this.setState({ percentage });
    }

    componentDidUpdate(prevProps, prevState) {
        const { amount } = this.state;
        if (prevState.amount !== amount) {
            const percentage = this.calculateProgress(amount).percentage;
            this.setState({ percentage });
        }
    }

    componentDidMount() {
        const { query } = Router.router;
        const { investmentAmount } = query;
        if (investmentAmount) {
            this.setState({ investmentAmount: parseFloat(investmentAmount) });
        }
    }


    render() {
        const { isModalOpen, amount, percentage, investmentAmount } = this.state; // retrieve investmentAmount from state
        const progress = this.calculateProgress(amount);

        return (
            <>
                <Head>
                    <title>Payments</title>
                    <link rel="stylesheet" href="/payments.css" />
                </Head>
                <div className="amount-box">
                    <h2>Investment Amount (Ethers only): {investmentAmount || "Not set"}</h2><div className="progress-bar">
                        <div
                            className={`progress ether-progress ${amount >= investmentAmount ? "green-progress" : ""}`}
                            style={{ width: progress.ether }}
                        ></div>
                        <div className="progress-text">{percentage}%</div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="amount">Enter Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={amount}
                            onChange={this.handleAmountChange}
                            min="1" // set minimum value to 1
                            max={this.props.investmentAmount} // set maximum value to investmentAmount prop
                            step="0.1" // set step to 0.1
                        />
                        <button type="submit">Submit</button>
                    </form>
                    {isModalOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={this.closeModal}>
                                    ×
                                </span>
                                <h2>Shareholding Rights</h2>
                                <p>You are now a shareholder of this company.</p>
                                <p>Shares = xyz</p>
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }
};

export default Payments;