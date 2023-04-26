import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

const investmentAmount = 100;

export default function Payments() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [percentage, setPercentage] = useState(0);

    const router = useRouter();

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            router.push('/allProjects');
        }, 1500); // wait for 5 seconds before redirecting
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const minAmount = 1; // 0.1 ethers
        if (amount >= minAmount && amount <= investmentAmount) {
            console.log(`Submitted amount: ${amount} ethers`);
            setIsModalOpen(true); // Open the modal
        } else if (amount < minAmount) {
            alert(`Amount must be at least ${minAmount} ethers`);
        } else {
            alert(`Amount cannot exceed ${investmentAmount} ethers`);
        }
    };

    const calculateProgress = (amount) => {
        const maxAmount = investmentAmount; // set max amount to investmentAmount prop
        const etherAmount = Number(amount);
        const etherRatio = (etherAmount / maxAmount) * 100;
        return {
            ether: etherRatio.toFixed(2) + "%",
            percentage: etherRatio.toFixed(2),
        };
    };

    useEffect(() => {
        setPercentage(calculateProgress(amount).percentage);
    }, [amount, calculateProgress]);

    const progress = calculateProgress(amount);
    return (
        <>
            <Head>
                <title>Payments</title>
                <link rel="stylesheet" href="/payments.css" />
            </Head>
            <div className="amount-box">
                <h2>Investment Amount (Ethers only): {investmentAmount}</h2>
                <div className="progress-bar">
                    <div
                        className={`progress ether-progress ${amount >= investmentAmount ? "green-progress" : ""
                            }`}
                        style={{ width: progress.ether }}
                    ></div>
                    <div className="progress-text">{percentage}%</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="amount">Enter Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        min="1" // set minimum value to 1
                        max={investmentAmount} // set maximum value to investmentAmount prop
                        step="0.1" // set step to 0.1
                    />
                    <button type="submit">Submit</button>
                </form>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>
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
