import * as core from '@actions/core'
import * as github from '@actions/github'
import {inspect} from 'util'

/* eslint-disable  @typescript-eslint/no-explicit-any */
function hasErrorStatus(error: any): error is {status: number} {
  return typeof error.status === 'number'
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

async function run(): Promise<void> {
  try {
    const inputs = {
      clientPayload: core.getInput('client-payload'),
    }
    core.debug(`Inputs: ${inspect(inputs)}`)

    
  } catch (error) {
    core.debug(inspect(error))
    if (hasErrorStatus(error) && error.status == 404) {
      core.setFailed(
        'Repository not found, OR token has insufficient permissions.'
      )
    } else {
      core.setFailed(getErrorMessage(error))
    }
  }
}

run()