// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/RiskAnalyzerRegistry.sol";

contract RiskAnalyzerRegistryTest is Test {
    RiskAnalyzerRegistry public registry;

    address public user1 = address(0x111);
    address public user2 = address(0x222);
    address public token1 = address(0xAA11);
    address public token2 = address(0xBB22);

    event AnalysisLogged(
        address indexed token,
        address indexed reporter,
        uint8 riskScore,
        string riskLevel,
        uint256 timestamp
    );

    function setUp() public {
        registry = new RiskAnalyzerRegistry();
    }

    // --- SUCCESS CASES ---

    function testLogAnalysis() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 75, "Medium");

        RiskAnalyzerRegistry.Analysis memory analysis = registry.getLatestAnalysis(token1);

        assertEq(analysis.token, token1);
        assertEq(analysis.riskScore, 75);
        assertEq(analysis.riskLevel, "Medium");
        assertEq(analysis.reporter, user1);
        assertEq(analysis.timestamp, block.timestamp);
    }

    function testMultipleUsersLogSameToken() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 10, "Low");

        vm.prank(user2);
        registry.logAnalysis(token1, 90, "High");

        assertEq(registry.getAnalysisCount(token1), 2);
        assertEq(registry.getUserSubmissionCount(user1), 1);
        assertEq(registry.getUserSubmissionCount(user2), 1);
    }

    function testMultipleEntriesPerToken() public {
        vm.startPrank(user1);
        registry.logAnalysis(token1, 10, "Low");
        
        vm.warp(block.timestamp + 100);
        registry.logAnalysis(token1, 20, "Low");
        vm.stopPrank();

        assertEq(registry.getAnalysisCount(token1), 2);
    }

    function testRetrieveLatestAnalysis() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 10, "Low");

        vm.warp(block.timestamp + 10);
        
        vm.prank(user2);
        registry.logAnalysis(token1, 95, "High");

        RiskAnalyzerRegistry.Analysis memory latest = registry.getLatestAnalysis(token1);
        assertEq(latest.riskScore, 95);
        assertEq(latest.reporter, user2);
    }

    function testRetrieveByIndex() public {
        vm.startPrank(user1);
        registry.logAnalysis(token1, 10, "Low");
        registry.logAnalysis(token1, 90, "High");
        vm.stopPrank();

        RiskAnalyzerRegistry.Analysis memory first = registry.getAnalysisByIndex(token1, 0);
        assertEq(first.riskScore, 10);
        assertEq(first.riskLevel, "Low");

        RiskAnalyzerRegistry.Analysis memory second = registry.getAnalysisByIndex(token1, 1);
        assertEq(second.riskScore, 90);
        assertEq(second.riskLevel, "High");
    }

    // --- REVERT CASES ---

    function testRevertZeroAddressToken() public {
        vm.expectRevert("Invalid token address");
        registry.logAnalysis(address(0), 50, "Medium");
    }

    function testRevertRiskScoreTooHigh() public {
        vm.expectRevert("Risk score must be <= 100");
        registry.logAnalysis(token1, 101, "High");
    }

    function testRevertInvalidRiskLevelString() public {
        vm.expectRevert("Invalid risk level string");
        registry.logAnalysis(token1, 50, "moderate"); // Not exact string match
    }

    function testRevertGetLatestNoAnalysis() public {
        vm.expectRevert("No analysis found for token");
        registry.getLatestAnalysis(token1);
    }

    function testRevertGetByIndexOutOfBounds() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 50, "Medium");

        vm.expectRevert("Index out of bounds");
        registry.getAnalysisByIndex(token1, 1); // Only index 0 exists
    }

    // --- EDGE CASES ---

    function testEdgeRiskScoreZero() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 0, "Low");

        RiskAnalyzerRegistry.Analysis memory latest = registry.getLatestAnalysis(token1);
        assertEq(latest.riskScore, 0);
    }

    function testEdgeRiskScoreHundred() public {
        vm.prank(user1);
        registry.logAnalysis(token1, 100, "High");

        RiskAnalyzerRegistry.Analysis memory latest = registry.getLatestAnalysis(token1);
        assertEq(latest.riskScore, 100);
    }

    function testRapidMultipleSubmissions() public {
        vm.startPrank(user1);
        for (uint i = 0; i < 10; i++) {
            registry.logAnalysis(token1, 50, "Medium");
        }
        vm.stopPrank();

        assertEq(registry.getAnalysisCount(token1), 10);
        assertEq(registry.getUserSubmissionCount(user1), 10);
    }

    // --- EVENT TESTING ---

    function testEventEmit() public {
        vm.expectEmit(true, true, false, true);
        emit AnalysisLogged(token1, user1, 80, "High", block.timestamp);

        vm.prank(user1);
        registry.logAnalysis(token1, 80, "High");
    }
}
