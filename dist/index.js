"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as core from '@actions/core';
const core = require('@actions/core');
const util_1 = require("util");
/* eslint-disable  @typescript-eslint/no-explicit-any */
function hasErrorStatus(error) {
    return typeof error.status === 'number';
}
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
async function run() {
    try {
        const inputs = {
            clientPayload: core.getInput('client-payload'),
        };
        core.debug(`Inputs: ${(0, util_1.inspect)(inputs)}`);
    }
    catch (error) {
        core.debug((0, util_1.inspect)(error));
        if (hasErrorStatus(error) && error.status == 404) {
            core.setFailed('Repository not found, OR token has insufficient permissions.');
        }
        else {
            core.setFailed(getErrorMessage(error));
        }
    }
}
run();
//# sourceMappingURL=index.js.map