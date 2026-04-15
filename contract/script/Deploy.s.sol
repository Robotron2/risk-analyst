// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/RiskAnalyzerRegistry.sol";

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();

        RiskAnalyzerRegistry registry = new RiskAnalyzerRegistry();

        vm.stopBroadcast();

        console.log("RiskAnalyzerRegistry deployed to:", address(registry));
    }
}
