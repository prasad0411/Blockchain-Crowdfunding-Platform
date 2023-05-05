// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

contract CampaignFactory {
    address[] public deployedCommunityCampaigns;
    address[] public deployedPrivateCampaigns;

    string[] public deployedCommunityCampaignTitles;
    string[] public deployedPrivateCampaignTitles;

    function createCommunityCampaign(
        uint minimum,
        uint goal,
        string memory _title,
        string memory _description
    ) public {
        address newCampaign = address(
            new CommunityCampaign(
                minimum,
                goal,
                msg.sender,
                _title,
                _description
            )
        );
        deployedCommunityCampaigns.push(newCampaign);
        deployedCommunityCampaignTitles.push(_title);
    }

    function getDeployedCommunityCampaigns()
        public
        view
        returns (address[] memory, string[] memory)
    {
        return (deployedCommunityCampaigns, deployedCommunityCampaignTitles);
    }

    function createPrivateCampaign(
        uint minimum,
        uint goal,
        string memory _title,
        string memory _description
    ) public {
        address newCampaign = address(
            new PrivateCampaign(minimum, goal, msg.sender, _title, _description)
        );
        deployedPrivateCampaigns.push(newCampaign);
        deployedPrivateCampaignTitles.push(_title);
    }

    function getDeployedPrivateCampaigns()
        public
        view
        returns (address[] memory, string[] memory)
    {
        return (deployedPrivateCampaigns, deployedPrivateCampaignTitles);
    }
}

contract CommunityCampaign {
    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    mapping(uint => Request) public requests;
    uint private currentIndex;
    address public manager;
    uint public minimumContribution;
    uint public goal;
    string public title;
    string public description;

    uint public approversCount;
    mapping(address => bool) public approvers;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(
        uint minimum,
        uint goalAmount,
        address sender,
        string memory _title,
        string memory _description
    ) {
        manager = sender;
        minimumContribution = minimum;
        goal = goalAmount;
        title = _title;
        description = _description;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approversCount++;
        approvers[msg.sender] = true;
    }

    function createRequest(
        string memory _description,
        uint value,
        address recipient
    ) public restricted {
        Request storage newRequestInStorage = requests[currentIndex];
        newRequestInStorage.description = _description;
        newRequestInStorage.value = value;
        newRequestInStorage.recipient = payable(recipient);
        newRequestInStorage.complete = false;
        newRequestInStorage.approvalCount = 0;
        currentIndex++;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(!request.complete);
        require(request.approvalCount > (approversCount / 2));
        request.recipient.transfer(request.value);

        request.complete = true;
    }

    function getSummary()
        public
        view
        returns (uint, uint, uint, uint, address, string memory, string memory)
    {
        return (
            minimumContribution,
            address(this).balance,
            currentIndex,
            approversCount,
            manager,
            title,
            description
        );
    }

    function getRequestsCount() public view returns (uint) {
        return (currentIndex);
    }
}

contract PrivateCampaign {
    address payable public owner;
    string public title;
    string public description;
    uint public goal;
    uint public sharePrice;
    uint public totalShares;
    uint public totalRaised;
    uint public minContribution;
    mapping(address => uint) public shares;
    mapping(address => uint) public contributions;
    bool public ended;

    event GoalReached(address recipient, uint totalAmountRaised);
    event FundTransfer(address backer, uint amount, bool isContribution);
    event WithdrawShares(address investor, uint sharesWithdrawn);

    constructor(
        uint _minContribution,
        uint _goal,
        address sender,
        string memory _title,
        string memory _description
    ) {
        owner = payable(sender);
        goal = _goal;
        sharePrice = _minContribution;
        minContribution = _minContribution;
        title = _title;
        description = _description;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function contribute() public payable {
        require(!ended);
        require(msg.value > 0);
        uint numShares = msg.value / sharePrice;
        shares[msg.sender] += numShares;
        contributions[msg.sender] += msg.value;
        totalShares += numShares;
        totalRaised += msg.value;
        emit FundTransfer(msg.sender, msg.value, true);
    }

    function withdrawShares() public {
        require(!ended);
        require(shares[msg.sender] > 0);
        require(contributions[msg.sender] >= minContribution);

        uint numShares = shares[msg.sender];
        shares[msg.sender] = 0;
        totalShares -= numShares;

        uint amount = numShares * sharePrice;
        contributions[msg.sender] -= amount;
        totalRaised -= amount;

        payable(msg.sender).transfer(amount);

        emit WithdrawShares(msg.sender, numShares);
    }

    function withdrawFunds() public onlyOwner {
        require(ended);

        if (totalRaised >= goal) {
            payable(owner).transfer(address(this).balance);
            emit GoalReached(owner, totalRaised);
        } else {
            ended = true;
        }
    }

    function getRefund() public {
        require(ended && totalRaised < goal && contributions[msg.sender] > 0);

        uint amount = contributions[msg.sender];
        contributions[msg.sender] = 0;
        payable(msg.sender).transfer(amount);

        emit FundTransfer(msg.sender, amount, false);
    }

    function getSummary()
        public
        view
        returns (
            uint,
            uint,
            address,
            uint,
            uint,
            uint,
            uint,
            string memory,
            string memory
        )
    {
        return (
            goal,
            minContribution,
            owner,
            shares[msg.sender],
            contributions[msg.sender],
            totalRaised,
            totalShares,
            title,
            description
        );
    }
}
