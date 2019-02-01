workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Deploy" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run deploy"
}
