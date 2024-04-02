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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
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
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start run');
        try {
            const inputs = {
                token: core.getInput('token'),
                repository: core.getInput('repository'),
                eventType: core.getInput('event-type'),
                clientPayload: core.getInput('client-payload'),
            };
            core.debug(`Inputs: ${(0, util_1.inspect)(inputs)}`);
            const [owner, repo] = inputs.repository.split('/');
            const octokit = github.getOctokit(inputs.token);
            console.log(inputs, 'inputs');
            console.log(inputs.eventType, 'eventType');
            console.log(inputs.clientPayload, 'clientPayload');
            console.log(owner, 'owner');
            console.log(repo, 'repo');
            console.log(octokit, 'octokit');
            yield octokit.rest.repos.createDispatchEvent({
                owner: owner,
                repo: repo,
                event_type: inputs.eventType,
                client_payload: JSON.parse(inputs.clientPayload)
            });
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
        console.log('end run');
    });
}
run();
