workflow "Deploy" {
  on = "push"
  resolves = ["npm run deploy"]
}

action "npm run deploy" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "npm run deploy"
}
