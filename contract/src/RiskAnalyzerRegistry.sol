// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract RiskAnalyzerRegistry {
    struct Analysis {
        address token;
        uint8 riskScore; // 0 - 100
        string riskLevel; // Low | Medium | High
        uint256 timestamp;
        address reporter; // msg.sender
    }

    mapping(address => Analysis[]) private analysesByToken;
    mapping(address => uint256[]) private userSubmissions;

    event AnalysisLogged(
        address indexed token,
        address indexed reporter,
        uint8 riskScore,
        string riskLevel,
        uint256 timestamp
    );

    function _isValidRiskLevel(string calldata level) internal pure returns (bool) {
        bytes32 hash = keccak256(bytes(level));

        return (
            hash == keccak256("Low") ||
            hash == keccak256("Medium") ||
            hash == keccak256("High")
        );
    }

    function logAnalysis(
        address token,
        uint8 riskScore,
        string calldata riskLevel
    ) external {
        require(token != address(0), "Invalid token address");
        require(riskScore <= 100, "Risk score must be <= 100");
        require(_isValidRiskLevel(riskLevel), "Invalid risk level string");

        Analysis memory newAnalysis = Analysis({
            token: token,
            riskScore: riskScore,
            riskLevel: riskLevel,
            timestamp: block.timestamp,
            reporter: msg.sender
        });

        analysesByToken[token].push(newAnalysis);
        // Store index or timestamp? The prompt said userSubmissions[user] -> indexes of submissions
        // Wait, it says "indexes of submissions (optional lightweight tracking)" but doesn't specify which indices. 
        // Let's store the length - 1 of analysesByToken array? No, the length of total global analyses?
        // Wait, the specification says:
        // "Optionally track user submission"
        // And we need:
        // function getUserSubmissionCount(address user) external view returns (uint256)
        // If we only need count, doing a push is enough.
        userSubmissions[msg.sender].push(block.timestamp); // Storing timestamp as an index

        emit AnalysisLogged(token, msg.sender, riskScore, riskLevel, block.timestamp);
    }

    function getLatestAnalysis(address token) external view returns (Analysis memory) {
        require(analysesByToken[token].length > 0, "No analysis found for token");
        return analysesByToken[token][analysesByToken[token].length - 1];
    }

    function getAnalysisCount(address token) external view returns (uint256) {
        return analysesByToken[token].length;
    }

    function getAnalysisByIndex(address token, uint256 index) external view returns (Analysis memory) {
        require(index < analysesByToken[token].length, "Index out of bounds");
        return analysesByToken[token][index];
    }

    function getUserSubmissionCount(address user) external view returns (uint256) {
        return userSubmissions[user].length;
    }
}
