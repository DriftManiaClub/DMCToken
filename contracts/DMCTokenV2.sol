// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./DMCToken.sol";

/// @custom:security-contact dev@driftmania.club
contract DMCTokenV2 is DMCToken {

    bool private _rugPullProtection;

    function enableRugPullProtection() public onlyOwner {
        _rugPullProtection = true;
    }

}
