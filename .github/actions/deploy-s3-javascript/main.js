const core= require('@actions/core')
const core= require('@actions/exec')
const core= require('@actions/github')

function run() {
  core.notice('Hello from custom JS Action')
}

run();