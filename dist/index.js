"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
// const core = require('@actions/core');
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