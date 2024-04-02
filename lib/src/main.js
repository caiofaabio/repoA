"use strict";
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
        // try {
        //   const inputs = {
        //     token: core.getInput('token'),
        //     repository: core.getInput('repository'),
        //     eventType: core.getInput('event-type'),
        //     clientPayload: core.getInput('client-payload'),
        //   }
        //   core.debug(`Inputs: ${inspect(inputs)}`)
        //   const [owner, repo] = inputs.repository.split('/')
        //   const octokit = github.getOctokit(inputs.token)
        //   console.log(inputs.clientPayload, 'clientPayload')
        //   await octokit.rest.repos.createDispatchEvent({
        //     owner: owner,
        //     repo: repo,
        //     event_type: inputs.eventType,
        //     client_payload: JSON.parse(inputs.clientPayload)
        //   })
        // } catch (error) {
        //   core.debug(inspect(error))
        //   if (hasErrorStatus(error) && error.status == 404) {
        //     core.setFailed(
        //       'Repository not found, OR token has insufficient permissions.'
        //     )
        //   } else {
        //     core.setFailed(getErrorMessage(error))
        //   }
        // }
        console.log('here');
    });
}
run();
