workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Deploy" {
  needs = "Build"
  uses = "nuxt/actions-yarn@master"
  args = "deploy"
}
